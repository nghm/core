import { NgModule } from '@angular/core';

import { BINDER_FACTORIES } from './meta-binder-factory';
import { LinkBinderFactory } from './link-binder-factory';
import { ActionBinderFactory } from './action-binder-factory';
import { PropertyBinderFactory } from './property-binder-factory';
import { ActionListenerFactory } from './action-listener-factory';
import { EntityBinderFactory } from './entity-binder-factory';
import { EntitiesBinderFactory } from './entities-binder-factory';
import { RootEntityBinderFactory } from './root-entity-binder-factory';
import { PropertiesBinderFactory } from './properties-binder-factory';
import { LinksBinderFactory } from './links-binder-factory';
import { ActionsBinderFactory } from './actions-binder-factory';
import { ClassesBinderFactory } from './classes-binder-factory';

@NgModule({
  providers: [
    { provide: BINDER_FACTORIES, useClass: LinkBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: LinksBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ActionBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ActionsBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: PropertyBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: PropertiesBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ClassesBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: ActionListenerFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: EntityBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: RootEntityBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: EntitiesBinderFactory, multi: true }
  ]
})
export class BinderModule {
}
