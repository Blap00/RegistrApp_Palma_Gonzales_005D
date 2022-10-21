import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SesaluGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresaalu')){
        return true;
      }
      else if(localStorage.getItem('ingresapro')){
        this.router.navigate(['/inicio-inicio'])
        return false;
      }
      else{
        this.router.navigate(['/inicio'])
        return false;
      }
      return true;
  }
  
}