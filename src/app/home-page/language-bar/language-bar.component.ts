import { Component, OnInit } from '@angular/core';
import { Languages } from "../models/temp-languages.enum";

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

languages = new Set<Languages>();

  constructor() { }

  ngOnInit() {
    this.languages.add(Languages.typescript);
    this.languages.add(Languages.css);
  }

}
