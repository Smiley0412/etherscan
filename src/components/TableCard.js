import { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
export default function TableCard() {
  const [selected, setSelected] = useState("eth");
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
            <p className="p-5">Total: 1000 transactions</p>
            <div className="flex p-5 space-x-2">
              <button className="h-8 w-11 rounded bg-sky-50">First</button>
              <button className="h-8 w-8 rounded bg-sky-50">{"<"}</button>
              <button className="h-8 w-8 rounded bg-sky-50">1</button>
              <button className="h-8 w-8 rounded bg-sky-50">2</button>
              <button className="h-8 w-8 rounded bg-sky-50">3</button>
              <button className="h-8 w-8 rounded bg-sky-50">4</button>
              <button className="h-8 w-8 rounded bg-sky-50">5</button>
              <button className="h-8 w-8 rounded bg-sky-50">{">"}</button>
              <button className="h-8 w-11 rounded bg-sky-50">Last</button>
            </div>
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
              {jsonResult.result.map((value, ii) => (
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

const jsonResult = {
  total: 7,
  page: 0,
  page_size: 500,
  result: [
    {
      hash: "0x37cba763dd404696853e619f750c8889bf8bd8a8fdf3e5cbb522d1f19bbc3cbe",
      nonce: "3",
      transaction_index: "140",
      from_address: "0x4026016aa6911d336d19ed226b9f81dd6f1a93dd",
      to_address: "0x1cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a",
      value: "0",
      gas: "103742",
      gas_price: "18626597274",
      input:
        "0xa9059cbb000000000000000000000000fa020a76f2ea4ff6ff73c40122f5a3b88170b427000000000000000000000000000000000000000000000000120a871cc0020000",
      receipt_cumulative_gas_used: "7542234",
      receipt_gas_used: "86248",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2022-03-23T09:15:06.000Z",
      block_number: "14441678",
      block_hash:
        "0x2a2801941904672f77a8f93a6907c6dad4b1bac80377916ea93398d3557ca799",
      transfer_index: [14441678, 140],
    },
    {
      hash: "0xe8cbcd12fe370d8a648a396074ed8dbc6c3101c3c56588645a477cdf55108bef",
      nonce: "2",
      transaction_index: "127",
      from_address: "0x4026016aa6911d336d19ed226b9f81dd6f1a93dd",
      to_address: "0x881d40237659c251811cec9c364ef91dc08d300c",
      value: "30000000000000000",
      gas: "526358",
      gas_price: "20669654265",
      input:
        "0x5f57552900000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006a94d74f43000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000c307846656544796e616d6963000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a0000000000000000000000000000000000000000000000000069a61944021800000000000000000000000000000000000000000000000000118781995a3ed22400000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000eebe0b40e800000000000000000000000000f326e4de8f66a0bdc0970b79e0924e33c79f191500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000368f35b47330000000000000000000000001cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000118781995a3ed2240000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000002081e063b1e000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000001cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000492438e0503800000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000001cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a869584cd00000000000000000000000011ededebf63bef0ea2d2d071bdf88f71543ec6fb0000000000000000000000000000000000000000000000e8c7d8c452623ae4a3000000000000000000000000000000000000000000000000cf",
      receipt_cumulative_gas_used: "9247505",
      receipt_gas_used: "404769",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2022-03-23T09:13:23.000Z",
      block_number: "14441668",
      block_hash:
        "0x0e1abc3a966cb0d7601daef97481b540d9c9f45462b24ddd6fe032d4049822e9",
      transfer_index: [14441668, 127],
    },
    {
      hash: "0x2aaeb71d0df51aceb37a26e23762760bbe76380b2247b2009fdb1679b2476133",
      nonce: "365193",
      transaction_index: "132",
      from_address: "0xcad621da75a66c7a8f4ff86d30a2bf981bfc8fdd",
      to_address: "0x4026016aa6911d336d19ed226b9f81dd6f1a93dd",
      value: "61338140000000000",
      gas: "90000",
      gas_price: "33012054140",
      input: "0x",
      receipt_cumulative_gas_used: "5360212",
      receipt_gas_used: "21000",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2022-03-23T09:04:21.000Z",
      block_number: "14441620",
      block_hash:
        "0x4f77f6cc909f05c28b973f752c489616cc11922e2fb6db9f029ea50850093581",
      transfer_index: [14441620, 132],
    },
    {
      hash: "0x5edf5953e5a0b81e9df859023727a7edb706aa7788dcb5faa19765e43a9e6506",
      nonce: "868",
      transaction_index: "14",
      from_address: "0xa88902d6e93922893ee77234ed1c3ba4bec90224",
      to_address: "0x4026016aa6911d336d19ed226b9f81dd6f1a93dd",
      value: "30287977950000000",
      gas: "21000",
      gas_price: "60000000000",
      input: "0x",
      receipt_cumulative_gas_used: "11129276",
      receipt_gas_used: "21000",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2022-03-23T06:51:56.000Z",
      block_number: "14441079",
      block_hash:
        "0xfa3def730a7f717a448e17145ad6d491c49febe4f3c02141d6644b142d3660a3",
      transfer_index: [14441079, 14],
    },
    {
      hash: "0x273f9cdabe2d039e7c4002f3333cb3c9161d55388cda573f10795a5d3fa59c7f",
      nonce: "1",
      transaction_index: "355",
      from_address: "0x4026016aa6911d336d19ed226b9f81dd6f1a93dd",
      to_address: "0xe907f27d908b62314dce795a71c5a9d26667d0df",
      value: "36814630707525000",
      gas: "21000",
      gas_price: "168867968904",
      input: "0x",
      receipt_cumulative_gas_used: "27185488",
      receipt_gas_used: "21000",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2021-11-22T15:03:13.000Z",
      block_number: "13665163",
      block_hash:
        "0xe2119de648b880b3ec9354ac93e59da8d60fd55469aa9e0828abaf89612cdec8",
      transfer_index: null,
    },
    {
      hash: "0x487c8f4c6c47ecbac8f3ea5463530d4f1cba71b021129b25d1d99682ec2f9449",
      nonce: "0",
      transaction_index: "69",
      from_address: "0x4026016aa6911d336d19ed226b9f81dd6f1a93dd",
      to_address: "0x337ea01c7bcebaa8405738273be46e6c32eb01e5",
      value: "16200000000000000",
      gas: "21000",
      gas_price: "143391423996",
      input: "0x",
      receipt_cumulative_gas_used: "6700795",
      receipt_gas_used: "21000",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2021-11-09T21:09:08.000Z",
      block_number: "13584461",
      block_hash:
        "0x9868b9420a8fefcff7f2b3d20a2eaa50f4b27f201f93d2eeac8fa8f5fc86b22f",
      transfer_index: null,
    },
    {
      hash: "0x8ec9ed5bbf10528d5ad3462305e7ac0367e172867a509dc9e87c1674598983bb",
      nonce: "0",
      transaction_index: "109",
      from_address: "0xd14025e2e9cb62d19afdc04fba0fe89244b8dda4",
      to_address: "0x4026016aa6911d336d19ed226b9f81dd6f1a93dd",
      value: "60000000000000000",
      gas: "21000",
      gas_price: "157944549481",
      input: "0x",
      receipt_cumulative_gas_used: "8194115",
      receipt_gas_used: "21000",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2021-11-03T18:04:39.000Z",
      block_number: "13545365",
      block_hash:
        "0xabdddbdb258621f1c792a1fd4bfc15df99d38eada7a75e55a59c7a7d7fd0e2f3",
      transfer_index: [13545365, 109],
    },
  ],
};
