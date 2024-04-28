import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {BroadcastListComponent} from './broadcast/broadcast-list.component';
import {ChatComponent} from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BroadcastListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ro'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
