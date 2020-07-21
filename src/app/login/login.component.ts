import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuarios } from '../models/usuario.models';
declare function init_plugins();
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = false;
  email: string;
  auth2: any;


  constructor(public router: Router,
    public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || "";
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }


  googleInit() {

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '965790006559-oliiosiaoevcsj3tsgmsr2uglo5mjthk.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile'
      });

      this.attachSignin(document.getElementById('btnGoogle'));


    });

  }


  attachSignin(element) {
    this.auth2.attachClickHandler((element), {}, (googleUser) => {
      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      this._usuarioService.loginGoogle(token).subscribe(resp=>{
  console.log(resp);
        window.location.href='#/dashboard'
      });
    });


  }


  ingresar(forma: NgForm) {
    if (forma.invalid) {

      return;
    }
    let usuario = new Usuarios(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario, forma.value.recuerdame)
      .subscribe(resp => {

        this.router.navigate(['/dashboard']);

      });

  }
}

