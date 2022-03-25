import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import PagenationBar from "./common/PagenationBar";
export default function TableCard() {
  const [selected, setSelected] = useState("eth");
  const transactions = useSelector((state) => state.filter.data.result);
  const total = useSelector((state) => state.filter.data.total);
  useEffect(() => {
    console.log(transactions);
  }, [transactions]);
  const keys = {
    eth: [
      "hash",
      "block_number",
      "block_timestamp",
      "from_address",
      "to_address",
      "value",
      "gas",
    ],
  };
  const changeTabs = (tab) => {
    setSelected(tab);
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
            <PagenationBar />
          </div>
        </div>
        <div className="p-5">
          <table className="w-full table-fixed border-collapse border border-slate-400">
            <thead>
              <tr className="bg-slate-200">
                {keys.eth.map((key, i) => (
                  <th className="border border-slate-300 p-2" key={i}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((value, ii) => (
                <tr className="even:bg-slate-200" key={ii}>
                  {keys.eth.map((key, iii) => (
                    <td
                      className="border border-slate-300 truncate p-2"
                      key={iii}
                    >
                      {value[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
