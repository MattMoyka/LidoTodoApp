
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [temp, setTemp] = useState([])
  const [add, setAdd] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setList([...list, add])
    setAdd('')
  }


  function handleDelete(e) {
    const templist = list
    templist.splice(e.target.value, 1)
    setTemp(templist)
  }



  useEffect(() => {
    setList([...temp])
  }, [temp])



  return (
    <div className="App">

      <h1>Lido Todo App</h1>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter item todo' value={add} onChange={(e) => setAdd(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
      <div>
        {list.map((item, index) => {
          return (

            <div key={index} className="todo-container">
              <div >{item}</div>
              <button value={index} onClick={handleDelete}>Delete</button>
            </div>

          )
        })}
      </div>
    </div>
  );
}

export default App;
