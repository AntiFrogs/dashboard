import "./analyticsChart.css"
import { ResponsiveContainer , LineChart , Line , XAxis , YAxis , Legend , Tooltip , CartesianGrid} from "recharts";


export default function AnalyticsChart({ title , AnalyticsData , chartType = "linear" , dataKey , }) {
    return (
        <div className="analytics-cxhart-bo" >
            <p>{title}</p>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%" >
                    <LineChart data={AnalyticsData} margin={{top: 10 , right: 30 , left: 30 , bottom: 10}} >
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey={"month"} interval="preserveStartEnd" />
                        <Line type={chartType} dataKey={dataKey} stroke="#5682B1" strokeWidth={2} />
                        <Tooltip />
                        <Legend align="right" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}