export const formatNumber = (x) => {
  return Number(x)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatTokenTransactions = (txs) => {
  let temp = txs;
  temp.total = txs.result.length;
  temp.page = 0;
  temp.page_size = null;
  let result = txs.result.map((tx) => {
    let r = {};
    r.hash = tx?.hash || tx?.transaction_hash;
    r.contractAddress = tx?.address || tx?.contractAddress;
    r.from_address = tx?.from || tx?.from_address;
    r.to_address = tx?.to || tx?.to_address;
    r.block_timestamp = tx?.block_timestamp || tx?.timeStamp;
    r.block_hash = tx?.block_hash || tx?.blockHash;
    r.value = tx?.value;
    r.block_number = tx?.block_number || tx?.blockNumber;
    return r;
  });
  temp.result = result;
  return temp;
};
