import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );//lo que esta entre parentesis es igual a "todo => crearTodoHtml( todo )" solo funciona si el metodo recibe un solo atributo

