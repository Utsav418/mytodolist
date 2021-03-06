import { Component, OnInit } from '@angular/core';
  import { todoService } from 'src/app/Todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private to:todoService) {}

  ngOnInit() {
    this.items=this.to.getlist()
  }
  removeItem(index)
  {
    this.to.removeItem(index)
  }
  items=[]
}
