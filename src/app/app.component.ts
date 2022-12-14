import { Component } from '@angular/core';
import { AlertController , NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MenuController} from '@ionic/angular';
interface Componente{
  icon: string;
  name: string;
  redirecTo: string;

}
interface ComponenteAlumno{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private _storage: Storage
  constructor(private alertController: AlertController,
    private routerLink: Router,
    private storage: Storage,
    private menuController: MenuController ) {
      
    }
    cerrarSesionAlu(){
      console.log(localStorage.clear())
      localStorage.setItem('sesnop','true')
      this.menuController.enable(false, 'second')
    }
    async ngOnInit() {
      const storage= await  this.storage.create();
      this._storage=storage;
    }
    handlerMessage = '';
    roleMessage = '';
    
    async alertaalu() {
      const alert = await this.alertController.create({
        header: '¿Estas Seguro?',
        message: 'Al cerrar la sesión volvera al inicio de registro.',
        buttons: [
          {
            text: 'cancelar',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Cancelo el salir de la sesión';
            },
          },
          {
            text: 'Ok',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Confirmo el cerrar la sesión, necesitara Abrir la cuenta nuevamente';
              this.cerrarSesionAlu();
              this.routerLink.navigate(['/inicio'])
            },
          },
        ] 
      }); 
      await alert.present();
    }
    cerrarSesionPro(){
      console.log(localStorage.clear());
      localStorage.setItem('sesnop','true');
      this.menuController.enable(false, 'first')
    }
    async alertapro() {
      const alert = await this.alertController.create({
        header: '¿Estas Seguro?',
        message: 'Al cerrar la sesión volvera al inicio de registro.',
        buttons: [
          {
            text: 'cancelar',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Cancelo el salir de la sesión';
            },
          },
          {
            text: 'Ok',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Confirmo el cerrar la sesión, necesitara Abrir la cuenta nuevamente';
              this.cerrarSesionPro();
              this.routerLink.navigate(['/inicio'])
            },
          },
        ] 
      }); 
      await alert.present();
    }
  componentes: Componente[]=[ 
    {
      icon: 'home-outline',
      name:  'Inicio',
      redirecTo: '/inicio-inicio' 
    },
   
    {
      icon: 'clipboard-outline',
      name:  'Registro de Asistencia',
      redirecTo: '/reg-asistencia' 
    },
    {
      icon:'calendar-outline',
      name: 'Horario de Clases', 
      redirecTo: '/hde-clases'
    },
    {
      icon: 'calendar-number-outline',
      name: 'Fechas con Feriados',
      redirecTo: '/feriados-pro'
    },
    
  ];
  componentes1: Componente[]=[
    {
      icon:'exit-outline',
      name: 'Cerrar sesion', 
      redirecTo: '/inicio'
    },
  ]
  alumnocomponentes: ComponenteAlumno[]=[
    {
      icon: 'home-outline',
      name:  'Inicio',
      redirecTo: '/alumno' 
    },
    {
      icon: 'book-outline',
      name:  'Mis Clases',
      redirecTo: '/misclases' 
    },
    {
      icon: 'home-outline',
      name:  'Escanear QR',
      redirecTo: '/escanearqr' 
    },
    {
      icon: 'calendar-number-outline',
      name: 'Fechas con Feriados',
      redirecTo: '/feriados-alu'
    },
  ];
  alumnocomponentes1: ComponenteAlumno[]=[
    {
      icon:'exit-outline',
      name: 'Cerrar sesion', 
      redirecTo: '/inicio'
    },
  ];
}
