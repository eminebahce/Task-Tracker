import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TASK } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss'],
})
export class TasksItemComponent implements OnInit {
  @Input() task!: TASK;
  @Output() onDeleteTask: EventEmitter<TASK> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<TASK> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: TASK) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: TASK) {
    this.onToggleReminder.emit(task);
  }
}
