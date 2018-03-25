import { Injectable } from '@angular/core';
import { Validators, FormControl,FormBuilder, ValidationErrors } from '@angular/forms';
import { ValidationsConfig } from '@revspringinc/ui-core/src/providers/validation.config';



@Injectable()
export class ValidationsService {


  
  constructor(private FB:FormBuilder,private validationConfig:ValidationsConfig) {
    
  }

  getValidators(config) {
    let vals = [];
    if( config.elementOptions){
     
       for(let key in config.elementOptions) {

        if (key == 'required'){
          vals.push(Validators.required);
        }
        if (key == 'minlength') {
          vals.push(Validators.minLength(config.elementOptions[key]))
        }
 
       } 
      
    
      
    }
   
    if (config.custom ) {
     config.custom.forEach((va,i) => { 
         
    vals.push(this.validationConfig.getValidator(va));
 
     });
   }
  
   return vals;
  }
}


