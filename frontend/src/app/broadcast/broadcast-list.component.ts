import {Component, OnInit} from '@angular/core';
import {Observer, take} from 'rxjs';
import {BroadcastEntry} from '../model/broadcastEntry';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import {BroadcastService} from '../service/broadcast.service';
import {BroadcastToDisplay} from '../model/broadcastToDisplay';


@Component({
  selector: 'broadcast-list',
  templateUrl: './broadcast-list.component.html',
  styleUrls: ['./broadcast-list.component.scss']
})
export class BroadcastListComponent implements OnInit {
  isClosed = true;
  broadcastList: BroadcastToDisplay[] = [];
  broadcastToSave: BroadcastEntry = new BroadcastEntry();

  users: User[] = []
  selectedUsers: User[] = [];
  isCreatePressed = false;

  constructor(private userService: UserService, private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.getAllBroadcasts();
  }

  toggleSelection(user: User) {
    const index = this.selectedUsers.findIndex(u => u.id === user.id);
    if (index === -1) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers.splice(index, 1);
    }
  }

  createNewChat() {
    this.isCreatePressed = true;
    this.userService.getAllUsers().pipe(take(1)).subscribe({
      next: (response: any) => {
        console.log(response)
        this.users = response;
      },
      error: (err: any) => {
      }
    } as Observer<any>)
    this.isClosed = false;
  }

  onSubmit(newChatForm: any) {
    this.broadcastToSave.name = newChatForm.value.chatName;
    this.broadcastToSave.time = '';
    this.broadcastToSave.type = newChatForm.value.chatType;
    this.broadcastToSave.users = this.selectedUsers;
    this.broadcastToSave.owner = sessionStorage.getItem('user')!;
    this.broadcastService.addBroadcastEntry(this.broadcastToSave).pipe(take(1)).subscribe({
      next: (response) => {
        if (response.response === 'Ok') {
          this.isClosed = true;
          this.isCreatePressed = false;
          this.getAllBroadcasts();
        }

      }, error: (err) => {

      }
    } as Observer<any>)
  }

  getAllBroadcasts() {
    this.broadcastService.getAllBroadcast().pipe(take(1)).subscribe({
      next: (response) => {
        this.broadcastList = response;
        debugger;
      }
    } as Observer<any>)
  }
}
