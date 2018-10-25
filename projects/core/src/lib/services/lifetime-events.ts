import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class LifetimeEvents {
  dispose = EMPTY as Observable<void>;
}
