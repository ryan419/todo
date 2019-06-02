import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from './todo.service';
import { GraphQLModule } from '../graphql.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GraphQLModule,
  ],
  providers: [TodoService],
})
export class TodoModule { }
