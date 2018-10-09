
import { Entities, Classes, Properties, Links, Actions } from '@nghm/core';

export class ExplorableEntitiy {
  @Classes() classes: Array<string>;
  @Properties() properties: any;
  @Entities(':root > *', ExplorableEntitiy) entities: Array<ExplorableEntitiy>;
  @Links() links;
  @Actions() actions;
}
