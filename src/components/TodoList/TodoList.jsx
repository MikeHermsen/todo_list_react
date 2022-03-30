import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todoList = [
    {
      id: 'a',
      done: true,
      name: 'Huiswerk C# Maken',
    },
    {
      id: 'b',
      done: false,
      name: 'Spotify casus maken',
    },
];

const TodoList = () => {
    const [list, setList] = React.useState(todoList);
    const [name, setName] = React.useState('');

    
    // Linked de value van de input en zet die neer als name
    function handleChange(event) {
      setName(event.target.value);
    }

    // Zorgt ervoor dat de er een nieuwe veld toegevoegt word
    function handleAdd() {
      const newList = list.concat({ name, id: uuidv4(), done: false });
  
      setList(newList);
  
      setName('');
    }

    function handleUpdate(id) {
      const newList = list.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            done: !item.done,
          };

          return updatedItem;
        }

        return item;
      });
      
      setList(newList);
      
    }

    
    const List = ({ list }) => (
  
      <ul>
        {list.map((item) => (              
          <li key={item.id} className={ item.done ? 'finished_task' : null }>
              <button type="button" onClick={() => handleUpdate(item.id)}> Done </button>
    
              {item.name}
          </li>
          ))}
      </ul>
    );
    

    
    return (
      <div>
        <AddItem
          name={name}
          onChange={handleChange}
          onAdd={handleAdd}
        />
  
        <List list={list} />
      </div>
    );
};
  
const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);
export default TodoList;