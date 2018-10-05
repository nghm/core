import { Injectable, ComponentFactory, ComponentFactoryResolver, Inject, InjectionToken, Type } from '@angular/core';

export const DEFAULT_INPUT_COMPONENT_TYPE = new InjectionToken<{ type: string, inputType: Type<any> }>('DEFAULT_INPUT_COMPONENT_TYPE');

@Injectable()
export class InputComponentFactoryResolver {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(DEFAULT_INPUT_COMPONENT_TYPE)
    private defaultInputComponents: Array<{ type: string, inputType: Type<any> }>
  ) { }

  private resolveType(type: string): Type<any> {
    const { inputType } = this.defaultInputComponents.find(({ type: matchType }) => matchType === type);

    return inputType;
  }

  resolve(type: string): ComponentFactory<any> {
    try {
      const defaultComponentType = this.resolveType(type);
      const factory = this.componentFactoryResolver.resolveComponentFactory(defaultComponentType);

      return factory;
    } catch (error) {
      throw new Error(`No default component factory was found for the type ${type}`);
    }
  }
}
