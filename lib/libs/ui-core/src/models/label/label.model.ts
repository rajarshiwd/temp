import { LabelInterface } from './label.interface';

export class Label implements LabelInterface {

  value;

  constructor(config){
    this.value = (config || {}).value || '';
  }
}
