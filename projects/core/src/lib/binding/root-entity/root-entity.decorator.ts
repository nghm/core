import { Type } from '@angular/core';
import { setMetadataEntry } from '../meta';
import { RootEntityBoundMetadata } from './root-entity.bound-metadata';
export function RootEntity<T>(type: Type<any>): PropertyDecorator {
  return function (target: T, bindingName: string) {
    const metadata = new RootEntityBoundMetadata(type, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
