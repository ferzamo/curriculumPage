import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Repo} from './../models/repo';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http:HttpClient) { }

  url : string = "https://api.github.com"

  private username = 'ferzamo';
  private client_id ='042485680f05bd35872a';
  private client_secret='949fb5cb8fbe18c788f275fbb396481a576238d9';

  httpOptions = {
    headers: new HttpHeaders({
      'client_id':  this.client_id,
      'client_secret': this.client_secret
    })
  };

  getRepos (user : string)  : Observable<Repo[]>{

    return this.http.get<Repo[]>(this.url + "/users/" + user + "/repos", this.httpOptions)
    .pipe(map(res => res));

  }

}
