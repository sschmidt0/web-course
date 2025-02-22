import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./common/routing/Routes";
import { HeaderContainer } from "./pods/header";

function App() {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
