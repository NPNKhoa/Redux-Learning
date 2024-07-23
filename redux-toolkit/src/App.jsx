import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div>
      <h1>SIMPLE TODO APP</h1>
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
