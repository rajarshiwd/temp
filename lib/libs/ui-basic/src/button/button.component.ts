import { Component, Input } from '@angular/core';

@Component({
  selector: 'rs-button',
  template: `
    <div [ngClass]="element.class.innerWrp">
      <button [id]="element.attrs.id" [type]="element.attrs.type"
        [ngClass]="element.class.self"
        [title]="element.attrs.title"
        [tabindex]="element.attrs.tabindex"
        (click)="defaultEvent('onClick', e, ele, section, form)"
        (focus)="defaultEvent('onFocus', e, ele, section, form)"
        (blur)="defaultEvent('onBlur', e, ele, section, form)">
        <label [ngClass]="element.label.class.self">
          {{ element.label.name }}
        </label>
      </button>
    </div>
  `
})

export class ButtonComponent {
  @Input() element;
  @Input() section;

  defaultEvent(type, e, ele, section, form) {
    if(!this.element.hasOwnProperty('event')){ return; }
    if(typeof this.element.event[type] === 'function'){
      this.element.event[type](e, ele, section, form);
    }
  }
}
