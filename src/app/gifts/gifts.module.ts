import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { SearchComponent } from './search/search.component';
import { ShowComponent } from './show/show.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    GiftsPageComponent,
    SearchComponent,
    ShowComponent,
    ResultComponent
  ],
  exports: [
    GiftsPageComponent
  ],
  imports: [
    CommonModule
  ]

})
export class GiftsModule { }
