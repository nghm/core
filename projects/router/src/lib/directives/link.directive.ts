import { Directive, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UrlScopeTrimmer } from '@nghm/core';

@Directive({
  selector: '[hmLink]'
})
export class LinkDirective {
  @Input() hmLink: string;
  @Input() scope: string;

  constructor(private router: Router, private scopedUrlTrimmer: UrlScopeTrimmer) { }

  @HostListener('click', ['$event'])
  onClick() {
    const { scopedUrlTrimmer } = this;
    const path = this.scope && scopedUrlTrimmer.trimToScope(this.hmLink, this.scope) || scopedUrlTrimmer.trimWhatever(this.hmLink);

    this.router.navigateByUrl(path);
  }
}
