import { Injectable } from '@angular/core';
import { Subject, from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface ActionEvent {
  action: string;
  name: string;
  payload: any;
}

@Injectable()
export class ActionExecutor {
  private eventsSubject = new Subject<ActionEvent>();
  private eventsObservable = from(this.eventsSubject);

  execute({ name: action }: any, params: any) {
    this.eventsSubject.next({ action, name: 'success', payload: { }});
  }

  on(action: string, name: string): Observable<ActionEvent> {
    return this.eventsObservable
      .pipe(
        filter(({ action: matchingAction, name: matchingName }) => matchingAction === action && matchingName === name)
      );
  }
}
