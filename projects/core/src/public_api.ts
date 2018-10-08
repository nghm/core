/*
 * Public API Surface of core
 */

export * from './lib/core.module';

export * from './lib/services/hypermedia-ref';

export * from './lib/decorators';

export type LinkFunction<T> = (params: T) => string;

export type ActionFunction = () => void;
export type ParameterizedActionFunction<T> = (fields: Partial<T>) => void;

export { UrlScopeTrimmer, APPLICATION_SCOPE } from './lib/services/url-scope-trimmer';
