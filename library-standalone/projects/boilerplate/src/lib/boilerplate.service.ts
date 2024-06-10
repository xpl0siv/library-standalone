import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BoilerplateService {
  todosMock: WritableSignal<Todo[]> = signal([
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
  ]);

  readonly todos: Signal<Todo[]> = computed(() => this.todosMock());
}
