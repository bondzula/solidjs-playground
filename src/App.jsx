import styles from './App.module.css';
import TodoItem from './TodoItem';

function App() {
  return (
    <div>
      <TodoItem item={{ done: false, label: 'Hello World' }}></TodoItem>
    </div>
  );
}

export default App;
