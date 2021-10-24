import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifts/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private GifsService:GifsService) { }
  get historial() {
    return this.GifsService.historial;
  }
  
  buscar(item:string){
    this.GifsService.buscarGifs(item);
   };
  }


