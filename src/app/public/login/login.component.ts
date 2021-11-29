import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: any = {username: '', password: ''}

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logar() {
    this.loginService.login(this.login);
    
  }
}
