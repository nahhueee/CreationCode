import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioComponent,
    PortafolioComponent,
    ContactoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
