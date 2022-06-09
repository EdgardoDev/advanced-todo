import { FaEdit, FaTrashAlt, FaCheck } from "react-icons/fa";
import { Todo } from "../model";
import "./styles.css"

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className="form-single-todos">
      <span className="single-todo-text">
        {todo.todo}
      </span>
      <div>
        <span className="icon">
          <FaEdit />
        </span>
        <span className="icon">
          <FaTrashAlt />
        </span>
        <span className="icon">
          <FaCheck />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo