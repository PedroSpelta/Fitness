import React, { ReactChild } from "react";

function DailyDashboardCard({
  children,
  cols,
}: {
  children?: Array<ReactChild> | ReactChild;
  cols: number;
}) {
  return (
    <div
      className={`w-[80%] col-span-2 md:w-full m-auto rounded-md h-40 bg-white shadow-md p-5 gridColumn${cols}`}
    >
      {children}
    </div>
  );
}

export default DailyDashboardCard;
