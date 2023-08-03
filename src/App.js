import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <h1>TODO LIST</h1>
        <div className="todo-header">
          <button type="submit" className="primary-btn">
            Add Task
          </button>
          <select name="filter" id="filter">
            <option value="all">All</option>
            <option value="all">Incomplete</option>
            <option value="all">Completed</option>
          </select>
        </div>
        <div className="todo-list-container">
          <div className="todo-list">
            <div className="flex five-gap">
              <input
                type="checkbox"
                className="todo-check-box"
                name="todo"
                id="todo"
              />
              <div className="todo-info-container">
                <p className="todo-info">First</p>
                <p className="todo-info">9:57 PM, 07/31/2023</p>
              </div>
            </div>
            <div className="flex btn-gap">
              <button type="button">Delete</button>
              <button type="button">Edit</button>
            </div>
          </div>

          <div className="todo-list">
            <div className="flex five-gap">
              <input
                type="checkbox"
                className="todo-check-box"
                name="todo"
                id="todo"
              />
              <div className="todo-info-container">
                <p className="todo-info">Second</p>
                <p className="todo-info">9:59 PM, 07/31/2023</p>
              </div>
            </div>
            <div className="flex btn-gap">
              <button type="button">Delete</button>
              <button type="button">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
