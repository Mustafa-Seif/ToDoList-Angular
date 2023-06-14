import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  @Output()deleteItem:EventEmitter<number> = new EventEmitter();
  @Input()item:string='';
  @Input()index:number=0;
  completed:boolean=false;
  
  // SEND INDEX ITEM BY EVENTEMITTER 
  onDeleteItem(){
    this.deleteItem.emit(this.index)
  }
}
