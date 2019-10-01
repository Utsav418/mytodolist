import { Component, OnInit } from '@angular/core';
import { todoService } from 'src/app/Todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private to: todoService) { }

  ngOnInit() {
  }
  newItem
  pushItem()
  {
    if(this.newItem!="")
    {
      this.to.pushItem(this.newItem)
    }
  }

}
