import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./common/routing/Routes";
import { HeaderContainer } from "./pods/header";
import { useMenuStore } from "./store";
import { MenuBoxContainer } from "./pods/menu-box";

function App() {
  const { isOpen } = useMenuStore();

  return (
    <BrowserRouter>
      <HeaderContainer />
      <AppRoutes />
      {isOpen && <MenuBoxContainer />}
    </BrowserRouter>
  );
}

export default App;
