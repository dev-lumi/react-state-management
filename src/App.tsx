import { createContext } from "react";
import Example from "./components/Context/Example";

export const ExampleContext = createContext<string|null>(null);
function App() {
  let text : string = "It is working."
  return (
    <div className="bg-black/90 h-screen text-white px-5 ">
      <ExampleContext.Provider value={text}>
        <Example></Example>
      </ExampleContext.Provider>
    </div>
  );
}

export default App;
