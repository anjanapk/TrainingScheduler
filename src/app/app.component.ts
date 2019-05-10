import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
  <app-grid></app-grid>
`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  loggedIn = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.token
      .subscribe((token) => this.loggedIn = token ? true : false);
  }

  logout(): void {
    this.authService.logout();
  }

}
