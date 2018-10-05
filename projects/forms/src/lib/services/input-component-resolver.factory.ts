import { Injectable, ComponentFactory, ComponentFactoryResolver, Inject, InjectionToken, Type } from '@angular/core';

const DEFAULT_INPUT_COMPONENT_TYPE = new InjectionToken<{ type: string, componentType: Type<any> }>('DEFAULT_INPUT_COMPONENT_TYPE');

@Injectable()
export class InputComponentFactoryResolver {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(DEFAULT_INPUT_COMPONENT_TYPE)
    private defaultInputComponents: Array<{ type: string, componentType: Type<any> }>
  ) { }

  private resolveType(type: string): Type<any> {
    const { componentType } = this.defaultInputComponents.find(({ type: matchType }) => matchType === type);

    return componentType;
  }

  resolve(type: string): ComponentFactory<any> {
    try {
      const defaultComponentType = this.resolveType(type);

      return this.componentFactoryResolver.resolveComponentFactory(defaultComponentType);
    } catch (error) {
      throw new Error(`No default component factory was found for the type ${type}`);
    }
  }
}
