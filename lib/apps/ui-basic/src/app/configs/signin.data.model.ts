import { Validators } from '@angular/forms';
export const signinFormJSON = {
  title: 'signinForm',
  active: true,
  type: 'section',
  controls: [
    {
      id: 'input_form_username',
      type: 'input',
      name: 'username',
      disabled: false,
      elementOptions: {
        label: 'user name',
        value: 'John',
        type: 'text',
        disabled: false,
        placeholder: 'user name is...',
        required:true,
        minlength:3
      },
      theme: {
        outerWrap: 'sample1',
        control: 'sample2',
        labelClass: 'sample3'
      },
      
    validationMsg: {
      messages: {
        minlength: "please enter atleast 4 characters",
        required:"username is required"
      },
    }
    },
    {
      id: 'input_form_mobile',
      type: 'input',
      name: 'mobile',
      disabled: false,
      elementOptions: {
        label: 'mobile no',
        value: 1000,
        type: 'number',
        disabled: false,
        placeholder: 'last name is...',
        required:true,
        minlength:3    
      },
      theme: {
        outerWrap: 'sample1'
      },
    
      validationMsg: {
        messages: {
          minlength: "please enter atleast 4 characters",
          required:"username is required"
        },
      },
      custom:['lth']
   
    }
    
  ]
};
