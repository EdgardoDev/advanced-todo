import React, { useRef } from "react"
import "./styles.css"

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="form-input" onSubmit={(e) => {
      handleAddTodo(e);
      inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={
          (e) => setTodo(e.target.value)}
        className="search-input"
        placeholder="ENTER A NEW TASK"
      />
      <button type="submit" className="button-input">ADD</button>
    </form>
  )
}

export default InputField