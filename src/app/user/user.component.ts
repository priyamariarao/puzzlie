import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

constructor(private router: Router, private http: HttpClient) { }

response: string;
name: string;

  ngOnInit(): void {
  this.name = sessionStorage.getItem('name');
  if(this.name == null){
    this.router.navigate(["login"]);
  }
  else{
    this.http.get('https://puzzliedb.mybluemix.net/current?name=' + encodeURIComponent(this.name), {responseType: 'text'})
          .subscribe(
                  response => {
                  if(response != 'user'){
                         this.router.navigate([response]);
                        }
                 }
         );
    }
  }

}
