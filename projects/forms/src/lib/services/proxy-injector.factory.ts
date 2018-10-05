import { Injector, ValueProvider, Injectable } from '@angular/core';

@Injectable()
export class ProxyInjectorFactory {
  make(injector: Injector, ...providers: Array<ValueProvider>): Injector {
    return {
      get: (token, notFoundValue) => {
        const proxyMatch = providers.find(({provide}) => provide === token);

        if (proxyMatch) {
          return proxyMatch.useValue;
        }

        return injector.get(token, notFoundValue);
      }
    } as Injector;
  }
}
