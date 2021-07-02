import { Component } from '@angular/core';
import { ChatService } from './Services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Chat App';

  constructor(public chatService: ChatService) {}
}
