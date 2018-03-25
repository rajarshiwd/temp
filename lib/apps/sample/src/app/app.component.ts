import { Component } from '@angular/core';
import { signinFormJSON } from './configs/signin.data.model';

@Component({
  selector: 'app-root',
  template: `<rs-section [section]="json"></rs-section>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  json: any;
  constructor(){
    this.json = signinFormJSON;
  }
}
