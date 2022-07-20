import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import { GlobalStyle } from "./global";

export function App() {
  return (
    <div className="App">
      <Login />
      <Sidebar />
      
      <GlobalStyle />
    </div>
  );
}