import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { PusherService } from './Services/pusher.service';

//auth module
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './Components/auth-button/auth-button.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';

import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from './Services/chat.service';
import { MyDetailsComponent } from './Components/my-details/my-details.component';
import { ChatComponent } from './Components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthButtonComponent,
    UserProfileComponent,
    MyDetailsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
    }),
  ],
  providers: [ChatService, PusherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
