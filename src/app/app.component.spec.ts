import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GithubServiceService } from "./services/github/github-service.service";
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

class GithubServiceServiceSTUB {

}
describe('AppComponent', () => {

  let githubService: GithubServiceService;
  let componente;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatTabsModule,
        MatListModule,
        MatDividerModule,MatChipsModule, MatExpansionModule, MatCardModule

      ],
      providers: [
        {provide: GithubServiceService, useClass: GithubServiceServiceSTUB}

      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    githubService = TestBed.get(GithubServiceService);
    const fixture = TestBed.createComponent(AppComponent);
     componente = fixture.componentInstance;
  });

  it('should create the app', () => {
    /*spyOn(githubService, 'getRepos').and.returnValue(undefined);
    const fixture = TestBed.createComponent(AppComponent);
    */
    expect(componente).toBeTruthy();
  });




});
