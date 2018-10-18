import { InjectionToken } from '@angular/core';
import { Binder } from './binder';
import { MetaBinder } from './meta-binders-provider';

export interface MetaBinderFactory {
  canMake(meta: any): boolean;
  make(meta: any, metaBinder: MetaBinder): Binder;
}

export const BINDER_FACTORIES = new InjectionToken<Array<MetaBinderFactory>>('BINDER_FACTORIES');
