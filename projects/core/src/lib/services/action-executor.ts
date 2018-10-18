import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { Subject, from, Observable } from 'rxjs';
import { filter, takeUntil, catchError } from 'rxjs/operators';
import { LifetimeEvents } from 'projects/core/src/lib/services/lifetime-events';

export interface ActionEvent {
  action: string;
  name: string;
  payload: any;
}

@Injectable()
export class ActionExecutorService {
  private eventsSubject = new Subject<ActionEvent>();
  private eventsObservable = from(this.eventsSubject);

  constructor(private lifetimeEvents: LifetimeEvents, private http: HttpClient) {}

  private request({ href: url, method }, body): Observable<HttpResponse<any>> {
    return this.http.request(method, url, { body })
      .pipe(
        filter<HttpResponse<any>>(event => !event || event.type === HttpEventType.Response)
      );
  }

  execute({ parent, ...action }: any, fields: any) {
    this.request(action, fields).pipe(
        catchError(error => {
          this.eventsSubject.next({
            action: action.name,
            name: 'error', payload: {
              action, parent, fields, error
            }
          });

          return [];
        })
      )
      .subscribe(response => this.eventsSubject.next({
        action: action.name,
        name: 'success',
        payload: {
          action, parent, fields, response
        }
      }));
  }

  on(action: string, ...events: Array<string>): Observable<ActionEvent> {
    return this.eventsObservable
      .pipe(
        filter(({ action: matchingAction, name }) =>
          (action === '*' || matchingAction === action) &&
          (name === '*' || events.includes(name))
        ),
        takeUntil(this.lifetimeEvents.dispose)
      );
  }
}
