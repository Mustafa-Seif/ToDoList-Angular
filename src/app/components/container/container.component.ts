import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
export interface Task {
  taskVal:string,
  done:boolean
}
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {
  arrayOfTasks:Task[]=[];
  inputVal:any;
  checkVal:boolean=true;
  constructor(){};
  ngOnInit(): void {
    // GET DATA IN LOCAL STORAGE
    this.arrayOfTasks = JSON.parse(localStorage.getItem('localTasks') || '[]');
  };
  // HANDLE ADD NEW TASK 
  handleAddTask(task:any){
    // CHECK IF INPUT HAS VALUE 
    if (task.value) {
      // ADD THE TASK TO ARRAY  OF TASKS
    this.arrayOfTasks.push({taskVal:task.value,done:false})
    // RESET INPUT VALUE 
    this.inputVal = '';
    // CHECK IF INPUT VALUE ADD TRUE
    this.checkVal = true;
    localStorage.setItem('localTasks', JSON.stringify(this.arrayOfTasks));
    }else{
    // CHECK IF INPUT VALUE ADD FALSE
      this.checkVal = false;

    }
  }
  // HANDLE DELETE TASK
  deleteTask(task:number):void{
    this.arrayOfTasks.splice(task,1)
    localStorage.setItem('localTasks', JSON.stringify(this.arrayOfTasks));
  }
  // HANDLE DELETE ALL TASK               
  deleteAllTasks():void{
    this.arrayOfTasks.splice(0)
    localStorage.setItem('localTasks', JSON.stringify(this.arrayOfTasks));
  }
  changeStatus(index:number){
  this.arrayOfTasks.forEach((item,i)=>{
      if (i === index) {
        item.done = !item.done 
    localStorage.setItem('localTasks', JSON.stringify(this.arrayOfTasks));
      }
    })

  }
}
