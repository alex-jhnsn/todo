import { Todo } from "../types/Todo";
import { TodoListItem } from "../types/TodoListItem";

const data: Todo[] = [
  {
      "id": "9658769f-e3a2-4717-af4a-0153494c2759",
      "isComplete": false,
      "value": "Make to do website"
  },
  {
      "id": "24e16e23-8885-4310-8ac4-06906091c231",
      "isComplete": false,
      "value": "Do a lunch walk"
  },
  {
      "id": "766e89d1-4c4e-402a-a2fb-5a6c08f12cf1",
      "isComplete": true,
      "value": "Make an example"
  },
  {
      "id": "3b984c0c-4282-42c5-b5d2-396331d864d5",
      "isComplete": true,
      "value": "Go get a coffee"
  }
];

export default function GetTodos(): Promise<TodoListItem[]> {
  return new Promise(resolve => {
    resolve(data.map(todo => ({ id: todo.id, value: todo.value, isComplete: todo.isComplete }) ));
  });
};