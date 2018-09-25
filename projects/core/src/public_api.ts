/*
 * Public API Surface of core
 */

export * from './lib/core.service';
export * from './lib/core.component';
export * from './lib/core.module';

export * from './lib/decorators';

export type LinkFunction<T> = (params: T) => string;
export type ActionFunction<T = void> = () => void | ((fields: Partial<T>) => void);
