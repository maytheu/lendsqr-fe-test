import React from "react";
import CountUp from "react-countup";

const AnimateCurrency = ({ balance }: { balance: number }) => {
  return (
    <CountUp
      end={balance}
      separator=","
      decimal="."
      decimals={2}
      prefix="&#x20A6;"
    />
  );
};

export default AnimateCurrency;
