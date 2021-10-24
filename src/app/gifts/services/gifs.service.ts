import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

 private apiKey    :string ="xc3VXyfztf39ildnM9oCX3AljgpkcFmi"
 private serviceUrl:string =`https://api.giphy.com/v1/gifs`
 private _historial:string[] = [];
 public  result    : Gif []= [];

 constructor( private http:HttpClient ) {
   if (localStorage.getItem("historial")){
     this._historial = JSON.parse( localStorage.getItem("historial")!);
     this.result = JSON.parse( localStorage.getItem("resultado")!);
   };
 }

 get historial() {
   return [...this._historial];
 }
 buscarGifs(query:string){
   query = query.trim().toLowerCase();
   if( !this._historial.includes(query)) {
    this._historial.unshift( query );
    this._historial = this._historial.splice(0,10);
    localStorage.setItem("historial",JSON.stringify( this._historial) );
   }
  
   const params = new HttpParams()
         .set("api_key", this.apiKey)
         .set("q", query)
         .set("limit","6")
         console.log(params.toString());

   this.http.get<SearchGIFResponse>(`${ this.serviceUrl }/search`, {params})
      .subscribe( (resp : any) => {
               console.log(resp.data);
               this.result = resp.data;
               localStorage.setItem("result",JSON.stringify( this.result) ) ;
 });
 }
}