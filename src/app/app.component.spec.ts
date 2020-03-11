import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GithubServiceService } from "./services/github-service.service";

describe('AppComponent', () => {

  let githubService: GithubServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        GithubServiceService
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    githubService = TestBed.get(GithubServiceService);
  });

  it('should create the app', () => {
    spyOn(githubService, 'getRepos').and.returnValue(undefined);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });




});
