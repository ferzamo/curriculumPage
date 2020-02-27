import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string;
  correo: string

  estudios = [
    {
      nombre: "Ingeniería Informática",
      centro: "Universidad de Valladolid",
      lugar: "Valladolid",
      anoInicio: "2015",
      anoFin: "2020"
    },
    {
      nombre: "Grado elemental de música",
      centro: "Centro de estudios musicales Modulando",
      lugar: "Valladolid",
      anoInicio: "2013",
      anoFin: "2015"
    }
  ];

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
    "Angular 2+",
  ];
}
