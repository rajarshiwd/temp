import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiCoreModule, SectionFactory }  from '@revspringinc/ui-core';

import { RsSectionComponent } from './rs-section/rs-section.component';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ErrorComponent } from '@revspringinc/ui-core/src/error.component';


@NgModule({
  imports: [
    CommonModule,
    UiCoreModule.forRoot({
      button: ButtonComponent,
      input: InputComponent
    }),
    ReactiveFormsModule
  ],
  providers: [
    SectionFactory
  ],
  declarations: [
    RsSectionComponent,
    ButtonComponent,
    InputComponent,
    
  ],
  entryComponents: [
    RsSectionComponent,
    ButtonComponent,
    InputComponent,
  ],
  exports: [
    RsSectionComponent
  ]
})

export class UiBasicModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UiBasicModule
    };
  }
}
