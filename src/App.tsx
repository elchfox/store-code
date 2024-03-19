import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";
import BaseLayout from "./layouts/BaseLayout";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themeMui";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
        </ThemeProvider>
    </Provider>
  );
};

export default App;
