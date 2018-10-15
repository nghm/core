import { Injectable, ComponentFactory, ComponentFactoryResolver, Inject, InjectionToken, Type } from '@angular/core';

export interface ComponentRegistration {
  pack: string;
  name: string;
  type: string;
  inputType: Type<any>;
}

export const COMPONENT_REGISTRATION =
  new InjectionToken<ComponentRegistration>('COMPONENT_REGISTRATION');

@Injectable()
export class InputComponentFactoryResolver {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(COMPONENT_REGISTRATION)
    private fieldRegistry: Array<ComponentRegistration>
  ) { }

  private resolveType(type: string): Type<any> {
    const { inputType } = this.fieldRegistry.find(({ type: matchType }) => matchType === type);

    return inputType;
  }

  private resolveComponent(type, { name, pack }: any): Type<any> {
    const { inputType } = this.fieldRegistry
      .find(({ type: matchType, name: matchName, pack: matchPack }) =>
        matchType === type && pack === matchPack && name === matchName
      );

    return inputType;
  }

  resolve(type: string, component: any): ComponentFactory<any> {
    try {
      const defaultComponentType = component && this.resolveComponent(type, component) || this.resolveType(type);
      const factory = this.componentFactoryResolver.resolveComponentFactory(defaultComponentType);

      return factory;
    } catch (error) {
      throw new Error(`No default component factory was found for the type ${type}`);
    }
  }
}
