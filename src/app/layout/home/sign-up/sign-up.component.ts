import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UsernameValidation } from '../validation/signup-username';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit , OnDestroy {
  
  signupForm: FormGroup;
  
  private formSumitAttempt: boolean;
  
  constructor(private formBuilder: FormBuilder, private router: Router) {
   
  }

  ngOnInit() {
    if (this.signupForm  != undefined){
      this.signupForm.reset();
    }     
    this.signupForm = this.formBuilder.group({
      uName: ['', Validators.compose([Validators.required, UsernameValidation.validMobile,UsernameValidation.validEmail])],
      pwd: [null, [Validators.required,Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$')]]
    });
  }
  
  validation_messages = {
    'uName': [
      { type: 'required', message: 'Email or Mobile Number is required' },
      { type: 'validMobile', message: 'Mobile Number incorrect.' },
      { type: 'validEmail', message: ' Email incorrect.' }
     

    ],
    'pwd': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Password must contain at least 1 character and 1 number' }
    ]
  };

  
  onSignup() {
    this.formSumitAttempt = true;
    if (this.signupForm.valid) {      
      console.log('form submitted');
      this.signupForm.reset();
      //this.router.navigate(['/squad-selection']);
    }else {
      this.validateAllFormFields(this.signupForm);
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
  reset(){
    this.signupForm.reset();
  }
  ngOnDestroy() {
    console.log('ChildComponent:OnDestroy');
  }
}
