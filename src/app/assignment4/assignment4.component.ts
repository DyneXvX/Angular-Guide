import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  paragraphDisplay: boolean = false;
  log = [];

  onToggleDetails() {
    this.paragraphDisplay = !this.paragraphDisplay;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
