import { FormControl } from '@angular/forms';

export class UsernameValidation {

    static validMobile(fc1: FormControl){
        if(!isNaN(fc1.value) ) {
            var uname = new String(fc1.value)   
            if(uname.length !=10 && uname.length >0) {
                return {
                    validMobile : true
                }
            }else{
                return null
            }
        }
    }

    static validEmail(fc: FormControl){  
        if(fc.value != "" && isNaN(fc.value)) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;      
            if(!fc.value.match(mailformat)) {                      
                return {
                    validEmail : true
                }
            }else{
                return null
            }
        }
    }
   
}
