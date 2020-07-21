import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService, public router: Router) { }
  canActivate(): boolean {

    if (this._usuarioService.estaLogueado()) {
      console.log("hola guarda")
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log("block")
      return false;

    }

  }
}
