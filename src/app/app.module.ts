import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BooksComponent } from './Components/books/books.component';
import { BookItemComponent } from './Components/book-item/book-item.component';

//auth module
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './Components/auth-button/auth-button.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookItemComponent,
    AuthButtonComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-a8u7py4z.us.auth0.com',
      clientId: 'SL8NEse4gCoiSHzc6deoEv9BU9vMn8m9',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
