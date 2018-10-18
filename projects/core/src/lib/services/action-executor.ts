import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse, HttpEventType } from '@angular/common/http';
import { Subject, from, Observable } from 'rxjs';
import { filter, takeUntil, map, catchError } from 'rxjs/operators';
import { LifetimeEvents } from 'projects/core/src/lib/services/lifetime-events';

export interface ActionEvent {
  action: string;
  name: string;
  payload: any;
}

@Injectable()
export class ActionExecutor {
  private eventsSubject = new Subject<ActionEvent>();
  private eventsObservable = from(this.eventsSubject);

  constructor(private lifetimeEvents: LifetimeEvents, private http: HttpClient) {}

  private request({ href, method }, body): Observable<HttpResponse<any>> {
    const request = new HttpRequest<any>(method, href, body);

    return this.http.request(request)
      .pipe(
        filter<HttpResponse<any>>(event => event.type === HttpEventType.Response)
      );
  }

  execute(action: any, fields: any) {
    this.request(action, fields).pipe(
        catchError(error => {
          this.eventsSubject.next({ action: action.name, name: 'error', payload: { action, fields, error }});

          return [];
        })
      )
      .subscribe(response => this.eventsSubject.next({ action: action.name, name: 'success', payload: { action, fields, response }}));
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
