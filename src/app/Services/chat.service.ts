import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PusherService } from './pusher.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  user!: { display: string; email: string };
  private endpoint = 'http://localhost:3000';
  private channel: any;

  constructor(private pusherService: PusherService, private http: HttpClient) {
    this.channel = this.pusherService.getPusher().subscribe('chat-group');
  }

  join(param: any): Observable<any> {
    return this.http.post(`${this.endpoint}/join`, param).pipe(
      tap((data) => {
        this.user = param;
      })
    );
  }

  sendMessage(message: string): Observable<any> {
    const param = {
      message,
      type: 'human',
      ...this.user,
    };

    return this.http.post(`${this.endpoint}/message`, param);
  }

  getChannel() {
    return this.channel;
  }
}
