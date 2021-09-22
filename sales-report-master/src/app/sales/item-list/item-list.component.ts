import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  title = 'Item List';
  date: Date = new Date();
  simpleDate!: string | null;
  discount = 20;
  items: any[] = [
    { id: 1, name: 'iPhone 11', desc: 'Refurbished iPhone 11', price: 600 },
    { id: 2, name: 'Samsung S22', desc: 'A great Samsung Galaxy S series', price: 1199 },
    { id: 3, name: 'Asus ROG Phone 5', desc: 'Asus Gaming Phone', price: 599}
  ];
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  updateDate(): void {
    this.date = new Date();
    this.simpleDate = this.datePipe.transform(this.date, 'short');
  }
}
