import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.sass']
})
export class AuthorizationComponent implements OnInit {

  nickname : string = "";
  password : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getNickname (value : string) : void{
    this.nickname = value;
  }
  getPassword (value: string) : void{
    this.password = value;
  }

  userLogin(){

  }
}
