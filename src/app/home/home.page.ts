import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MovieservicesService} from './movieservices.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  mov:Movie;
  Url='http://www.omdbapi.com/?i=tt3896198&apikey=4d9d0ef7';
  constructor(private movie:MovieservicesService) {
   
  }
  
  movieTitle='';

  ngOnInit(){
    
    this.searchMovie();
  }

  searchMovie(){
    const search=encodeURIComponent(this.movieTitle).trim();
    this.mov=this.movie.getMovie(this.Url+search);
  }
}
