import { useSelector } from 'react-redux';
import { selectAllItems } from './features/todo/todoSlice';
import AddItem from './features/todo/AddItem';
import ListItem from './features/todo/ListItem';
import './App.css';

function App() {
  const items = useSelector(selectAllItems);

  return (
    <div className="app-container">
      <div className="input-container">
        <AddItem />
      </div>
      <div className="list-container">
        {items.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;

// Initial code by Chris Kubick for Nucamp, updated by Minae Lee
