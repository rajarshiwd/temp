import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationsConfig } from '@revspringinc/ui-core/src/providers/validation.config';


@Component({
  selector: 'app-error',
  template: `<div *ngIf="fieldForm.dirty && !fieldForm.pristine" >{{ errorMessage }}</div>`,
})
export class ErrorComponent {

    @Input() fieldForm: FormControl;
    @Input() field;
  
    constructor(private formlyConfig:ValidationsConfig) {}
  
    get errorMessage(): string {

        
      for (let error in  this.fieldForm.errors) {
        
        if (this.fieldForm.errors.hasOwnProperty(error)) {
           
          let message: string | Function = this.formlyConfig.getValidatorMessage(error);

          if (this.field.validationMsg && this.field.validationMsg.messages && this.field.validationMsg.messages[error]) {
            message = this.field.validationMsg.messages[error];
          }
  
          if (this.field.validationMsg && this.field.validationMsg[error] && this.field.validationMsg[error].message) {
            message = this.field.validationMsg[error].message;
          }
  
          if (typeof message === 'function') {
           
            return message(this.fieldForm.errors[error], this.fieldForm);
          }
  
          return message;
        }
      }
    }
  }

