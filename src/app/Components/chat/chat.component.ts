import { Component, OnInit } from '@angular/core';
import { Ichat } from 'src/app/Interfaces/ichat';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chats: Ichat[] = [];
  message!: string;
  sending!: boolean;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getChannel().bind('chat', (data: Ichat) => {
      if (data.email === this.chatService.user.email) {
        data.isMe = true;
      }
      this.chats.push(data);
    });
  }

  sendMessage(message: string) {
    this.sending = true;
    this.chatService.sendMessage(message).subscribe(
      (resp) => {
        this.message = '';
        this.sending = false;
      },
      (err) => {
        this.sending = false;
      }
    );
  }
}
