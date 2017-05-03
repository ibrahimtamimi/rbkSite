// SINGLE FIELD VALIDATORS

import { FormGroup } from '@angular/forms';

export function emailValidator(control: FormGroup): {[key: string]: any} {
  var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}

// FORM GROUP VALIDATORS matching emails || passwords
export function matching(emailKey: string,conEmailKey: string , passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let email = group.controls[emailKey];  
    let conEmail = group.controls[conEmailKey];
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
   if ( password.value !== confirmPassword.value ) {
      return {
        mismatchedpass: true
      };
    }
    if (email.value !== conEmail.value  ) {
      return {
        mismatched: true
      };
    }

  }
} 



