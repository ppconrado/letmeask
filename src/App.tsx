import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  
  // Routes
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </AuthContextProvider>
    </BrowserRouter>
  );


  // return (
  //   <BrowserRouter>
  //   <TestContext.Provider value={{ value, setValue }}>
  //     <Route path="/" exact component={Home}/>
  //     <Route path="/rooms/new" component={NewRoom}/>
  //     </TestContext.Provider>
  //   </BrowserRouter>
  // );
}


export default App;
