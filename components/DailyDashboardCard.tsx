import React, { ReactChild } from 'react'

function DailyDashboardCard({children} : {children?: Array<ReactChild> | ReactChild}) {
  return (
    <div className='col-span-1 w-[80%] md:w-full m-auto rounded-md h-40 bg-white shadow p-5'>
      {children}
    </div>
  )
}

export default DailyDashboardCard
