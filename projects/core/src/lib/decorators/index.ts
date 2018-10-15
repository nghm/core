import { Type } from '@angular/core';

const RESOURCE_METADATA_KEY = '__RESOURCE_BINDING_METADATA__';

interface FieldBoundMetadata {
  bindingName: string;
}

export class PropertyBoundMetadata implements FieldBoundMetadata {
  constructor(public propertyName: string, public bindingName: string) { }
}

export class PropertiesBoundMetadata implements FieldBoundMetadata {
  constructor(public bindingName: string) { }
}

export class ClassesBoundMetadata implements FieldBoundMetadata {
  constructor(public bindingName: string) { }
}

export class LinkBoundMetadata implements FieldBoundMetadata {
  constructor(public linkQueries: Array<Array<string>>, public bindingName: string) { }
}

export class LinksBoundMetadata implements FieldBoundMetadata {
  constructor(
    public nameFactory: (link: { href: string, rel: Array<string>}) => string,
    public linkQueries: Array<Array<string>>,
    public bindingName: string) { }
}

export class ActionBoundMetadata implements FieldBoundMetadata {
  constructor(public actionName: string, public bindingName: string) { }
}

export class ActionsBoundMetadata implements FieldBoundMetadata {
  constructor(public bindingName: string) { }
}

export class ActionListenerBoundMetadata implements FieldBoundMetadata {
  constructor(public actionName: string, public events: Array<string>, public bindingName: string) { }
}

export class EntityBoundMetadata implements FieldBoundMetadata {
  constructor(public queryString: string, public type: Type<any>, public bindingName: string) { }
}

export class RootEntityBoundMetadata implements FieldBoundMetadata {
  constructor(public type: Type<any>, public bindingName: string) { }
}

export class EntitiesBoundMetadata implements FieldBoundMetadata {
  constructor(public queryString: string, public type: Type<any>, public bindingName: string) { }
}

export function Property(propertyName?: string): PropertyDecorator {
  return function<T>(target: T, bindingName: string) {
    const metadata = new PropertyBoundMetadata(propertyName || bindingName, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function Properties(): PropertyDecorator {
  return function<T>(target: T, bindingName: string) {
    const metadata = new PropertiesBoundMetadata(bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function Classes(): PropertyDecorator {
  return function<T>(target: T, bindingName: string) {
    const metadata = new ClassesBoundMetadata(bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function Link(...linkQueries: Array<Array<string>>)
  : PropertyDecorator {
  return function<T>(target: T, bindingName: string) {
    const metadata = new LinkBoundMetadata(linkQueries.length !== 0 && linkQueries || [[bindingName]], bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function Links(nameFactory: (link: { href: string, rel: string[] }) => string, ...linkQueries: Array<Array<string>>)
  : PropertyDecorator {
  return function<T>(target: T, bindingName: string) {
    const metadata = new LinksBoundMetadata(nameFactory, linkQueries, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function Action<T>(actionName?: string)
  : PropertyDecorator {
  return function(target: T, bindingName: string) {
    const metadata = new ActionBoundMetadata(actionName || bindingName, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function Actions<T>()
  : PropertyDecorator {
  return function(target: T, bindingName: string) {
    const metadata = new ActionsBoundMetadata(bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function ActionListener(actionName: string, ...events: Array<string>)
  : PropertyDecorator {
  return function<T>(target: T, bindingName: string) {
    const metadata = new ActionListenerBoundMetadata(actionName || bindingName, events, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function Entity<T>(query: string, type: Type<any>): PropertyDecorator {
  return function(target: T, bindingName: string) {
    const metadata = new EntityBoundMetadata(query, type, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function RootEntity<T>(type: Type<any>): PropertyDecorator {
  return function(target: T, bindingName: string) {
    const metadata = new RootEntityBoundMetadata(type, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function Entities<T>(query: string, type: Type<any>): PropertyDecorator {
  return function(target: T, bindingName: string) {
    const metadata = new EntitiesBoundMetadata(query, type, bindingName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

function setMetadataEntry<T>(
  sourceProto: T,
  entries: Array<FieldBoundMetadata>
) {
  const constructor = sourceProto.constructor;
  const meta: Array<FieldBoundMetadata> = constructor.hasOwnProperty(
    RESOURCE_METADATA_KEY
  )
    ? (constructor as any)[RESOURCE_METADATA_KEY]
    : Object.defineProperty(constructor, RESOURCE_METADATA_KEY, { value: [] })[
        RESOURCE_METADATA_KEY
      ];
  Array.prototype.push.apply(meta, entries);
}

export function getSourceMetadata<T>(instance: T): Array<FieldBoundMetadata> {
  const constructor = instance.constructor;

  return constructor.hasOwnProperty(RESOURCE_METADATA_KEY) ? (constructor as any)[RESOURCE_METADATA_KEY] : [];
}
