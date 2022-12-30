import React, { PureComponent } from "react";
import { YAxis, ResponsiveContainer, Bar, BarChart } from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 8400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 8398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 8908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 8800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 8800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 8300,
        amt: 2100,
    },
];

const DataFormater = (number: number) => {
    if (number > 1000) {
        return (number / 1000).toString() + "K";
    } else {
        return number.toString();
    }
};

export default class Chart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart barCategoryGap={'0'} data={data}>
                    <YAxis
                        stroke="transparent"
                        tick={{ fill: "#a2b0fb" }}
                        color="#a2b0fb"
                        tickFormatter={DataFormater}
                    />
                    <Bar dataKey="pv"/>
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
