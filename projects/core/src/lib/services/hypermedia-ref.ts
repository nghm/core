import { ResolverService } from './current-resolver';

export class HypermediaRef {
  constructor(
    protected target: any,
    protected href: string,

    private resolver: ResolverService
  ) {}

  fetch(): void {
    if (this.href) {
      this.resolver.resolve(this.target, this.href);
    } else {
      this.resolver.resolvePath(this.target, location.pathname + location.search);
    }
  }
}
