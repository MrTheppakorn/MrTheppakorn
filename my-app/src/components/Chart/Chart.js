import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {dataPoints.map((point) => (
                <ChartBar
                    key={dataPoints.label}
                    value={point.value}
                    maxValue={totalMaximum}
                    label={point.label}
                />
            )
            )}

        </div>
    )
}

export default Chart
