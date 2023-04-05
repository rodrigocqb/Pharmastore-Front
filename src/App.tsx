import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
