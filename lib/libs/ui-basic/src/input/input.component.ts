import { Component, Input } from '@angular/core';

@Component({
  selector: 'rs-input',
  template: `
  <div [formGroup]="section.group" [ngClass]="element.theme.outerWrap">
  <label [attr.for]="element.elementOptions.id" [ngClass]="element.theme.labelClass">
    {{ element.elementOptions.label }} :
  </label>
  <input [attr.id]="element.elementOptions.id" [attr.type]="element.elementOptions.type"
    [formControlName]="element.name" 
    [ngClass]="element.theme.control" [value]="element.elementOptions.value"
    [attr.placeholder]="element.elementOptions.placeholder" #some >

    <div >
    <app-error [fieldForm]="this.section.group.controls[this.element['name']]" [field]="element"></app-error>
       
  
</div>
  `
})

// <div *ngIf="!isValid"> {{ this.section.group.controls[this.element['name']].errors.ip}}</div>
//</div>
export class InputComponent {
  @Input() element;
  @Input() section;

  get isValid():boolean { 
   //console.log(this.section.group.controls[this.element['name']].errors.ip)
    return this.section.group.controls[this.element['name']].valid }

  get pristine():boolean { return this.section.group.controls[this.element['name']].pristine }

  get dirty():boolean {  return this.section.group.controls[this.element['name']].dirty  }
}
