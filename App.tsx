import { BikeProvider } from "./Context/Bikeselector";
import Home from "./Home";
import Routes from "./routes/routes";
import { NavigationContainer, } from "@react-navigation/native";

export default function App() {
  return (
    <BikeProvider>
    <Routes/>
    </BikeProvider>

  );
}

