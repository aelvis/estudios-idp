import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//SERIVICIOS
import { CursoService, UsuarioService, AlumnoService } from '../providers/index.services';
//PAGINAS
import { UsuarioPage,AlumnosPage, CursoPage,FormularioPage,FormularioRespuestaPage,FormularioRespuestaVerPage,InicioPage,LeccionEtapaPage,ListadoAlumnosFormulariosPage,ListadoAlumnosFormulariosVerPage,ListadoAlumnosFormulariosVerIdPage,ListadoCursoIdPage,ListadoCursoIdUrlPage,ListadoCursoIdUrlLeccionPage,LoginPage,RegistroPage,UsuarioEditPage } from '../pages/index.paginas';
//PIPES
import { ImagenPipe } from '../pipes/imagen/imagen';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagenPipe,
    AlumnosPage, 
    CursoPage,
    FormularioPage,
    FormularioRespuestaPage,
    FormularioRespuestaVerPage,
    InicioPage,
    LeccionEtapaPage,
    ListadoAlumnosFormulariosPage,
    ListadoAlumnosFormulariosVerPage,
    ListadoAlumnosFormulariosVerIdPage,
    ListadoCursoIdPage,
    ListadoCursoIdUrlPage,
    ListadoCursoIdUrlLeccionPage,
    LoginPage,
    RegistroPage,
    UsuarioEditPage,
    TabsPage,
    UsuarioPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlumnosPage, 
    CursoPage,
    FormularioPage,
    FormularioRespuestaPage,
    FormularioRespuestaVerPage,
    InicioPage,
    LeccionEtapaPage,
    ListadoAlumnosFormulariosPage,
    ListadoAlumnosFormulariosVerPage,
    ListadoAlumnosFormulariosVerIdPage,
    ListadoCursoIdPage,
    ListadoCursoIdUrlPage,
    ListadoCursoIdUrlLeccionPage,
    LoginPage,
    RegistroPage,
    UsuarioEditPage,
    TabsPage,
    UsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
        CursoService,
    UsuarioService,
    AlumnoService,
  ]
})
export class AppModule {}
