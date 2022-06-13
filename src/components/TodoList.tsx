import React from "react"
import { Todo } from "../model"
import SingleTodo from "./SingleTodo"
import { Droppable } from "react-beautiful-dnd"
import "./styles.css"

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Array<Todo>;
}

const TodoList: React.FC<props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="todos-container">
      <Droppable droppableId="ToBeCompleted">
        {(provided) => (
          <div
            className="todo-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
              <span className="todo-header">To Be Completed</span>
              {todos?.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todos={todos}
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
      </Droppable>

      <Droppable droppableId="AlreadyCompleted">
        {
          (provided) => (
            <div className="todo-list" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todo-header completed">Already Completed</span>
              {completedTodos?.map((todo, index) => (
                <SingleTodo
                  index={index}
                  todos={completedTodos}
                  todo={todo}
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