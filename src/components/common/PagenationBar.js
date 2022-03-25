import React from "react";
import { useSelector } from "react-redux";
import { getTransactionsFromAddressAndStartBlock } from "../../services/ApiService";

export default function PagenationBar() {
  const currentPage = useSelector((state) => state.filter.data.page);
  const totalPage = Math.ceil(
    useSelector((state) => state.filter.data.total) /
      useSelector((state) => state.filter.data.page_size)
  );
  const filterAddress = useSelector((state) => state.filter.address);
  const startBlock = useSelector((state) => state.filter.startBlock);
  const limit = useSelector((state) => state.filter.data.page_size);

  const goToPage = (page) => {
    if (page >= 0 && page <= totalPage && page !== currentPage) {
      getTransactionsFromAddressAndStartBlock(
        filterAddress,
        startBlock,
        page * limit,
        limit
      );
    }
  };
  return (
    <div className="flex p-5 space-x-2">
      <button
        className="h-8 w-11 rounded bg-sky-50 hover:bg-sky-300 transition"
        onClick={() => goToPage(0)}
      >
        First
      </button>
      <button
        className="h-8 w-8 rounded bg-sky-50 hover:bg-sky-300 transition"
        onClick={() => goToPage(currentPage - 1)}
      >
        {"<"}
      </button>
      <button className="h-8 block rounded bg-sky-50 hover:bg-sky-300 transition px-2">
        Page {currentPage + 1} of {totalPage}
      </button>
      <button
        className="h-8 w-8 rounded bg-sky-50 hover:bg-sky-300 transition"
        onClick={() => goToPage(currentPage + 1)}
      >
        {">"}
      </button>
      <button
        className="h-8 w-11 rounded bg-sky-50 hover:bg-sky-300 transition"
        onClick={() => goToPage(totalPage - 1)}
      >
        Last
      </button>
    </div>
  );
}
