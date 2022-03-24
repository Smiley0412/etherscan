import Select from "./common/Select";

export default function OverviewCard() {
  const items = [
    { id: 1, value: "Wade Cooper" },
    { id: 2, value: "Arlene Mccoy" },
    { id: 3, value: "Devon Webb" },
    { id: 4, value: "Tom Cook" },
    { id: 5, value: "Tanya Fox" },
    { id: 6, value: "Hellen Schmidt" },
  ];

  const today = () => {
    let t = new Date();
    let year = t.getFullYear();
    let month = t.getMonth() < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1;
    let date = t.getDate() < 10 ? "0" + t.getDate() : t.getDate();
    return year + "-" + month + "-" + date;
  };

  return (
    <div className="flex bg-transparent mt-5">
      <div className="container lg:flex m-auto lg:space-x-5">
        <div className="w-full my-8 p-3 bg-white rounded">
          <h1 className="text-left font-bold p-3">Overview</h1>
          <div className="bg-slate-200 h-px -mx-3"></div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Balance :</h3>
            <p className="text-left p-2"> 3.141592 eth</p>
          </div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Value :</h3>
            <p className="text-left p-2">
              $9417.92 <span className="text-xs">(@ $2994.30/ETH)</span>
            </p>
          </div>
          <div className="flex">
            <h3 className="w-32 text-left p-2">Tokens :</h3>
            <Select items={items} />
          </div>
        </div>
        <div className="w-full my-8 p-3 bg-white rounded">
          <h1 className="text-left font-bold p-3">Balance History</h1>
          <div className="bg-slate-200 h-px -mx-3"></div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Date :</h3>
            <input
              type="date"
              className="w-rest-32 border-none cursor-pointer focus-visible:outline-slate-200 leading-5 text-gray-900 my-1 shadow-sm px-2"
              defaultValue={today()}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Balance :</h3>
            <p className="text-left p-2"> 3.141592 eth</p>
          </div>
          <div className="flex">
            <h3 className="w-32 text-left p-2">Value :</h3>
            <p className="text-left p-2">
              $9417.92 <span className="text-xs">(@ $2994.30/ETH)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
