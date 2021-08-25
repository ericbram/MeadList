import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mead-card',
  templateUrl: './mead-card.component.html',
  styleUrls: ['./mead-card.component.css']
})
export class MeadCardComponent implements OnInit {
  @Input() data: any;
  public name = '';
  public date = '';
  public percent = '';
  public id = 0;
  public meadDescription = 'A tasty mead-flavored mead.';

  @Output() delete: EventEmitter<string> = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
    this.name = this.data.name;
    this.date = this.data.date;
    this.percent = this.data.percent;
    this.id = this.data.id;
  }

  remove() {
    this.delete.emit(this.data);
  }

}
