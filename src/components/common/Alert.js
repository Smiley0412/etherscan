import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "../../services/FilterSlice";

export default function Alert() {
  const message = useSelector((state) => state.filter.errorMessage);
  const dispatch = useDispatch();
  const removeMessage = () => {
    dispatch(setErrorMessage(null));
  };
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        removeMessage();
      }, 3000);
    }
  }, [message]);
  return (
    <>
      {message && (
        <div
          className="fixed right-14 top-14 bg-yellow-200 rounded-lg py-3 px-10 text-lg cursor-pointer text-yellow-900 text-center"
          onClick={() => removeMessage()}
        >
          {message}
        </div>
      )}
    </>
  );
}
