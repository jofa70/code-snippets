import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @input() header: string;
  @Input() showing = false;
  @output() showingChange = new EventEmitter<boolean>();



  constructor() { }

  ngOnInit() {

    close = () => {
      this.showingChange.emit(false);
    }
  }

}
