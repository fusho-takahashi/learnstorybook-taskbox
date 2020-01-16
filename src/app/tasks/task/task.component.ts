import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-item',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor() {}

  title: string;
  @Input() task: any;
  @Output() pinTask: EventEmitter<any> = new EventEmitter<void>();
  @Output() archiveTask: EventEmitter<any> = new EventEmitter<void>();

  ngOnInit() {}
}
