import "./analyticsPieChart.css"
import { PieChart , Pie , Cell , Tooltip , Legend  , ResponsiveContainer} from "recharts";


const data = [
    {status: "Approved" , amount: 15 , color: "#08CB00" },
    {status: "Pending" , amount: 6 , color: "#647FBC" },
    {status: "Declined" , amount: 12 , color: "#DC143C" },
]



export default function AnalyticsPieChart({title , analyticsData , dataKey , nameKey}) {
    return(
        <div className="analytics-pie-chart-box">
            <p>{title}</p>
            <div className="pie-chart-container">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={analyticsData} dataKey={dataKey} nameKey={nameKey} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label >
                            {data.map((value , index) => <Cell key={index} fill={value.color} />)}
                        </Pie>
                        <Tooltip />  
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}