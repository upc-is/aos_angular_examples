import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  title = 'Sales Report';
  createdAt: Date = new Date();
  subtitle = '';
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.salesDate();
  }

  salesDate(): void {
    this.subtitle = `${this.title} of ${this.datePipe.transform(this.createdAt, 'short')}`;
  }

}
