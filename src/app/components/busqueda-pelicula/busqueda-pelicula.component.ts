import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Busqueda } from 'src/app/models/busqueda.model';
import { Pelicula } from 'src/app/models/pelicula.model';
import { ApiPeliculaService } from 'src/app/services/api-pelicula.service';
@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css'],
  providers: [ApiPeliculaService]
})
export class BusquedaPeliculaComponent implements OnInit {
  public search: Busqueda;
  public pelicula: Pelicula;
  constructor(public _peliculas: ApiPeliculaService) {
    this.search=new Busqueda('','')
    this.pelicula = new Pelicula('','','','')
   }

  ngOnInit(): void {
  }



  buscarPelicula(){
    this._peliculas.obtenerPeliculas(this.search.nombre,this.search.year).subscribe(
      response=>{
      console.log(response)
    this.pelicula.nombre=response.Title
    this.pelicula.imagen=response.Poster
    this.pelicula.descripcion=response.Released
    }
      ,error=>{
        console.log(error)
      }
    )
  }
 
  redirect(){
    localStorage.setItem('nombre', this.pelicula.nombre.toString())
    localStorage.setItem('year', this.pelicula.year.toString())
    window.location.href="/vista-pelicula"
  }
  

}


