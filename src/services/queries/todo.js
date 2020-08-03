import { gql } from '@apollo/client';

// Queries for the tasks
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

export const GET_UNCOMPLETED_TASKS = gql`
  query {
    subTasks(status: uncompleted) {
      tasks {
        _id
        title
        deadline
      }
      totalTasks
    }
  }
`;

export const GET_COMPLETED_TASKS = gql`
  query {
    subTasks(status: completed) {
      tasks {
        _id
        title
        deadline
      }
      totalTasks
    }
  }
`;

// Mutations for the tasks
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

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;

export const COMPLETE_TASK = gql`
  mutation CompleteTask($id: ID!) {
    completeTask(id: $id)
  }
`;
