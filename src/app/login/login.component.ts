import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private router: Router, private http: HttpClient) { }

username: string;
password: string;
response: string;

  ngOnInit(): void {
  }

  login() : void {

      this.http.get('https://puzzliedb.mybluemix.net/login?name=' + encodeURIComponent(this.username) + '&password=' + encodeURIComponent(this.password), {responseType: 'text'})
      .subscribe(
              response => {
              if(response.includes('level') || response.includes('user')){
                     sessionStorage.setItem('name', this.username);
                     this.router.navigate([response]);
                    }
                    else{
                      this.username = '';
                      this.password = '';
                    }
             }

       );
    }

  register() : void {
      this.router.navigate(["register"]);
   }

}
