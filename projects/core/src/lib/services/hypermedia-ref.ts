import { ResolverService } from './current-resolver';

export class HypermediaRef {
  constructor(
    protected targets: any[] = [],
    protected href: string,

    private resolver: ResolverService
  ) {}

  fetch(): void {
    if (this.href) {
      this.resolver.resolve(this.targets, this.href);
    } else {
      this.resolver.resolvePath(this.targets, location.pathname + location.search);
    }
  }
}
