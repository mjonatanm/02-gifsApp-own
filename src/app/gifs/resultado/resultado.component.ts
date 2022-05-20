import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {

  constructor(private gifService : GifsService) { }

  get resultados(){
    return this.gifService.resultado;
  }


}
