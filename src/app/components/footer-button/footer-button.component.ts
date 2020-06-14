import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer-button',
  templateUrl: './footer-button.component.html',
  styleUrls: ['./footer-button.component.scss'],
})
export class FooterButtonComponent implements OnInit {
  @Input() text: string;
  @Input() disabled: boolean;
  @Input() color = 'primary';
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onClick(event: any) {
    this.clicked.emit(event);
  }
}
