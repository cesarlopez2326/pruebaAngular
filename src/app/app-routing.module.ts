import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BusquedaPeliculaComponent } from './components/busqueda-pelicula/busqueda-pelicula.component';
import { VistaPeliculaComponent } from './components/vista-pelicula/vista-pelicula.component';
const routes: Routes = [{path: '', component: BusquedaPeliculaComponent},
{path: 'vista-pelicula', component: VistaPeliculaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
