import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from './to-do.service';
import { ActivatedRoute } from '@angular/router';
                 

@Component({
  selector: 'app-to-do-info',
  templateUrl: './to-do-info.component.html'
     
})
export class ToDoInfoComponent implements OnInit {

  constructor( 
    private toDoService: TodoService,
    private activeRoute: ActivatedRoute) { }

  toDoForm = new FormGroup({
  
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  phoneNumber: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  confirmPassword: new FormControl('', Validators.required),
  });
 
  
  toDo: any;

  ngOnInit() {
  
    
   const id = this.activeRoute.snapshot.paramMap.get('todoId');
      console.log('Entered ngOnInit' + id);
    if (id !== 'add') {
      this.getToDo(+id);
}
    
  }

  getToDo(id: number): void {
    id=14;
  
    this.toDoService.getById(id)
      .subscribe(
        (todo) => {
          console.log("Entered getById");
          console.log(todo);
          this.toDo = todo;
          this.toDoForm.patchValue(todo);
        },
        (error) => {
          console.log('failed getting user by id');
        },
      );
  }

  save(): void {

    this.toDoService.saveTodos(this.toDoForm.value).subscribe(
      (response) => {
        console.log('Saved User');
      },
      (error) => {
        console.log('failed saving user');
      },
    );
}

}
