import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mead-card',
  templateUrl: './mead-card.component.html',
  styleUrls: ['./mead-card.component.css']
})
export class MeadCardComponent implements OnInit {
  @Input() data: any;
  @Input() index: number | undefined;
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
    this.data.index = this.index;
    this.delete.emit(this.data);
  }

}
