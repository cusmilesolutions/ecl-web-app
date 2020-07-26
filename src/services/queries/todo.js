import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query {
    tasks {
      tasks {
        _id
        title
        description
        deadline
        status
      }
      totalTasks
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask(
    $title: String!
    $description: String!
    $deadline: String
  ) {
    createTask(title: $title, description: $description, deadline: $deadline) {
      _id
    }
  }
`;
