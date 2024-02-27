import ListGroup from "./components/ListGroups";

function App() {
  let items = ["New York", "Sans Francissco", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading='Cities'/>
    </div>
  );
}

export default App;
