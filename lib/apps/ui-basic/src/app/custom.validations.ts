import { FormControl, ValidationErrors } from "@angular/forms";

export function range(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 85;
    const maxYear = currentYear - 18;
    const isValid = !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;

    if(!c.value || (c.value === undefined) ){
      return   {ip:true}
    }
    
  
    return isValid ? null : {ip:true};
  }
  
  export function rangeMessage(err, field) {
    const numValue = Number(field.value);
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 85;
    const maxYear = currentYear - 18;
    return `The ${field.value} must be a valid number between ${minYear} and ${maxYear}`;
  }

  export function lessthanHundred(c: FormControl): ValidationErrors{

    if(!c.value || (c.value === undefined) || (c.value < 2000)){

        return {lth:true};
    }else{
        return null;
    }

  }

  export function lessthanHundredMessage(err, field) {
    
    return `${field.value} is not greater than 2000`;
  }


  


  export const CustomValidations = {
    validators: [
      { name: 'ip', validation: range },
      { name: 'lth', validation: lessthanHundred },
    ],
    validationMessages: [
      { name: 'ip', message: rangeMessage },
      { name: 'lth', message: lessthanHundredMessage },
    ],
  }