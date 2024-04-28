import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observer, take} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {Credentials} from '../model/credentials';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials: Credentials = new Credentials();
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      username: [''],
      email: ['']
    });
  }

  onSubmit() {
    this.credentials.username = this.loginForm.value.username;
    this.credentials.email = this.loginForm.value.email;

    this.authService.login(this.credentials).pipe(take(1)).subscribe({
      next: (response: any) => {
        let message = response.response;
        if (message === 'found') {
          sessionStorage.setItem('user', this.credentials.email);
          this.toastr.error('Success!', '', {
            timeOut: 1000,
            enableHtml: true,
            toastClass: 'right-corner toast-success'
          });
          this.loginForm.reset();
          this.router.navigate(['/broadcast-list']).then();
        }
      },
      error: (err: any) => {
        if (err.status === 500) {
          this.toastr.error('Try other email or username!', '', {
            timeOut: 5000,
            extendedTimeOut: 1000,
            enableHtml: true,
            toastClass: 'right-corner toast-error'
          });

          this.loginForm.reset();
        }
      }
    } as Observer<any>);
  }
}
