export interface Binder {
  bind(target, source): void;
  dispose?(): void;
}
