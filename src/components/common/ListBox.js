import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { getTokenTransactionsFromAddressAndTokens } from "../../services/ApiService";
import { useSelector } from "react-redux";

export default function ListBox(props) {
  const [selected, setSelected] = useState(null);
  const filterAddress = useSelector((state) => state.filter.address);
  const startBlock = useSelector((state) => state.filter.startBlock);
  const changeToken = (e) => {
    setSelected(e);
    getTokenTransactionsFromAddressAndTokens(
      filterAddress,
      startBlock,
      e?.token_address
    );
  };
  return (
    <div className="w-rest-32">
      <Listbox value={selected} onChange={(e) => changeToken(e)}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate h-5">{selected?.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <Listbox.Option
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                  }`
                }
                value={null}
              >
                All Tokens
                {selected === null ? (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                ) : null}
              </Listbox.Option>
              {props.items.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`flex justify-between truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        <div className="flex justify-start">
                          <img
                            className="w-5 mr-2"
                            src={item.thumbnail}
                            alt={item.thumbnail}
                          />
                          {item.name}
                        </div>
                        <div className="">
                          {(
                            Number(item.balance) / Math.pow(10, item.decimals)
                          ).toFixed(4)}{" "}
                          {item.symbol}
                        </div>
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
