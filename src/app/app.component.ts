import { Component } from '@angular/core';
import { ChatService } from './Services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-commerceapp';

  constructor(public chatService: ChatService) {}
}
