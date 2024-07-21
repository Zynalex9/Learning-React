//Creating a custom hook
import { useEffect, useState } from "react";
function useCurrencyInfo(currency) {
  const [data, setData] = useEffect({});
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((response) => response.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}
export default useCurrencyInfo;
