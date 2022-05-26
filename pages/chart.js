import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Read', 'Writing', 'Playing Football', 'Singing', 'Jogging', 'Working Out', 'Playing Basketball'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 20, 80, 81, 20, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      borderWidth: 1,
    },
  ],
}

const Chart = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-6 font-main">
        <div className="flex items-center justify-center font-bold text-stone-800 text-2xl pb-8">
          This is <span className="text-emerald-900 ml-2">CHARTPAGE!</span>
        </div>
          <h2 className="text-center text-sm">{`This is chart of student's hobbies`}</h2>
        <div className="my-4">
          <Pie 
            data={data} 
            width={500}
            height={500}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    </>
  )
}

export default Chart