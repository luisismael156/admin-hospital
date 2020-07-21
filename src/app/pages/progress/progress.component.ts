import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {


  progreso1: number = 50;
  progreso2: number = 50;
  constructor() { }

  ngOnInit(): void {
   
  }
 


}
