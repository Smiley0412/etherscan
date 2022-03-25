import { useDispatch } from "react-redux";
import { updateState } from "../services/FilterSlice";

export default function FilterCard() {
  const dispath = useDispatch();

  const updateAddress = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
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
      console.log(event.target.value);
      dispath(
        updateState({
          key: "startBlock",
          value: event.target.value,
        })
      );
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
