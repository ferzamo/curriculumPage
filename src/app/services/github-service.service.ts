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
  urlMock : string = "http://www.mocky.io/v2/5e58f7852f00003265962301"




  getRepos (user : string)  : Observable<Repo[]>{

    this.http.get<any>(this.url + "/users/" + user + "/repos")
    .subscribe(resp => console.log(resp));

    return this.http.get<Repo[]>(this.url + "/users/" + user + "/repos")
    .pipe(map(res => res));

  }


}
