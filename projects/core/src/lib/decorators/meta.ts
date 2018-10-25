
const RESOURCE_METADATA_KEY = '__RESOURCE_BINDING_METADATA__';

export interface FieldBoundMetadata {
  bindingName: string;
}

export function setMetadataEntry<T>(
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
