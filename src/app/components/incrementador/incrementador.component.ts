import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtprogress') inputprogress: ElementRef;
  @Input('leyenda') title: string;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  progreso: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  onChanges(newValue: number) {

    if (newValue >= 100) {
      this.progreso = 100;

    } else if (newValue <= 0) {
      this.progreso = 0;

    } else {
      this.progreso = newValue;


    }
    this.inputprogress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);

  }

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;

    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;

    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }

}
