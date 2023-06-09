import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductData from "./pages/ProductData";
import SearchResult from "./pages/SearchResult";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/product/:id"
            element={<ProductData />}
          />
          <Route
            path="/search"
            element={<SearchResult />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
