import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
  randomNumber: any;
  comicData: any;
  alert: boolean = true;
  loader: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit() { }

  generateComic() {
    this.loader = true;
    this.randomNumber = Math.floor(Math.random() * 1000);
    this.http.get(`https://xkcd.now.sh/${this.randomNumber}`)
    .subscribe((response) => {
      this.alert = false;
      this.loader = false;
      this.comicData = response;
      console.log(response);
    }, err => {
        console.log(err);
        this.loader = true;
    });
  }
}
