import { updateState } from "./FilterSlice";
import { store } from "../store";

const axios = require("axios");

const ETHSCAN_APIKEY = process.env.REACT_APP_ETHSCAN_APIKEY;
const MORALIS_APIKEY = process.env.REACT_APP_MORALIS_APIKEY;

const BASE_ETHSCAN_URL = "https://api.etherscan.io/api";
const BASE_MORALIS_URL = "https://deep-index.moralis.io/api/v2/";

export const getEthPrice = async () => {
  const res = await axios.get(BASE_ETHSCAN_URL, {
    params: {
      module: "stats",
      action: "ethprice",
      apikey: ETHSCAN_APIKEY,
    },
  });
  if (res.status === 200) {
    store.dispatch(
      updateState({
        key: "ethPrice",
        value: res.data.result.ethusd,
      })
    );
  }
};

export const getTransactionsFromAddressAndStartBlock = async (
  address,
  startBlock,
  offset,
  limit
) => {
  const res = await axios.get(BASE_MORALIS_URL + address, {
    params: {
      chain: "eth",
      from_block: startBlock,
      offset: offset,
      limit: limit,
    },
    headers: {
      "X-API-KEY": MORALIS_APIKEY,
    },
  });
  if (res.status === 200) {
    store.dispatch(
      updateState({
        key: "data",
        value: res.data,
      })
    );
  }
};

export const getBalanceFromAddressAndDate = async (address, date) => {
  let res = !date
    ? null
    : await axios.get(BASE_MORALIS_URL + "dateToBlock", {
        params: {
          chain: "eth",
          date: date,
        },
        headers: {
          "X-API-KEY": MORALIS_APIKEY,
        },
      });
  const block_number = res?.status === 200 ? res.data.block : null;
  res = await axios.get(BASE_MORALIS_URL + address + "/balance", {
    params: {
      chain: "eth",
      to_block: block_number,
    },
    headers: {
      "X-API-KEY": MORALIS_APIKEY,
    },
  });
  if (res.status === 200) {
    block_number === null &&
      store.dispatch(
        updateState({
          key: "balance",
          value: parseInt(res.data.balance),
        })
      );
    store.dispatch(
      updateState({
        key: "balanceHistory",
        value: parseInt(res.data.balance),
      })
    );
  }
};

export const getTokensFromAddress = async (address) => {
  const res = await axios.get(BASE_MORALIS_URL + address + "/erc20", {
    params: {
      chain: "eth",
    },
    headers: {
      "X-API-KEY": MORALIS_APIKEY,
    },
  });
  if (res.status === 200) {
    store.dispatch(
      updateState({
        key: "tokens",
        value: res.data,
      })
    );
  }
};
