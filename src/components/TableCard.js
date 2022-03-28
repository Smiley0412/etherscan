import { useSelector } from "react-redux";
import {
  getTokenTransactionsFromAddressAndTokens,
  getTransactionsFromAddressAndStartBlock,
} from "../services/ApiService";
import PaginationBar from "./common/PaginationBar";
import Table from "./common/Table";

export default function TableCard() {
  const selected = useSelector((state) => state.filter.selected);
  const total = useSelector((state) => state.filter.data.total);
  const filterAddress = useSelector((state) => state.filter.address);
  const startBlock = useSelector((state) => state.filter.startBlock);
  const selectedToken = useSelector((state) => state.filter.selectedToken);

  const changeTabs = (tab) => {
    if (tab === "token") {
      getTokenTransactionsFromAddressAndTokens(
        filterAddress,
        startBlock,
        selectedToken
      );
    } else {
      getTransactionsFromAddressAndStartBlock(filterAddress, startBlock, 0, 25);
    }
  };
  return (
    <div className="mt-5">
      <div className="container m-auto bg-white rounded">
        <ul className="flex px-5 border-b border-slate-200">
          <li
            className={
              "p-3 cursor-pointer -mb-px" +
              (selected === "eth"
                ? " font-bold text-sky-500 border-b-2 border-sky-500"
                : "")
            }
            onClick={() => changeTabs("eth")}
          >
            Transactions
          </li>
          <li
            className={
              "p-3 cursor-pointer -mb-px" +
              (selected === "token"
                ? " font-bold text-sky-500 border-b-2 border-sky-500"
                : "")
            }
            onClick={() => changeTabs("token")}
          >
            Tokens
          </li>
        </ul>
        <div className="block">
          <div className="lg:flex justify-between">
            <p className="p-5">Total: {total} transactions</p>
            {total ? <PaginationBar /> : null}
          </div>
        </div>
        <div className="p-5">
          <Table selected={selected} />
        </div>
      </div>
    </div>
  );
}
