import { Component } from '@angular/core';
import { RootEntity } from '@nghm/core';
import { ExplorableEntitiy } from './explorable-entitiy';

@Component({
  template: `
  <hm-entity-outlet *ngIf="entity" [entity]="entity" [open]="true"></hm-entity-outlet>`
})
export class DevpageComponent {
  @RootEntity(ExplorableEntitiy) entity: ExplorableEntitiy;

  hmAfterBinding() {
    console.log(this.entity);
  }
}
