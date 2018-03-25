import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { UiBasicModule } from '@revspringinc/ui-basic';
import { FormControl, ValidationErrors } from '@angular/forms';
import { UiCoreModule } from '@revspringinc/ui-core';
import { CustomValidations } from './custom.validations';



@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    UiBasicModule,
    UiCoreModule.validations(CustomValidations)
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
