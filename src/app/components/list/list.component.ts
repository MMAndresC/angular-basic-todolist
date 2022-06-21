import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public todoList: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  public addNewTask = (newTask:string):void => {
    this.todoList = [...this.todoList, newTask];
    console.log(this.todoList);
  }

}