import { Component, OnInit } from '@angular/core';
import {LoadingServiceService} from './../services/loading/loading-service.service'

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.css']
})
export class LoadingComponentComponent implements OnInit {

  constructor(private loadingService: LoadingServiceService) { }

  ngOnInit(): void {
  }

  isLoading(){

    return this.loadingService.cargando();

  }

}
