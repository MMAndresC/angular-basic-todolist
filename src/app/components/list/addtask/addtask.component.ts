import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  public taskToAdd: string = '';
  @Output() public emitTask = new EventEmitter();
  public task: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public sendTask = () => {
    this.emitTask.emit(this.task);
  }

}