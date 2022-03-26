import { useSelector } from "react-redux";
import { formatNumber } from "../services/CommonService";
import { getBalanceFromAddressAndDate } from "../services/ApiService";
import ListBox from "./common/ListBox";

export default function OverviewCard() {
  const balance = useSelector((state) => state.filter.balance);
  const filterAddress = useSelector((state) => state.filter.address);
  const balanceHistory = useSelector((state) => state.filter.balanceHistory);
  const ethPrice = useSelector((state) => state.filter.ethPrice);
  const tokens = useSelector((state) => state.filter.tokens);

  const today = () => {
    let t = new Date();
    let year = t.getFullYear();
    let month = t.getMonth() < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1;
    let date = t.getDate() < 10 ? "0" + t.getDate() : t.getDate();
    return year + "-" + month + "-" + date;
  };

  const updateBalanceHistpry = (event) => {
    getBalanceFromAddressAndDate(filterAddress, event.target.value);
  };

  return (
    <div className="flex bg-transparent mt-5">
      <div className="container lg:flex m-auto lg:space-x-5">
        <div className="w-full my-8 p-3 bg-white rounded">
          <h1 className="text-left font-bold p-3">Overview</h1>
          <div className="bg-slate-200 h-px -mx-3"></div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Balance :</h3>
            <p className="text-left p-2"> {balance / Math.pow(10, 18)} eth</p>
          </div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Value :</h3>
            <p className="text-left p-2">
              ${formatNumber((balance * ethPrice) / Math.pow(10, 18))}{" "}
              <span className="text-xs">(@ ${ethPrice}/ETH)</span>
            </p>
          </div>
          <div className="flex">
            <h3 className="w-32 text-left p-2">Tokens :</h3>
            <ListBox items={tokens} />
          </div>
        </div>
        <div className="w-full my-8 p-3 bg-white rounded">
          <h1 className="text-left font-bold p-3">Balance History</h1>
          <div className="bg-slate-200 h-px -mx-3"></div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Date :</h3>
            <input
              type="date"
              className="w-rest-32 border-none cursor-pointer focus-visible:outline-slate-200 leading-5 text-gray-900 my-1 shadow-sm px-2"
              defaultValue={today()}
              onChange={(e) => updateBalanceHistpry(e)}
            />
          </div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Balance :</h3>
            <p className="text-left p-2">
              {" "}
              {balanceHistory / Math.pow(10, 18)} eth
            </p>
          </div>
          <div className="flex">
            <h3 className="w-32 text-left p-2">Value :</h3>
            <p className="text-left p-2">
              ${formatNumber((balanceHistory * ethPrice) / Math.pow(10, 18))}{" "}
              <span className="text-xs">(@ ${ethPrice}/ETH)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
