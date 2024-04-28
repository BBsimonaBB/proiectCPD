import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observer, take} from 'rxjs';
import {BroadcastService} from '../service/broadcast.service';
import {BroadcastEntry} from '../model/broadcastEntry';

@Component({
  selector: 'chat-page',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages = [
    {content: 'Hello!', from: 'them'},
    {content: 'Hi, how are you?', from: 'me'},
    // ... more messages
  ];

  newMessage: string = '';

  connectedUser = sessionStorage.getItem('user');

  broadcastEntry: BroadcastEntry = new BroadcastEntry();

  constructor(private broadcastService: BroadcastService, private router: Router) {
  }

  ngOnInit() {
    this.getBroadcastById();
  }

  getBroadcastById() {
    let parts = this.router.url;
    let id = +parts.split('/')[2];

    this.broadcastService.getById(id).pipe(take(1)).subscribe({
      next: (response) => {
        this.broadcastEntry = response;
      }, error: (err) => {
      }
    } as Observer<any>)
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({from: 'me', content: this.newMessage});
      this.newMessage = '';
    }
  }
}
