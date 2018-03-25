import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionFactory } from './providers/section-factory/section-factory.service';

import { ResolveElementDirective } from './directives/rs-elements/rs-elements.directive';

import { ElementsRegistry } from './providers/elements-registry.service';
import { ValidationsRegistry } from '@revspringinc/ui-core/src/providers/validation.registery';
import { ValidationsService } from '@revspringinc/ui-core/src/providers/validation.service';
import { ErrorComponent } from '@revspringinc/ui-core/src/error.component';
import { ValidationsConfig } from '@revspringinc/ui-core/src/providers/validation.config';

let elements = null;
let vals = null;

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ResolveElementDirective,
    ErrorComponent
  ],
  providers: [
    ValidationsService,
    ValidationsConfig,
    {provide: ElementsRegistry, useFactory: ()=> {
      console.log('-------**| ', elements)
      return elements;
    }},
    {
      provide: ValidationsRegistry,useFactory:()=>{
        console.log('-------validations**| ', vals);
        return vals;
      }
    }
  ],
  exports: [
    ResolveElementDirective,
    ErrorComponent
  ]
})

export class UiCoreModule {
  static forRoot(eles): ModuleWithProviders {
    elements = eles;
    return {
      ngModule: UiCoreModule,
      providers: [
        SectionFactory
      ]
    };
  }

  static validations(eles): ModuleWithProviders {
    vals = eles;
    return {
      ngModule: UiCoreModule,
      providers: [SectionFactory]
    };
  }
}
