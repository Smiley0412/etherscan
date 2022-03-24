export default function OverviewCard() {
  return (
    <div className="flex bg-transparent mt-5">
      <div className="container lg:flex m-auto lg:space-x-5">
        <div className="w-full my-8 p-3 bg-white rounded">
          <h1 className="text-left font-bold p-3">Overview</h1>
          <div className="bg-slate-200 h-px -mx-3"></div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Balance :</h3>
            <p className="text-left p-2 bg-slate-300"> 3.141592 eth</p>
          </div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Value :</h3>
            <p className="text-left p-2 bg-slate-300">
              $9417.92 <span className="text-xs">(@ $2994.30/ETH)</span>
            </p>
          </div>
          <div className="flex">
            <h3 className="w-32 text-left p-2">Tokens :</h3>
            <p className="text-left p-2 bg-slate-300"> 100 eth</p>
          </div>
        </div>
        <div className="w-full my-8 p-3 bg-white rounded">
          <h1 className="text-left font-bold p-3">Balance History</h1>
          <div className="bg-slate-200 h-px -mx-3"></div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Date :</h3>
            <p className="text-left p-2 bg-slate-300"> select</p>
          </div>
          <div className="flex border-b">
            <h3 className="w-32 text-left p-2">Balance :</h3>
            <p className="text-left p-2 bg-slate-300"> 3.141592 eth</p>
          </div>
          <div className="flex">
            <h3 className="w-32 text-left p-2">Value :</h3>
            <p className="text-left p-2 bg-slate-300">
              $9417.92 <span className="text-xs">(@ $2994.30/ETH)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
