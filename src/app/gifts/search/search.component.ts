import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
 
})
export class SearchComponent  {

 @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

 constructor (private GifsService:GifsService) {}
  buscar() {
    const value = this.txtBuscar.nativeElement.value;
    if ( value.trim().length ===0 ) {
      return;
    }
    this.GifsService.buscarGifs(value);
    this.txtBuscar.nativeElement.value ="";
  }

}
