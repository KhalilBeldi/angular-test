import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;

  isLoginFailed = false;

  errorMessage = '';

  constructor(private authService: AuthService,private tokenStorageService:TokenStorageService,private route:Router) { }

  ngOnInit(): void {
      if(this.tokenStorageService.getToken()){
        this.isLoggedIn = true;
      }
  }

  onSubmit(): void{
    const {username,password} = this.form;

    this.authService.authentificate(username,password).subscribe(

      data => {
        this.tokenStorageService.saveToken(data.jwt);
     

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.route.navigate(['/dashboard'])
      },

      err => {

        this.errorMessage = err.error.message;

        this.isLoginFailed = true;

      }

    )
  }
  reloadPage(): void {
    window.location.reload();
  }

}
