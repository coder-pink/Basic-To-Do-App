
import { Provider } from 'react-redux';
import store from './store/index';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="box  glassmorphic-effect">
          <h1 className="text-3xl font-bold text-center mb-8">To-Do App</h1>
          <div className="todo-app">
            <TaskInput />
            <TaskList />
          </div>
        </div>

      </div>
    </Provider>
  );
};

export default App;

