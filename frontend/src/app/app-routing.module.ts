import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {BroadcastListComponent} from './broadcast/broadcast-list.component';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'broadcast-list', component: BroadcastListComponent},
  {path: 'chat-page/:id', component: ChatComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
