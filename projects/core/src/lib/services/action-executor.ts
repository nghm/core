import { Injectable } from '@angular/core';
import { Subject, from, Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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

  constructor(private lifetimeEvents: LifetimeEvents) {}

  execute({ name: action }: any, params: any) {
    this.eventsSubject.next({ action, name: 'success', payload: { }});
  }

  on(action: string, name: string): Observable<ActionEvent> {
    return this.eventsObservable
      .pipe(
        filter(({ action: matchingAction, name: matchingName }) => matchingAction === action && matchingName === name),
        takeUntil(this.lifetimeEvents.dispose)
      );
  }
}
