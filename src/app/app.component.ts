import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Cars} from './Cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  cars: Cars[] = [];
  index: Number = 0;
  timer: any;

  constructor(private dataService: DataService) {
    this.timer = setInterval(() => {this.nextItem(); }, 3000);
  }



  nextItem() {
    clearInterval(this.timer);
    if (this.index < this.cars.length - 1 ) {
    this.index++;
    } else { this.index = 0; }
    this.timer = setInterval(() => {this.nextItem(); }, 3000);
  }

  prevItem() {
    clearInterval(this.timer);
    if (this.index > 0) {
      this.index--;
    } else { this.index = this.cars.length - 1; }
    this.timer = setInterval(() => {this.nextItem(); }, 3000);

  }

  ngOnInit() {
    this.cars = this.dataService.getData();
  }

  }


