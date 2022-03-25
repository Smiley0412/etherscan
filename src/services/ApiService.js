import { updateState } from "./FilterSlice";
import { store } from "../store";

const axios = require("axios");

const ETHSCAN_APIKEY = process.env.REACT_APP_ETHSCAN_APIKEY;
const MORALIS_APIKEY = process.env.REACT_APP_MORALIS_APIKEY;

const BASE_ETHSCAN_URL = "https://api.etherscan.io/api";
const BASE_MORALIS_URL = "https://deep-index.moralis.io/api/v2";

export const getEthPrice = async () => {
  const res = await axios.get(BASE_ETHSCAN_URL, {
    params: {
      module: "stats",
      action: "ethprice",
      apikey: ETHSCAN_APIKEY,
    },
  });
  if (res.data.status == "1") {
    console.log(res.data.result);

    store.dispatch(
      updateState({
        key: "ethPrice",
        value: res.data.result.ethusd,
      })
    );
  }
};
