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


  getRepos (user : string)  : Observable<Repo[]>{

    return this.http.get<Repo[]>(this.url + "/users/" + user + "/repos")
    .pipe(map(res => res));

  }

}
