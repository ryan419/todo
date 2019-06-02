import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private apollo: Apollo) {}

  public getAllTodos() {
    return this.apollo.watchQuery({
      query: gql`query {
        allTodos {
          nodes {
            id,
            itemByItemId {
              id,
              description,
              status,
              deadline
            },
            createdAt,
          }
        }
      }`
    }).valueChanges.pipe(
      map((res: any) => res.data.allTodos.nodes as Array<any>),
    );
  }
}
