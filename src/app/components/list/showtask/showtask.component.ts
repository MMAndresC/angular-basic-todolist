import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.scss']
})
export class ShowtaskComponent implements OnInit {
  @Input() public todoList!: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
