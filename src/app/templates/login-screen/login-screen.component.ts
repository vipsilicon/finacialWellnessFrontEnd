import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { FormHelper } from '../../core/utils/form.helper';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../../core/services/auth/auth.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, take, tap } from 'rxjs/operators';
import { Auth } from '../../core/interfaces/Auth';
import { DeviceDetectorService,DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css',
})
export class LoginScreenComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  passwordHide: boolean = true;
  loading: boolean = false;
  login$!: Observable<any>;
  @ViewChild('inputEmail', { static: false })
  inputEmail!: ElementRef<HTMLInputElement>

  constructor(
    private _fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private deviceService: DeviceDetectorService,
    // private store: Store<ICommonState>  
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this._fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(3), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    const deviceInfo:DeviceInfo =  this.deviceService.getDeviceInfo();
    FormHelper.markAllAsTouched(this.loginForm);

    if (!this.loginForm.valid) {
      return;
    }

    console.log(this.loginForm);
    this.loading = true;

    this.login$ = this.authService.authenticate(this.loginForm.value, deviceInfo).pipe(
      take(1),
      tap((auth: Auth) => {
        if(auth?.user){
          console.log(auth);
          this.router.navigate(['']);
        }
        this.loading = false;
      }),
      catchError((err): Observable<any> => {
        this.loginForm.reset();
        this.inputEmail.nativeElement.focus();
        this.loading = false;
        return throwError(err)
      })
    )
  }
}
