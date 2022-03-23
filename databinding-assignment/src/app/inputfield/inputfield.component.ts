import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css']
})
export class InputfieldComponent implements OnInit {

  username='';

  constructor() { }

  ngOnInit(): void {
  }

  onUsername(){
    this.username=''
  }

}
