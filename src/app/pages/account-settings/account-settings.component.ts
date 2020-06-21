import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/setting/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit(): void {
    this.aplicarCheck(this._ajustes.ajustes.tema);
  }

  cambiarColor(tema: string, link: any) {
    this._ajustes.aplicarTema(tema);
    this.aplicarCheck(this._ajustes.ajustes.tema);
  }
  aplicarCheck(tema: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        continue;
      }
      ref.classList.remove('working');
    }
  }
}
