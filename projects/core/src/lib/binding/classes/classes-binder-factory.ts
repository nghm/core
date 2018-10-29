import { Injectable } from '@angular/core';

import { ClassesBoundMetadata } from './classes.bound-metadata';
import { ClassesBinder } from './classes-binder';
import { MetaBinderFactory } from '../meta-binder-factory';

@Injectable()
export class ClassesBinderFactory implements MetaBinderFactory {
  canMake(meta: any): boolean {
    return meta instanceof ClassesBoundMetadata;
  }

  make(meta: ClassesBoundMetadata): ClassesBinder {
    return new ClassesBinder(meta);
  }
}
