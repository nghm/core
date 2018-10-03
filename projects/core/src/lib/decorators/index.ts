const RESOURCE_METADATA_KEY = '__RESOURCE_BINDING_METADATA__';

export class PropertyBoundMetadata {
  constructor(public propertyName: string) { }
}

export class LinkBoundMetadata {
  constructor(public linkName: string) { }
}

export class ActionBoundMetadata {
  constructor(public actionName: string) { }
}

export type BindingMetadata = PropertyBoundMetadata | LinkBoundMetadata | ActionBoundMetadata;

export function Property<T>(propertyName?: string): PropertyDecorator {
  return function(target: T, fallbackPropertyName: string) {
    const metadata = new PropertyBoundMetadata(propertyName || fallbackPropertyName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

interface LinkMeta {
  linkName?: string;
  params?: boolean;
}

export function Link<T>({ linkName }: LinkMeta = {})
  : PropertyDecorator {
  return function(target: T, fallbackLinkName: string) {
    const metadata = new LinkBoundMetadata(linkName || fallbackLinkName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

export function Action<T>(actionName?: string)
  : PropertyDecorator {
  return function(target: T, fallbackActionName: string) {
    const metadata = new ActionBoundMetadata(actionName || fallbackActionName);
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}


function setMetadataEntry<T>(
  sourceProto: T,
  entries: Array<BindingMetadata>
) {
  const constructor = sourceProto.constructor;
  const meta: Array<BindingMetadata> = constructor.hasOwnProperty(
    RESOURCE_METADATA_KEY
  )
    ? (constructor as any)[RESOURCE_METADATA_KEY]
    : Object.defineProperty(constructor, RESOURCE_METADATA_KEY, { value: [] })[
        RESOURCE_METADATA_KEY
      ];
  Array.prototype.push.apply(meta, entries);
}

export function getSourceMetadata<T>(instance: T): Array<BindingMetadata> {
  const constructor = instance.constructor;

  return constructor.hasOwnProperty(RESOURCE_METADATA_KEY) ? (constructor as any)[RESOURCE_METADATA_KEY] : [];
}
