import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';

@Injectable()
export class LifetimeEvents {
  disposeSubject = new Subject<any>();

  public dispose = this.disposeSubject.asObservable();
}
