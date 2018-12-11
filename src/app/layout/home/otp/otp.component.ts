import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.otpForm  != undefined){
      this.otpForm.reset();
    }     
    this.otpForm = this.formBuilder.group({
      otppwd: [null, [Validators.required]]
    });
  }
  validation_messages = {
    'otppwd': [
      { type: 'required', message: 'OTP is required' }
    ]
  };
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
    this.otpForm.reset();
  }
  submitOtp() {
   
    if (this.otpForm.valid) {      
      console.log('form submitted');
      this.otpForm.reset();
    
      //this.router.navigate(['/squad-selection']);
    }else {
      this.validateAllFormFields(this.otpForm);
    }
  }
}
