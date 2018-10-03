import { Injectable } from '@angular/core';

@Injectable()
export class ActionExecutor {
  execute(action: any, params: any) {
    console.log(action, params);
  }
}
