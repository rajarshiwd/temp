import { Component } from '@angular/core';
import { signinFormJSON } from './configs/signin.data.model';

@Component({
  selector: 'app-root',
  // template: `<ui-resolver [config]="form"></ui-resolver>`,
  template: `<rs-section [section]="form"></rs-section>`,
 
})
export class AppComponent {

  form: any;
  constructor(){
    this.form = signinFormJSON;
  }
}
