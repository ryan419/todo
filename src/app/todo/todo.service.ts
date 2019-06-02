import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

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
    }).valueChanges;
  }
}
