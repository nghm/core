import { Injectable } from '@angular/core';
import { empty } from 'rxjs';

@Injectable()
export class LifetimeEvents {
  dispose = empty();
}
