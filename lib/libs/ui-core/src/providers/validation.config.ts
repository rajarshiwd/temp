import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ValidationsRegistry } from '@revspringinc/ui-core/src/providers/validation.registery';


@Injectable()
export class ValidationsConfig {

    validators: { [name: string]: string | ValidationErrors } = {};
    messages: { [name: string]: string | ((error: any, field) => string); } = {}

    constructor(private customValidationsArray: ValidationsRegistry) {
        this.configureValidations();
    }

    configureValidations() {

        if (this.customValidationsArray['validators']) {
            this.customValidationsArray['validators'].forEach(validator => this.addValidators(validator));
        }

        if (this.customValidationsArray['validationMessages']) {
            this.customValidationsArray['validationMessages'].forEach(validation => this.addValidatorMessage(validation.name, validation.message));
        }

    }

    addValidators(options: ValidatorOption) {
        this.validators[options.name] = options.validation;
    }

    getValidator(name: string): string | ValidationErrors {
        return this.validators[name];
    }

    addValidatorMessage(name: string, message: string | ((error: any, field) => string)) {
        this.messages[name] = message;
    }

    getValidatorMessage(name: string) {
        return this.messages[name];
    }

}


export interface ValidatorOption {
    name: string;
    validation: string | ValidationErrors;
}

export interface ValidationMessageOption {
    name: string;
    message: string | ((error: any, field) => string);
}
