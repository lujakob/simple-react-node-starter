import React from 'react'
import { LineChart, Line, Tooltip, Legend, XAxis, YAxis } from 'recharts';

export default (props) => {

  const {data} = props

  if (!data) {
    return (<p>No data</p>)
  }

  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
      <Tooltip/>
      <Legend />
      <XAxis dataKey="year"/>
      <YAxis/>
    </LineChart>
  )
}