
// tslint:disable:no-bitwise
import { Entities, Classes, Properties, Links, Actions, Link } from '@nghm/core';

export class ExplorableEntitiy {
  loading = true;
  background = '';

  @Classes() classes: Array<string>;
  @Properties() properties: any;
  @Entities(':root > *', ExplorableEntitiy) entities: Array<ExplorableEntitiy>;
  @Links(({ rel }) => rel[0]) links;
  @Link() self;
  @Link(['details'], ['parent']) relation;
  @Actions() actions;

  getHashColors() {
    const hashColors = this.classes
      .map(classCode => hashColor(hashCode(classCode)));

    const colors = (hashColors.length === 1 ? [...hashColors, ...hashColors] : hashColors);
    const count = colors.length;

    const step = 1 / colors.length * 100 / 2;

    return colors
      .map((color, index) => {
        const percentage = (step * (index + 1)).toFixed(2);

        if (index + 1 === count) {
          return `${color} 100%`;
        }

        return `${color} ${percentage}%, ${percentage}%`;
      })
      .join(', ');
  }

  getHashColorShadows() {
    const hashColors = this.classes
      .map(classCode => hashColor(hashCode(classCode)));

    const colors = (hashColors.length === 1 ? [...hashColors, ...hashColors] : hashColors);

    const count = colors.length - 1;
    const step = 1 / colors.length * 100 / 2;

    return 'rgba(0, 0, 0, 0.34) 4%, ' + colors
      .map((_, index) => {
        const max = (step * (index + 1)).toFixed(2);
        const min = (step * index).toFixed(2);
        const distanceNo = index + 1 === count ? 8 : 4;
        const distance = (step * (index + 1) + distanceNo).toFixed(2);

        if (index === count) {
          return `transparent 100%`;
        }

        return `rgba(255, 255, 255, 0.34) ${max}%, ${min}%,` +
               `rgba(0, 0, 0, 0.57) ${max}%, ${distance}%`;
      })
      .join(', ');
  }

  makeBackground() {
    const hashColors = this.getHashColors();
    const hashColorsShadows = this.getHashColorShadows();

    return `linear-gradient(#00000040, #ff000000),
            linear-gradient(#ffffff61 95%, #ff000000),
            linear-gradient(45deg, ${hashColorsShadows}),
            linear-gradient(45deg, ${hashColors})`;
  }

  hmAfterBinding(): void {
    this.background = this.makeBackground();
    this.loading = false;
  }
}

function hashColor(hash) {
  const range = 155;
  const maxInt = Number.MAX_SAFE_INTEGER;
  const colorQty = [255 - range, 255 - range, 255 - range];
  const sqmax = Math.sqrt(Number.MAX_SAFE_INTEGER);
  const pozHash = hash > 0 ? hash : -hash;

  const red = pozHash % range;
  const green = red % 2 === 0 ? maxInt / pozHash % range : sqmax / pozHash % range;
  const blue = red % 2 !== 0 ? maxInt / pozHash % range : sqmax / pozHash % range;

  colorQty[0] += Math.floor(red);
  colorQty[1] += Math.floor(green);
  colorQty[2] += Math.floor(blue);

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
}
