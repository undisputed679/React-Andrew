// import ArrowFunctions from "./helloReact/ArrowFunctions";
// import ConditionalRendreing from "./helloReact/ConditionalRendreing";
// import EventsAndAttributes, { RenderCounterApp } from "./helloReact/EventsAndAttributes";
// import FormInput from "./helloReact/FormInput";
// import Hello from "./helloReact/Hello";
// import Jsxexpression from "./helloReact/Jsxexpression";
import AppRouter from "./Expensify/Router/AppRouter";


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<AppRouter/>} />
      </Routes> */}
      <AppRouter/>
    </div>
  );
}

export default App;
