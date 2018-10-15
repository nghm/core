import { Directive, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UrlScopeTrimmer } from '@nghm/core';

@Directive({
  selector: '[hmLink]'
})
export class LinkDirective {
  @Input() hmLink: { href: string};
  @Input() scope: string;

  constructor(private router: Router, private scopedUrlTrimmer: UrlScopeTrimmer) { }

  @HostListener('click', ['$event'])
  onClick() {
    const { scopedUrlTrimmer } = this;
    const { href } = this.hmLink;

    const path = this.scope && scopedUrlTrimmer.trimToScope(href, this.scope) || scopedUrlTrimmer.trimWhatever(href);

    this.router.navigateByUrl(path);
  }
}
