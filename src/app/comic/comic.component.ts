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
  maximumComicLimit = 3;
  constructor(private http: HttpClient) { }

  ngOnInit() { }

  generateComic() {
    this.loader = true;
    this.randomNumber = Math.floor(Math.random() * this.maximumComicLimit) + 1;
    if (this.randomNumArr.length >= this.maximumComicLimit) {
      alert('fuck off');
      return;
    }
    if(this.randomNumArr.length && this.doesNumberAlreadyExist(this.randomNumber)) {
      this.generateComic();
      return;
    }
    this.randomNumArr.push(this.randomNumber);
    this.apiFetch();
    console.log("comes here else", this.randomNumArr);
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
    console.log('coming number', num);

    if(this.randomNumArr.includes(num)) {
        return true;
    }
    else {
      return false;
    }
  }
}
