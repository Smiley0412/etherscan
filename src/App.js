import { Provider } from "react-redux";
import "./App.css";
import Alert from "./components/common/Alert";
import Loading from "./components/common/Loading";
import FilterCard from "./components/FilterCard";
import Header from "./components/Header";
import OverviewCard from "./components/OverviewCard";
import TableCard from "./components/TableCard";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App min-h-screen bg-[url('images/hero.jpg')]">
        <Loading />
        <Alert />
        <div className="bg-[url('images/grid.svg')]">
          <Header />
          <FilterCard />
          <OverviewCard />
          <TableCard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
