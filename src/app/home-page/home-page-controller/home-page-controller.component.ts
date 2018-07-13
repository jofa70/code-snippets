import { Component, OnInit } from '@angular/core';
import { Languages } from "../models/temp-languages.enum";


@Component({
  selector: 'app-home-page-controller',
  templateUrl: './home-page-controller.component.html',
  styleUrls: ['./home-page-controller.component.scss']
})
export class HomePageControllerComponent implements OnInit {

snippets =[
  new Snippet(title 'my', desc 'desc', code 'code', Languages.typescript),
  new Snippet(title 'my', desc 'desc', code 'code', Languages.typescript),
  new Snippet(title 'my', desc 'desc', code 'code', Languages.typescript)
];

  constructor() { }

  ngOnInit() {
  }

}
