import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend-service/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  cards = [];
  students = [];
  subscriptions = [];
  order = 'Descending';
  constructor(private backEndService: BackendService) { }

  ngOnInit(): void {
    let sub = this.backEndService.getDashBoardCards().subscribe(
      (cards:any)=> {
        this.cards = cards;
      }
    );
    this.subscriptions.push(sub);
    sub = this.backEndService.getStudents().subscribe(
      (students:any)=> {
        this.students = students;
      }
    );
    this.subscriptions.push(sub);
    
  }

  changeOrder(order: string): void {
    if(order === 'Ascending') {
      this.students.sort(
        (a,b)=> {
          return a.marks - b.marks
        }
      );
    }
    if(order === 'Descending') {
      this.students.sort(
        (a,b)=> {
          return b.marks - a.marks
        }
      );
    }
    this.order = order;
  }

  ngOnDestroy(): void {
    for(let i=0;i<this.subscriptions.length; i++) {
      this.subscriptions[i].unsubscribe();
    }
  }
}
