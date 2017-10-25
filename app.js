
var Kale = () => (
  <li>Kale</li>
)

var Broccoli = () => (
  <li>Broccoli</li>
)

var GroceryList = () => (
  <ul>
    <Kale />
    <Broccoli />
  </ul>
)
ReactDOM.render(<GroceryList />, document.getElementById("app"));
