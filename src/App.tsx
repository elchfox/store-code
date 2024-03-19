import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import BaseLayout from "./layouts/BaseLayout";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<ProductsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
