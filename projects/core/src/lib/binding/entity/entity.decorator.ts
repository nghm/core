import { Type } from '@angular/core';
import { setMetadataEntry } from '../meta';
import { EntityBoundMetadata } from './entity.bound-metadata';
export function Entity<T>(query: string, type: Type<any>): PropertyDecorator {
  return function (target: T, bindingName: string) {
    const metadata = new EntityBoundMetadata(query, type, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
