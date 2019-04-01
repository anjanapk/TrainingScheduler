import { Component } from '@angular/core';

@Component({
    templateUrl: './sign-up.component.html',
})
export class SignUpComponent  {
      
    firstName = '';
    lastName = '';
    email = '';
    phoneNumber = '';
    password = '';
    confirmPassword = '';


    constructor(){}
     
        signUp(): void{
            const newUser = {
                firstName : this.firstName,
                lastName : this.lastName,
                email : this.email,
                phoneNumber : this.confirmPassword, 
                password : this.password,
                confirmPassword : this.confirmPassword,

            };

            if (newUser.firstName && newUser.lastName && newUser.email && newUser.password
                && newUser.password 
                && newUser.confirmPassword 
                && newUser.password == newUser.confirmPassword) {
                 console.log(newUser);
            }    
            else  
            console.log('broken form, not valid or password mismatch')   
        }
     }
         

