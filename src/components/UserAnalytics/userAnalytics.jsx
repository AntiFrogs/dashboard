import "./userAnalytics.css"
import { ResponsiveContainer , LineChart , Line , XAxis , YAxis , Legend , Tooltip , CartesianGrid} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 200 },
  { month: "Mar", users: 300 },
  { month: "Apr", users: 500 },
  { month: "May", users: 700 },
  { month: "Jun", users: 500 },
  { month: "Jul", users: 600 },
  { month: "Agu", users: 300 },
  { month: "Sep", users: 200 },
  { month: "Oct", users: 150 },
  { month: "Nov", users: 200 },
  { month: "Dec", users: 250 },
];


export default function UserAnalytics() {
    return (
        <div className="user-analytics-box" >
            <p>User Analytics</p>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%" >
                    <LineChart data={data} margin={{top: 10 , right: 30 , left: 30 , bottom: 10}} >
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey={"month"} interval="preserveStartEnd" />
                        <Line type="monotone" dataKey="users" stroke="#5682B1" strokeWidth={2} />
                        <Tooltip />
                        <Legend align="right" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}