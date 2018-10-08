
import { Entities, Properties, Links, Actions } from '@nghm/core';

export class ExplorableEntitiy {
  @Properties() properties: any;
  @Entities(':root > *', ExplorableEntitiy) entities: Array<ExplorableEntitiy>;
  @Links() links;
  @Actions() actions;
}
