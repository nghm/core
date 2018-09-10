const RESOURCE_METADATA_KEY = '__RESOURCE_BINDING_METADATA__';

interface PropertyBoundMetadata {
  propertyName: string;
}

export function Property<T>(propertyName?: string): PropertyDecorator {
  return function(target: T, fallbackPropertyName: string) {
    const metadata: PropertyBoundMetadata = { propertyName: propertyName || fallbackPropertyName };
    setMetadataEntry<T>(target, [metadata]);
  } as (target: {}, propertyName: string | symbol) => void;
}

function setMetadataEntry<T>(
  sourceProto: T,
  entries: Array<PropertyBoundMetadata>
) {
  const constructor = sourceProto.constructor;
  const meta: Array<PropertyBoundMetadata> = constructor.hasOwnProperty(
    RESOURCE_METADATA_KEY
  )
    ? (constructor as any)[RESOURCE_METADATA_KEY]
    : Object.defineProperty(constructor, RESOURCE_METADATA_KEY, { value: [] })[
        RESOURCE_METADATA_KEY
      ];
  Array.prototype.push.apply(meta, entries);
}

export function getSourceMetadata<T>(instance: T): Array<PropertyBoundMetadata> {
  const constructor = instance.constructor;

  return constructor.hasOwnProperty(RESOURCE_METADATA_KEY) ? (constructor as any)[RESOURCE_METADATA_KEY] : [];
}
