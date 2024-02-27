import Button from "./components/button";
import Alert from "./components/alert";
import { useState } from "react";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const alert = (
    <Alert onClose={() => setAlertVisibility(false)}>
      Close
    </Alert>
  );
  return (
    <div>
      {alertVisibility && alert}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}

export default App;
