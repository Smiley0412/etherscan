import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionsFromAddressAndStartBlock } from "../services/ApiService";
import { updateState } from "../services/FilterSlice";

export default function FilterCard() {
  const dispath = useDispatch();
  const filterAddress = useSelector((state) => state.filter.address);
  const startBlock = useSelector((state) => state.filter.startBlock);
  useEffect(() => {
    if (IsNotAddress(filterAddress)) {
      console.log("is not address");
    } else {
      getTransactionsFromAddressAndStartBlock(filterAddress, startBlock, 0, 25);
    }
  }, [filterAddress, startBlock]);

  const IsNotAddress = (address) => {
    if (address.length !== 42 || address.slice(0, 2) !== "0x") {
      return true;
    }
    return false;
  };

  const updateAddress = (event) => {
    if (event.key === "Enter") {
      dispath(
        updateState({
          key: "address",
          value: event.target.value,
        })
      );
    }
  };
  const updateBlocknumber = (event) => {
    if (event.key === "Enter") {
      if (parseInt(event.target.value)) {
        dispath(
          updateState({
            key: "startBlock",
            value: parseInt(event.target.value),
          })
        );
      }
    }
  };

  return (
    <div className="flex bg-transparent mt-10">
      <div className="container lg:flex m-auto bg-white p-5 rounded-lg">
        <input
          type="text"
          className="block w-full lg:w-3/4 rounded p-2 border-2 my-1 lg:mx-2"
          placeholder="Please enter address."
          onKeyDown={updateAddress}
        />
        <input
          type="text"
          className="block w-full lg:w-1/4 rounded p-2 border-2 my-1 lg:mx-2"
          placeholder="Please enter block number."
          onKeyDown={updateBlocknumber}
        />
      </div>
    </div>
  );
}
