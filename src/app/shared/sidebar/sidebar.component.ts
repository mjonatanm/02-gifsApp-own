import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor(private gifservice:GifsService) { }

  get _historial(){
    return this.gifservice._historial;
  }

  buscar( query:string ){
    this.gifservice.buscarGifs( query );
  }

}
