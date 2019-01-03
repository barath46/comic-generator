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
  randomNumArr = [];
  maximumComicLimit = 1000;
  
  constructor(private http: HttpClient) { }

  ngOnInit() { }

  generateComic() {
    this.loader = true;
    this.randomNumber = Math.floor(Math.random() * this.maximumComicLimit);
    if (this.randomNumArr.length >= this.maximumComicLimit) {
      alert('You have studied all comics');
      return;
    }
    if(this.randomNumArr.length && this.doesNumberAlreadyExist(this.randomNumber)) {
      this.generateComic();
      return;
    }
    this.randomNumArr.push(this.randomNumber);
    this.apiFetch();
  }

  apiFetch() {
    this.http.get(`https://xkcd.now.sh/${this.randomNumber}`)
    .subscribe((response) => {
      this.alert = false;
      this.loader = false;
      this.comicData = response;
    }, err => {
        console.log(err);
        this.loader = true;
    });
  }

  doesNumberAlreadyExist(num) {
    if(this.randomNumArr.includes(num)) {
        return true;
    }
    else {
      return false;
    }
  }
}
