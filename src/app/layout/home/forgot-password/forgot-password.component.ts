import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UsernameValidation } from '../validation/signup-username';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  frgtPwdForm: FormGroup;
  private formSumitAttempt: boolean;
  private otpform: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
   
  }

  ngOnInit() {
    if (this.frgtPwdForm  != undefined){
      this.frgtPwdForm.reset();
    }     
    this.frgtPwdForm = this.formBuilder.group({
      emailfield: [null, [Validators.required,UsernameValidation.validEmail]],
    });
  }
  validation_messages = {
    'emailfield': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: ' Email incorrect.' }
    ]
  };

  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
  }
  changeForm() {
    this.formSumitAttempt = true;
    if (this.frgtPwdForm.valid) {      
      console.log('form submitted');
      this.frgtPwdForm.reset();
      this.otpform = true;
      //this.router.navigate(['/squad-selection']);
    }else {
      this.validateAllFormFields(this.frgtPwdForm);
    }

  }
  
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }  
}
