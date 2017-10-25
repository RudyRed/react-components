//Before class components
// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.item[0]}</li>
//     <li>{props.item[1]}</li>
//     <li>{props.item[2]}</li>
//   </ul>
// )
//
// var GroceryList = () => (
//   <div>
//     <h2>GroceryList</h2>
//     <GroceryListItem item={['Kale', 'Jam', 'Rum']}/>
//   </div>
// )
//ReactDOM.render(<GroceryList />, document.getElementById("GroceryList"));


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedUp: false
    };
  }

  onListItemClick() {
    this.setState({
      pickedUp: !this.state.pickedUp
    });
  }

  render() {

    var style = {
      textDecoration: this.state.pickedUp ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <div>
    <h2>GroceryList</h2>
    <ul>
      {props.item.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList item={['Kale', 'Jam', 'Rum']}/>, document.getElementById("GroceryList"));



//
// var TodoList = (props) => {
//
//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`
//
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//
//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }
//
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById('app'))
