import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public data="Hello World..";
public color="text-primary";
public data2=false;
public arraydata=[
  {
    name:'aaaaa',
    id:1,
  },{
    name:'bbbbb',
    id:2,
  },{
    name:'ccccc',
    id:3,
  },{
    name:'ddddd',
    id:4,
  },
  {
    name:'eeeee',
    id:5,
  },
  {
    name:'fffff',
    id:5,
  },
];

public data3 = false;
}