import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-mead-card-table',
  templateUrl: './mead-card-table.component.html',
  styleUrls: ['./mead-card-table.component.css']
})
export class MeadCardTableComponent implements OnInit {
  @Input() model: any;
  constructor() { }

  ngOnInit(): void { 
  }

  removeCard(card: any) {
    this.model = this.model.filter((x: { id: number; }) => x.id !== card.id);
  }
  addCard(card: any){
    console.log(card);
  }

}
