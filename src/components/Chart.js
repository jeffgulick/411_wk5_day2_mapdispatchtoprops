import React from 'react'
import PieChart from 'react-minimal-pie-chart';

const Chart = (props) => {
    const over = props.cars.filter(cars => cars.horsepower >=200).length;
    const under = props.cars.filter(cars => cars.horsepower < 200).length;

    return (
        <div>
            <PieChart style={{ width: '200px' }}
                data={[
                    { title: 'Over', value: over, color: '#C13C37' },
                    { title: 'Under', value: under, color: '#E38627' },
                ]}
                label
                labelStyle={{
                    fill: 'white',
                    fontSize: 'small'
                }}
            />
            <Legend />
        </div>
    )
}

function Legend() {
    return (
        <h6>Horsepower: &nbsp;
            <span style={{background: '#C13C37'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Over 200</span>
            &nbsp;
            <span style={{background: '#E38627'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Under 200</span>
        </h6>
    )
}

export default Chart