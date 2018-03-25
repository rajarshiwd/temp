import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SectionFactory } from '@revspringinc/ui-core';
import { ValidationsRegistry } from '@revspringinc/ui-core/src/providers/validation.registery';

@Component({
  selector: 'rs-section',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div *ngIf="_section.active">
  <div [formGroup]="_section.group">
    <fieldset [disabled]="_section.disabled">
      <ng-container *ngFor="let ele of _section.controls;">
      <div>
          <ng-container resolveElement [element]="ele"
            [section]="_section"></ng-container>  
            </div>     
      </ng-container>
      
    </fieldset>
  </div>
</div>
  `
})

export class RsSectionComponent {

  _section;
  @Input()
  set section(name) {
    this._section = this.sectionFactory.create(name);
  }
  

  constructor(private sectionFactory: SectionFactory){

  }
}
