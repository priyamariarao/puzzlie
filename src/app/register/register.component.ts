import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

constructor(private router: Router, private http: HttpClient) { }

username: string;
name1: string;
name2: string;
name3: string;
name4: string;
name5: string;
password: string;
message: string;

  ngOnInit(): void {
  }

  login() : void {
         this.router.navigate(["login"]);
      }

  register() : void {

          if(this.username != '' && this.name1 != '' && this.password != ''){
           this.http.get('https://puzzliedb.mybluemix.net/register?name=' + encodeURIComponent(this.username)
                          + '&password=' + encodeURIComponent(this.password)
                          + '&email1=' + encodeURIComponent(this.name1)
                          + '&email2=' + encodeURIComponent(this.name2)
                          + '&email3=' + encodeURIComponent(this.name3)
                          + '&email4=' + encodeURIComponent(this.name4)
                          + '&email5=' + encodeURIComponent(this.name5), {responseType: 'text'})
                       .subscribe(
                                 response => {
                                 this.message = response;
                                },
                                error=>{
                                this.message = "There was an error. Contact Admin.";
                                 }
                       );
          }
     }
}
