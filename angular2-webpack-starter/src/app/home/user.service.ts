import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map'
import global_constant = require('../constant/global_constant.ts');


@Component({

})
@Injectable()
export class UserService {
  // private baseUrl: string = 'http://swapi.co/api';
  // private baseUrl: string = 'http://demo.radaptive.com:6080/api?action=query&username=superuser&password=superuser&queryName=GET_PROJECTS_BY_STATUS&status=Closed&retFormat=json&keyValuePair=yes&endLimit=100';
  response: any;

  constructor(private http: Http, private Jsonp: Jsonp) {

  }

  save(user: any) {

    console.log(JSON.stringify(user))
    //  this.http.put(`${this.baseUrl}`, JSON.stringify(user), {headers: this.getHeaders()});
    //let response$ = this.http.get(`${this.baseUrl}`);

  }

  getData() {
    console.log(global_constant.baseUrl);
    this.http.request(global_constant.baseUrl, { headers: this.getHeaders() })
      .map((res: Response) => res.json())
      .subscribe((res: Response) => {
        //     console.log("res",res);
        this.response = JSON.stringify(res);
        console.log(this.response);
        //     return this.response;
        //
      },
      (err) => {
        console.log("Error in service", JSON.stringify(err));
      },
      () => {
        console.log("getData function loaded correctly");
      }
      );

  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('dataType', 'json');
    headers.append('cross', 'true');
    headers.append('content-Type', 'application/json');
    return headers;
  }
}


/*
http://demo.radaptive.com:6080/api?action=query&username=superuser&password=superuser&queryName=GET_PROJECTS_BY_STATUS&status=Open&retFormat=json&keyValuePair=yes&endLimit=100
*/
