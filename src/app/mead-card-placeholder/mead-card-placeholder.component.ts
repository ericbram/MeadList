import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-mead-card-placeholder',
  templateUrl: './mead-card-placeholder.component.html',
  styleUrls: ['./mead-card-placeholder.component.css']
})
export class MeadCardPlaceholderComponent implements OnInit {
  @Input() data: any;
  @Input() index: number | undefined;
  id: string = '';

  @Output() add: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addCard(): void {
    this.data = {
      id: this.id,
      index: this.index
    }
    this.add.emit(this.data);
  }
}
