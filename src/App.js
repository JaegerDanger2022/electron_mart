import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Electronics } from "./pages/Electronics";
import { MensClothing } from "./pages/MensClothing";
import { NavBar } from "./components/NavBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { WomenClothing } from "./pages/WomenClothing";
import { CartProvider } from "./components/util/useAddToCart";
import { Cart } from "./pages/Cart";

const queryClient = new QueryClient();
function App() {
  return (
    <CartProvider>
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
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </CartProvider>
  );
}

export default App;
