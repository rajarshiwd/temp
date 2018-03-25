import { Element } from '../';

export interface Section {
  name: string;
  active: boolean;
  class?: string;
  title?: any;
  msgs?: any[];
  elements: Element[];
}
