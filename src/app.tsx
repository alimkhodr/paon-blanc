import Home from "./pages/home/home";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Home />
    </SnackbarProvider>
  );
};
export default App;