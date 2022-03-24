import { ReactComponent as Mark } from "../images/etherscan.svg";

export default function Header() {
  return (
    <div className="bg-white">
      <div className="container m-auto flex justify-between">
        <Mark className="w-48 h-auto m-3" />
      </div>
    </div>
  );
}
