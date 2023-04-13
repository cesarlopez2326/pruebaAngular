import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { ApiPeliculaService } from 'src/app/services/api-pelicula.service';

@Component({
  selector: 'app-vista-pelicula',
  templateUrl: './vista-pelicula.component.html',
  styleUrls: ['./vista-pelicula.component.css'],
  providers: [ApiPeliculaService]
})

export class VistaPeliculaComponent implements OnInit {
  public peli: Pelicula
  constructor(public peliculasApi: ApiPeliculaService) {
    this.peli = new Pelicula('','','','')
   }

  ngOnInit(): void {
    this.buscar()
  }

  buscar(){
   
    var pelicula = localStorage.getItem("nombre");
   
    let year =localStorage.getItem("year")

    this.peliculasApi.obtenerPeliculas(pelicula? pelicula: '', year? year: '')
    .subscribe((response) => {
      this.peli.nombre=response.Title
    this.peli.imagen=response.Poster
    this.peli.descripcion=response.Plot
      
   
    }, (error) => {
      console.log("ha ocurrido un error")
    })

  }

}
