import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  
    email = 'admin1@gmail.com';
    password = 'password';

    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    ngOnInit() {
    }

    login(): void {
        this.authService.login(this.email, this.password)
            .subscribe(
                (response) => {
                    if (response.success) {
                        console.log('successful login');
                        this.router.navigateByUrl('/home');
                    }
                },
                (error) => {
                    console.log(this.email, this.password);
                    console.log('username/password incorrect');
                }
            );
    }

}
