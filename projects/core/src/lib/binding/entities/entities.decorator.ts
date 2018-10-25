import { Type } from '@angular/core';
import { setMetadataEntry } from '../meta';
import { EntitiesBoundMetadata } from './entities.bound-metadata';
export function Entities<T>(query: string, type: Type<any>): PropertyDecorator {
  return function (target: T, bindingName: string) {
    const metadata = new EntitiesBoundMetadata(query, type, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}
