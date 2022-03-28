import React from "react";
import { useSelector } from "react-redux";

export default function Loading() {
  const loading = useSelector((state) => state.filter.loading);
  return (
    <>
      {loading && (
        <div className="fixed w-full h-full bg-slate-500 opacity-50 z-10">
          <img
            className="fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            src="/loading.gif"
            alt="loading..."
          />
        </div>
      )}
    </>
  );
}
