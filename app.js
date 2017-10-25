
var GroceryListItem = (props) => (
  <ul>
    <li>{props.item[0]}</li>
    <li>{props.item[1]}</li>
  </ul>
)

var GroceryList = () => (
  <div>
    <h2>GroceryList</h2>
    <GroceryListItem item={['Kale', 'Jam']}/>
  </div>
)
ReactDOM.render(<GroceryList />, document.getElementById("GroceryList"));




//
// // Here we create a `TodoList` component
// var TodoList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );
//
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById('app'))
