import React from "react"
import { Droppable } from "react-beautiful-dnd"
import { Todo } from "../model"
import SingleTodo from "./SingleTodo"
import "./styles.css"

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}: Props) => {
  return (
    <div className="todos-container">
      <Droppable droppableId="ToBeCompleted">
        {
          (provided) => (
            <div className="todo-list" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todo-header">To Be Completed</span>
              {todos.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todo={todo}
                  todos={completedTodos}
                  key={todo.id}
                  setTodos={setTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>

      <Droppable droppableId="AlreadyCompleted">
        {
          (provided) => (
            <div className="todo-list" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todo-header completed">Already Completed</span>
              {completedTodos.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todo={todo}
                  todos={completedTodos}
                  key={todo.id}
                  setTodos={setCompletedTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )
        }
        </Droppable>
    </div>

  )
}

export default TodoList