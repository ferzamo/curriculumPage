import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Repo} from '../../models/repo';
import {map, delay} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http:HttpClient) { }

  url : string = "https://api.github.com"


  getRepos (user : string)  : Observable<Repo[]>{

    return this.http.get<Repo[]>(this.url + "/users/" + user + "/repos").pipe(delay(1400))
    .pipe(map(res => res));

  }

  getReposMock (user : string)  : Observable<Repo[]>{

    return this.http.get<Repo[]>("http://www.mocky.io/v2/5e6a23102d000093005fa104").pipe(delay(1400))
    .pipe(map(res => res));

  }



}
