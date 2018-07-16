import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet-card',
  templateUrl: './snippet-card.component.html',
  styleUrls: ['./snippet-card.component.scss']
})
export class SnippetCardComponent implements OnInit {


  @input() snippet;
  showModal = false;


  constructor() { }

  ngOnInit() {
  }

  showDetails() {
    this.showModal = true;
  }
}
