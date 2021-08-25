import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-mead-card-placeholder',
  templateUrl: './mead-card-placeholder.component.html',
  styleUrls: ['./mead-card-placeholder.component.css']
})
export class MeadCardPlaceholderComponent implements OnInit {
  meadId: number | undefined;

  @Output() add: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addCard(): void {
    this.add.emit(this.meadId);
  }

}
