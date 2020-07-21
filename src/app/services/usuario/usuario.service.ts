import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario.models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuarios;
  token: string;

  constructor(
    public http: HttpClient,
    public router:Router
  ) {
    this.cargarStorage();
   }

  guardaStorage(id: string, token: string, usuario: Usuarios) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }
  estaLogueado() {
    return (this.token.length > 5 ? true : false)

  }
  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      console.log("hay token");

    } else {
      this.token = " ";
      this.usuario = null;

    }
  }

  crearUsuario(usuario: Usuarios) {

    let url = 'http://localhost:3000/usuario';

    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        Swal.fire(
          'Usuario Creado',
          usuario.email,
          'success'
        )
        return resp.usuario;
      })
    )

  }

  logout(){
    this.usuario = null;
    this.token = "";
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);

  }
  loginGoogle(token: string) {
    let url = 'http://localhost:3000/login/google';

    return this.http.post(url, { token }).pipe(
      map((resp: any) => {
        this.guardaStorage(resp.id, resp.token, resp.usuario);
        return resp;

      })
    );

  }

  login(usuario: Usuarios, recordar: boolean = false) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);

    } else {
      localStorage.removeItem('email')


    }
    let url = 'http://localhost:3000/login';
    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        this.guardaStorage(resp.id, resp.token, resp.usuarioGuardado);
        return true;

      })
    );

  }
}
