import Starter from "./tutorial/02-useEffect/starter/05-cleanup-function";
import Navbar from "./tutorial/04-project-structure/starter/Navbar";

import { Home, About } from "./tutorial/04-project-structure/starter/Pages";

function App() {
  return (
    <div className="container">
      {/* <Starter /> */}
      <Home/>
      <About/>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;