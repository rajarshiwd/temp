import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Section } from '../../models/section/section.model';
import { ValidationsRegistry } from '@revspringinc/ui-core/src/providers/validation.registery';
import { ValidationsService } from '@revspringinc/ui-core/src/providers/validation.service';


@Injectable()
export class SectionFactory {
 
  constructor(private FB: FormBuilder,private service:ValidationsService) {}
  
  create(config: object) {
    
  const section = new Section(config);
  
  section.group = this.FB.group({});

  section.controls.forEach(control => {
// console.log(this.customValidationsArray)
  // this.customValidationsArray['validators']['ip'](control);
  
 section.group.addControl(control.name, this.createControl(control));
  
  });
  

  return section;
  
}

createControl(config) {
  
  const { disabled, value } = config;
  
  return this.FB.control({ disabled, value },this.service.getValidators(config));
}






}





