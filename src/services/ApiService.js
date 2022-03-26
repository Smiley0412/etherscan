import { setErrorMessage, setLoading, updateState } from "./FilterSlice";
import { store } from "../store";
import { formatTokenTransactions } from "./CommonService";

const axios = require("axios");

const ETHSCAN_APIKEY = process.env.REACT_APP_ETHSCAN_APIKEY;
const MORALIS_APIKEY = process.env.REACT_APP_MORALIS_APIKEY;

const BASE_ETHSCAN_URL = "https://api.etherscan.io/api";
const BASE_MORALIS_URL = "https://deep-index.moralis.io/api/v2/";

export const getEthPrice = () => {
  axios
    .get(BASE_ETHSCAN_URL, {
      params: {
        module: "stats",
        action: "ethprice",
        apikey: ETHSCAN_APIKEY,
      },
    })
    .then((res) => {
      if (res.data.message == "OK")
        store.dispatch(
          updateState({
            key: "ethPrice",
            value: res.data.result.ethusd,
          })
        );
      else store.dispatch(setErrorMessage(res.data.result));
    })
    .catch((err) => {
      store.dispatch(setErrorMessage(err.message));
    });
};

export const getTransactionsFromAddressAndStartBlock = (
  address,
  startBlock,
  offset,
  limit
) => {
  store.dispatch(setLoading(true));
  axios
    .get(BASE_MORALIS_URL + address, {
      params: {
        chain: "eth",
        from_block: startBlock,
        offset: offset,
        limit: limit,
      },
      headers: {
        "X-API-KEY": MORALIS_APIKEY,
      },
    })
    .then((res) => {
      store.dispatch(
        updateState({
          key: "data",
          value: res.data,
        })
      );
    })
    .catch((err) => {
      store.dispatch(setErrorMessage(err.message));
    });
};

export const getBalanceFromAddressAndDate = async (address, date) => {
  store.dispatch(setLoading(true));
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
  axios
    .get(BASE_MORALIS_URL + address + "/balance", {
      params: {
        chain: "eth",
        to_block: block_number,
      },
      headers: {
        "X-API-KEY": MORALIS_APIKEY,
      },
    })
    .then((res) => {
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
    })
    .catch((err) => {
      store.dispatch(setErrorMessage(err.message));
    });
};

export const getTokensFromAddress = (address) => {
  store.dispatch(setLoading(true));
  axios
    .get(BASE_MORALIS_URL + address + "/erc20", {
      params: {
        chain: "eth",
      },
      headers: {
        "X-API-KEY": MORALIS_APIKEY,
      },
    })
    .then((res) => {
      store.dispatch(
        updateState({
          key: "tokens",
          value: res.data,
        })
      );
    })
    .catch((err) => {
      store.dispatch(setErrorMessage(err.message));
    });
};

export const getTokenTransactionsFromAddressAndTokens = (
  address,
  startBlock,
  token
) => {
  store.dispatch(setLoading(true));
  store.dispatch(
    updateState({
      key: "selectedToken",
      value: token,
    })
  );
  let url = "";
  let data = {};
  if (token) {
    url = BASE_ETHSCAN_URL;
    data = {
      params: {
        module: "account",
        action: "tokentx",
        contractaddress: token,
        address: address,
        startblock: startBlock,
        apikey: ETHSCAN_APIKEY,
      },
    };
  } else {
    url = BASE_MORALIS_URL + address + "/erc20/transfers";
    data = {
      params: {
        chain: "eth",
        from_block: startBlock,
      },
      headers: {
        "X-API-KEY": MORALIS_APIKEY,
      },
    };
  }
  axios
    .get(url, data)
    .then((res) => {
      if (res.data.message == "OK" || token === null || token === undefined)
        store.dispatch(
          updateState({
            key: "data",
            value: formatTokenTransactions(res.data),
          })
        );
      else store.dispatch(setErrorMessage(res.data.result));
    })
    .catch((err) => {
      store.dispatch(setErrorMessage(err.message));
    });
};
