import { GithubServiceService } from "./services/github-service.service";
import { Component } from "@angular/core";
import { Repo } from "./models/repo";
import colors from "./../assets/jsons/colors.json";
import data from "./../assets/jsons/projectConfig.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private githubService: GithubServiceService) {}

  repos: Repo[] = [];

  animation: string;

  aos = data.animaciones;

  ngOnInit(): void {
    this.cargaGithub();
    //this.cargaGithubMock();
    const numeroAleatorio = Math.floor(Math.random() * 21);
    this.animation = this.aos[numeroAleatorio];
  }

  cargaGithub() {
    this.githubService.getRepos(this.githubUser).subscribe(
      res => {
        this.repos = res;
        this.parseaColors();
      },
      error => {
        console.log(error);
      }
    );
  }

  cargaGithubMock() {
    this.repos = data.mockGithub;
    this.parseaColors();
  }

  parseaColors() {
    for (let i in colors) {
      for (let j = 0; j < this.repos.length; j++) {
        if (i.toUpperCase() === this.repos[j].language.toUpperCase()) {
          this.repos[j].color = colors[i].color;
        }
      }
    }
  }

  fotoUser = data.fotoUser;
  nombre = data.nombre;
  apellido1 = data.apellido1;
  apellido2 = data.apellido2;
  telefono = data.telefono;
  correo = data.correo;
  githubURL = data.githubURL;
  githubUser = data.githubUser;
  github: string = this.githubURL + this.githubUser;
  copyright = data.copyright;
  estudios = data.estudios;
  experiencias = data.experiencias;
  certificados = data.certificados;
  habilidades = data.habilidades;
  idiomas = data.idiomas;

}
