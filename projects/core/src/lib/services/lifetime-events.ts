import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';

@Injectable()
export class LifetimeEvents {
  dispose = EMPTY;
}
