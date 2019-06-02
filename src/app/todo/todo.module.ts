import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from './todo.service';
import { GraphQLModule } from '../graphql.module';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    GraphQLModule,
  ],
  providers: [TodoService],
})
export class TodoModule { }
