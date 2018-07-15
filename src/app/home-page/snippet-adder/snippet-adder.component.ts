import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snippet-adder',
  templateUrl: './snippet-adder.component.html',
  styleUrls: ['./snippet-adder.component.scss']
})
export class SnippetAdderComponent implements OnInit {

  name: string;
  desc: string;
  code: string;

  readonly headerText = 'Save Snippet';
  showModal = false;

  constructor() { }

  ngOnInit() {
  }
  addSnippet = () => {};

  openModal= () => {
    this.showModal= true;
  };
}
