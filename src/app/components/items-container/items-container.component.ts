import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../container/container.component';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
})
export class ItemsContainerComponent {
  @Input() arrayOfTasks: Task[] = [];
  @Output() taskDeletedEmitter: EventEmitter<number> = new EventEmitter();
  @Output() changeStatusEmitter: EventEmitter<number> = new EventEmitter();
  loading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  // SEND INDEX ITEM BY EVENTEMITTER
  deleteItem(item: number): void {
    this.taskDeletedEmitter.emit(item);
  }
  changeStutusItem(index:number):void{
    this.changeStatusEmitter.emit(index)
  }
}
