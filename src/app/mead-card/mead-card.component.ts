import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mead-card',
  templateUrl: './mead-card.component.html',
  styleUrls: ['./mead-card.component.css']
})
export class MeadCardComponent implements OnInit {
  public meadTitle = 'Raspberry';
  public meadDate = '10/10/1010';
  public meadPercent = '15%';
  public meadNumber = 3;
  public meadDescription = 'A tasty mead-flavored mead.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
