import { InjectionToken } from '@angular/core';
import { Binder } from './Binder';

export interface MetaBinderFactory {
  canMake(meta: any): boolean;
  make(meta: any): Binder;
}

export const BINDER_FACTORIES = new InjectionToken<Array<MetaBinderFactory>>('BINDER_FACTORIES');
