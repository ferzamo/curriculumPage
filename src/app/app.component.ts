import { GithubServiceService } from './services/github-service.service';
import { Component } from "@angular/core";
import {Repo} from './models/repo';
import colors from './../assets/jsons/colors.json';





@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {



  constructor(private githubService : GithubServiceService){}

  repos: Repo[] = [];


  ngOnInit():void{


    /*this.githubService.getRepos(this.githubUser).subscribe(res =>{
      this.repos = res;
      this.parseaColors();


    }, error => {
      console.log(error)
    })*/



    this.repos[0] = {
      html_url: " ",
      name: "curriculum",
      language: "typescript",
      color:""
    }
    this.repos[1] = {
      html_url: " ",
      name: "angularrr",
      language: "JavaScript",
      color: "aaa"
    }

    this.parseaColors();

  }

  parseaColors(){

      for (let i in colors){

        for (let j=0; j<this.repos.length; j++){
          if (i.toUpperCase() === this.repos[j].language.toUpperCase()){
              this.repos[j].color= colors[i].color;
          }
        }
      }
  }

  nombre: string = "Fernando";
  apellido1: string = "Zamora";
  apellido2: string = "Díez";
  telefono: string = "644368456";
  correo: string = "fernandozd.contacto@gmail.com";
  githubURL: string = "https://github.com/";
  githubUser: string = "ferzamo"
  github: string = this.githubURL + this.githubUser;

  estudios = [
    {
      nombre: "Grado en Ingeniería Informática",
      centro: "Universidad de Valladolid",
      lugar: "Valladolid",
      anoInicio: "2015",
      anoFin: "2020"
    },
    {
      nombre: "Grado Elemental de Música en la Especialidad de Piano",
      centro: "Centro de estudios musicales Modulando",
      lugar: "Valladolid",
      anoInicio: "2006",
      anoFin: "2010"
    }
  ];

  experiencias = [
    {
      nombre: "Becario en Minsait",
      empresa: "Minsait",
      anoInicio: "2020",
      anoFin: "actualidad"
    }
  ]

  certificados = [
    {
      nombre: "First (FCE) – CEFR level",
      empresa: "Cambridge Assessment English",
      fecha: "2018"
    },
    {
      nombre: "Delf B1",
      empresa: "Centre international d'études pédagogiques (CIEP)",
      fecha: "2015"
    },
    {
      nombre: "Grado Elemental de Música en la Especialidad de Piano",
      empresa: "Centro de estudios Musicales Modulando",
      fecha: "2010"
    }

  ];

  habilidades = [
    "Java", "Python", "SQL", "JavaScript",
    "Angular 2+", "Android", "UML", "Ensamblador"
  ];

  idiomas = [
    {
      nombre: "Inglés",
      nivel: "Avanzado",
      historia: "Estuve mes en un campus de idiomas en Inglaterra y fui dos veranos a una familia de intercambio en Wisconsin"
    },
    {
      nombre: "Francés",
      nivel: "Básico",
      historia: "Estuve de intercambio con una familia francesa en Château-Gontier durante 1 mes"
    },
    {
      nombre: "Español",
      nivel: "Nativo",
      historia: "Nací en España"
    }
  ]
}
