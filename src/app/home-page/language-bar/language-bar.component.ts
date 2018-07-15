import {Component, EventEmitter, OnInit} from '@angular/core';
import { Languages } from "../models/temp-languages.enum";

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss']
})
export class LanguageBarComponent implements OnInit {

selectedLanguages = new Set<Languages>();
languageOptions = new Set<Languages>();

showModal = false;

@output() newSelectionMade = new EventEmitter<Languages>();
readonly headerText = 'Select a Language';
newSelection : Languages;


  constructor() { }

  ngOnInit() {
    this.languageOptions.add(Languages.css);
    this.languageOptions.add(Languages.typescript);
    // this.languages.add(Languages.typescript);
   // this.languages.add(Languages.css);
  }

  updateNewSelection = (lang: Languages) => {
    this.newSelection = lang;
  }

  saveLanguage = () => {

    this.selectedLanguages.add(this.newSelection);
    this.newSelectionMade.emit(this.newSelection);
    this.showModal = false;
}
  show = () => {
  this.showModal= true;
  }

}
