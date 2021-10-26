import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    return (
        <div className='chart'>
            {props.dataPoints.map((point) => (
                <ChartBar
                    value={point.value}
                    maxValue={null}
                    label={point.label}
                />
            )
            )}

        </div>
    )
}

export default Chart