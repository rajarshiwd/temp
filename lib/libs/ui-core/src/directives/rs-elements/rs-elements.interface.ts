export interface Element {
  tag: string,
  active: boolean,
  name: string,
  label?: string,
  class?: string,
  title?: any,
  style?: object,
  errors?: boolean,
  icon?: string,
  dataKey?: string,
  disabled?: boolean,
  options?: string[],
  placeholder?: string,
  link?: string,
  linkActive?: string,
  src?: string,
  validators: any[],
  value?: any,
  action?: string|Function
}