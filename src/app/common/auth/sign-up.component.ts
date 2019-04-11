import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

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


    constructor(private authService: AuthService, 
        private router: Router){ }
     
        signUp(): void{
            const newUser = {
                firstName : this.firstName,
                lastName : this.lastName,
                email : this.email,
                phoneNumber : this.phoneNumber, 
                password : this.password,
                confirmPassword : this.confirmPassword,

            };


            if (newUser.firstName && 
                newUser.lastName && 
                newUser.email && 
                newUser.phoneNumber &&
                newUser.password &&
                newUser.confirmPassword &&
                newUser.password == newUser.confirmPassword)

                 {

                this.authService.signup(newUser.firstName, newUser.lastName,
                  newUser.email, newUser.phoneNumber,
                  newUser.password, newUser.confirmPassword)
                 .subscribe((response) => {this.router.navigateByUrl('/login');                    
                console.log(newUser);
                });
            }    
           else  {
            console.log('broken form, not valid or password mismatch');   
        }
     }
    }     

