import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";

export default function Table(props) {
  const transactions = useSelector((state) => state.filter.data.result);
  const tokens = useSelector((state) => state.filter.tokens);

  const displayAgo = (value) => {
    let date = value.block_timestamp
      ? value.block_timestamp
      : parseInt(value.timeStamp);
    let duration = moment.duration(moment().diff(moment(date)));
    if (duration.days() || duration.months() || duration.years()) {
      return (
        moment().diff(moment(date), "days") +
        " days " +
        duration.hours() +
        " hrs ago"
      );
    } else if (duration.hours()) {
      return duration.hours() + " hrs " + duration.minutes() + " mins ago";
    } else {
      return duration.minutes() + " mins " + duration.seconds() + " secs ago";
    }
  };

  const displayValue = (value) => {
    let decimal = 18;
    let unit = " Ether";
    if (props.selected === "token") {
      let contract = tokens.filter(
        (t) => t.token_address === value.contractAddress
      )[0];
      decimal = parseInt(contract?.decimals);
      unit = " " + contract?.symbol;
    }
    return parseInt(value.value) / Math.pow(10, decimal) + unit;
  };
  const displayGas = (value) => {
    return (
      (parseInt(value["gas_price"]) * parseInt(value["receipt_gas_used"])) /
      Math.pow(10, 18)
    );
  };
  const displayToken = (value) => {
    let contract = tokens.filter(
      (t) => t.token_address === value.contractAddress
    );
    return contract[0]?.name + " (" + contract[0]?.symbol + ")";
  };

  return (
    <table className="w-full table-fixed border-collapse border border-slate-400">
      <thead>
        <tr className="bg-slate-200">
          <th className="border border-slate-300 p-2">Transaction Hash</th>
          <th className="border border-slate-300 p-2">Block Number</th>
          <th className="border border-slate-300 p-2">Ago</th>
          <th className="border border-slate-300 p-2">From</th>
          <th className="border border-slate-300 p-2">To</th>
          <th className="border border-slate-300 p-2">Value</th>
          {props.selected === "eth" ? (
            <th className="border border-slate-300 p-2">Gas</th>
          ) : (
            <th className="border border-slate-300 p-2">Token</th>
          )}
        </tr>
      </thead>
      <tbody>
        {transactions.map((value, ii) => (
          <tr className="even:bg-slate-200" key={ii}>
            <td className="border border-slate-300 truncate p-2">
              {value.hash}
            </td>
            <td className="border border-slate-300 truncate p-2">
              {value.block_number}
            </td>
            <td className="border border-slate-300 truncate p-2">
              {displayAgo(value)}
            </td>
            <td className="border border-slate-300 truncate p-2">
              {value.from_address}
            </td>
            <td className="border border-slate-300 truncate p-2">
              {value.to_address}
            </td>
            <td className="border border-slate-300 truncate p-2">
              {displayValue(value)}
            </td>
            {props.selected === "eth" ? (
              <td className="border border-slate-300 truncate p-2">
                {displayGas(value)}
              </td>
            ) : (
              <td className="border border-slate-300 truncate p-2">
                {displayToken(value)}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
