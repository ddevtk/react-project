import React, { useState, useEffect, useRef } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')));
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({
    isShow: false,
    type: '',
    message: '',
  });

  const itemRef = useRef();

  const showAlert = (message = '', type = '', isShow = false) => {
    setAlert({ type, message, isShow });
  };

  const clearList = () => {
    setList([]);
    showAlert('Clear successfully', 'success', true);
  };

  const removeItemHandler = id => {
    setList(list.filter(item => item.id !== id));
  };
  const editItemHandler = id => {
    const specifiedItem = list.find(item => item.id === id);
    itemRef.current.value = specifiedItem.title;
    setIsEditing(true);
  };

  const submitHandler = e => {
    e.preventDefault();
    const itemTitle = itemRef.current.value;
    if (!itemTitle) {
      showAlert('Please enter value', 'danger', true);
    }
    if (itemTitle && isEditing) {
      setList(
        list.map(item => {
          if (item.title === itemRef.current.value) {
            return { ...item, title: itemRef.current.value };
          }
          return item;
        })
      );
      setIsEditing(false);
      itemRef.current.value = '';
      showAlert('Item changed', 'success', true);
    }
    if (itemTitle && !isEditing) {
      const newItem = {
        id: new Date().getTime().toString(),
        title: itemTitle,
      };
      setList([...list, newItem]);
      showAlert('Item added to list', 'success', true);
      itemRef.current.value = '';
    }
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={submitHandler}>
        {alert.isShow && (
          <Alert {...alert} removeAlert={showAlert} list={list} />
        )}
        <h3>Grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g: Strawberry'
            ref={itemRef}
          />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container '>
        <List
          items={list}
          onRemove={removeItemHandler}
          onEdit={editItemHandler}
        />
        <button className='clear-btn' onClick={clearList}>
          Clear item
        </button>
      </div>
    </section>
  );
}

export default App;
