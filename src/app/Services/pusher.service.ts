import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PusherService {
  private pusher: any;
  messageChannel: any;

  constructor() {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      forceTLS: true
    });

    // this.messageChannel = this.pusher.subscribe('private-messages');
  }
  getPusher() {
    return this.pusher;
  }
}
