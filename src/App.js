import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Electronics } from "./pages/Electronics";
import { MensClothing } from "./pages/MensClothing";
import { NavBar } from "./components/NavBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { WomenClothing } from "./pages/WomenClothing";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/:category/ElectronicsProducts"
            element={<Electronics />}
          ></Route>
          <Route
            path="/:category/mensClothing"
            element={<MensClothing />}
          ></Route>
          <Route
            path="/:category/womensClothing"
            element={<WomenClothing />}
          ></Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
