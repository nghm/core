import { NgModule } from '@angular/core';

import { BINDER_FACTORIES } from './meta-binder-factory';
import { LinkBinderFactory } from './link/link-binder-factory';
import { ActionBinderFactory } from './action/action-binder-factory';
import { PropertyBinderFactory } from './property/property-binder-factory';
import { ActionListenerFactory } from './action-listener/action-listener-factory';
import { EntityBinderFactory } from './entity/entity-binder-factory';
import { EntitiesBinderFactory } from './entities/entities-binder-factory';
import { RootEntityBinderFactory } from './root-entity/root-entity-binder-factory';
import { PropertiesBinderFactory } from './properties/properties-binder-factory';
import { LinksBinderFactory } from './links/links-binder-factory';
import { ActionsBinderFactory } from './actions/actions-binder-factory';
import { ClassesBinderFactory } from './classes/classes-binder-factory';
import { RefBinderFactory } from './ref/ref-binder-factory';

/**
 * @ignore
 */
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
    { provide: BINDER_FACTORIES, useClass: EntitiesBinderFactory, multi: true },
    { provide: BINDER_FACTORIES, useClass: RefBinderFactory, multi: true }
  ]
})
export class BinderModule {
}
