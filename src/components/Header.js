import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Mark } from "../images/etherscan.svg";
import { getEthPrice } from "../services/ApiService";
import { formatNumber } from "../services/CommonService";

export default function Header() {
  const ethPrice = useSelector((state) => state.filter.ethPrice);

  useEffect(() => {
    getEthPrice();
    updateEthPrice();
  }, []);
  const updateEthPrice = () => {
    getEthPrice();
    setTimeout(() => {
      updateEthPrice();
    }, 5000);
  };
  return (
    <div className="bg-white">
      <div className="container m-auto flex justify-between items-center">
        <Mark className="w-48 h-auto m-3" />
        <p className="text-xl">Eth: ${formatNumber(ethPrice)}</p>
      </div>
    </div>
  );
}
