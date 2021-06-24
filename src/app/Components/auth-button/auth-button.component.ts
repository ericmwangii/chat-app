import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}

  ngOnInit(): void {}

  logOut() {
    this.auth.logout({
      returnTo: this.document.location.origin,
    });
  }

  logIn() {
    this.auth.loginWithRedirect();
  }
}
