import { Element } from '../element/element.model';

export class Section {

  name;
  active;
  class;
  controls;
  group;

  constructor(config){
    this.name = config.name;
    this.active = !(config.active === false);
    this.class = config.class;

    this.controls = config.controls.map(ctrl => {
      return new Element(ctrl);
    });
  }
}
