
import { Entities, Classes, Properties, Links, Actions, Link } from '@nghm/core';

export class ExplorableEntitiy {
  @Classes() classes: Array<string>;
  @Properties() properties: any;
  @Entities(':root > *', ExplorableEntitiy) entities: Array<ExplorableEntitiy>;
  @Links() links;
  @Link() self;
  @Actions() actions;

  get hashColors() {
    const hashColors = this.classes
      .map(classCode => hashColor(hashCode(classCode)));

    return (hashColors.length === 1 ? [...hashColors, ...hashColors] : hashColors)
      .join(', ');
  }

  get background() {
    return `linear-gradient(#00000040, #ff000000),
            linear-gradient(#ffffff61 95%, #ff000000),
            linear-gradient(45deg, ${this.hashColors})`;
  }
}

function hashColor(hash) {
  const min = 100;
  const colorQty = [0, 0, 0];
  const max = Number.MAX_SAFE_INTEGER;
  const sqmax = Math.sqrt(Number.MAX_SAFE_INTEGER);
  const pozHash = hash > 0 ? hash : -hash;

  colorQty[0] = min + Math.floor(pozHash % 155);
  colorQty[1] = min + Math.floor(max / pozHash % 155);
  colorQty[2] = min + Math.floor(sqmax / pozHash % 155);

  return `#${colorQty[0].toString(16)}${colorQty[1].toString(16)}${colorQty[2].toString(16)}`;
}

function hashCode(target: string) {
  let hash = 0, i, chr;

  if (target.length === 0) {
    return hash;
  }

  for (i = 0; i < target.length; i++) {
    chr   = target.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
