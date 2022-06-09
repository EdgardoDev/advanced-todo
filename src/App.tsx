import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, todoDone: false }])
      setTodo("");
    }
  }

  console.log(todos)
  

  return (
    <div className="App">
      <span className="heading">React/TS Todo's</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;
