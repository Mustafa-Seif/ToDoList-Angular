import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Task } from '../container/container.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  @Output()deleteItem:EventEmitter<number> = new EventEmitter();
  @Output()statusItem:EventEmitter<number> = new EventEmitter();
  @Input()item?:Task;
  @Input()index:number=0;
  itemStatus:boolean=false;

  ngOnInit(): void {
   this.itemStatus = this.item!.done;
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  
  // SEND INDEX ITEM BY EVENTEMITTER 
  onDeleteItem(){
    this.deleteItem.emit(this.index)
  }
  changeStatus(){
    this.statusItem.emit(this.index)
    this.itemStatus = !this.itemStatus
    this.item!.done = !this.item!.done;
  }
}
