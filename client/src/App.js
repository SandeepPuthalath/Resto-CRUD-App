import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="w-full min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
