import { useEffect, useRef, useState } from "react";
import { FaEdit, FaTrashAlt, FaCheck } from "react-icons/fa";
import { Todo } from "../model";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  
  const handleTodoDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todoDone: !todo.todoDone } : todo
      )
    );
  };

  const handleTodoDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, todo: editTodo } : todo
    )));
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  
  

  return (
    <form className="form-single-todos" onSubmit={(e) => handleEditTodo(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="single-todo-text"
        />
        ): todo.todoDone ? (
          <s className="single-todo-text">{todo.todo}</s>
        ): (
            <span className="single-todo-text">{todo.todo}</span>
        )}

      <div>
        <span className="icon"
          onClick={() => {
            if (!edit && !todo.todoDone) {
              setEdit(!edit);
            }
          }}
        >
          <FaEdit />
        </span>
        <span className="icon" onClick={() => handleTodoDone(todo.id)}>
          <FaCheck />
        </span>
        <span className="icon" onClick={() => handleTodoDelete(todo.id)}>
          <FaTrashAlt />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo;