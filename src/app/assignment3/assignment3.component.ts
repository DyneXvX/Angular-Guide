import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  username: string = '';
  allowUsernameReset: boolean = false;


  resetUsername() {
    this.username = '';
  }

  constructor() {
    if (this.username !== "") {
      this.allowUsernameReset = true;
    }
  }

  ngOnInit(): void {
  }

}
