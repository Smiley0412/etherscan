import { Provider } from "react-redux";
import "./App.css";
import FilterCard from "./components/FilterCard";
import Header from "./components/Header";
import OverviewCard from "./components/OverviewCard";
import TableCard from "./components/TableCard";
import { store } from "./store";

function App() {
  console.log("process", process.env);
  return (
    <Provider store={store}>
      <div className="App bg-slate-200 min-h-screen bg-[url('images/hero.jpg')] bg-cover bg-repeat-y">
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
