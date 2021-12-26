import React from "react";
//https://stackoverflow.com/questions/21205652/how-to-draw-a-circle-sector-in-css

function MacroCircle({
  percentage,
  absolute,
}: {
  percentage: number;
  absolute: number;
}) {
  const color = percentage < 0.5 ? "white" : "blue";
  const degree =
    percentage < 0.5 ? 180 - percentage * 360 : 180 - (percentage - 0.5) * 360;
  const gradient = `-${degree}deg, ${color}`;

  return (
    <div
      className="rounded-full w-[60px] h-[60px] flex justify-center items-center"
      style={{
        backgroundColor: "blue",
        backgroundImage: `linear-gradient(${gradient} 50%, transparent 50%), linear-gradient(180deg, transparent 50%, white 50%)`,
      }}
    >
      <div className="rounded-full  w-[40px] h-[40px] bg-white flex justify-center items-center">
        {absolute}
      </div>
    </div>
  );
}

export default MacroCircle;
