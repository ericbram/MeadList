import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-mead-card-table',
  templateUrl: './mead-card-table.component.html',
  styleUrls: ['./mead-card-table.component.css']
})
export class MeadCardTableComponent implements OnInit {
  @Input() jsonData: any;
  activeCards: any[] = new Array(6).fill(null);
  constructor() { }

  ngOnInit(): void {
  }

  removeCard(card: any) {
    this.activeCards[card.index] = null;
    console.log(this.activeCards);
  }
  addCard(card: any){
    var index = card.index;
    card = this.jsonData.filter((c: { id: number; }) => c.id == card.id)[0];
    this.activeCards[index] = card;
  }

}
