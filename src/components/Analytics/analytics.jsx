import "./analytics.css"
import AnalyticsChart from "../UserAnalytics/analyticsChart.jsx";
import AnalyticsPieChart from "../AnalyticsPieChart/analyticsPieChart.jsx";

export default function Analytics({userAnalyticsData , salesAnalyticsData , transactionStatusAnalyticsData}) {
    return (
        <div className="analytics-container">
            <AnalyticsChart title="Users Analytics" AnalyticsData={userAnalyticsData} chartType="monotone" dataKey="users" />
            <AnalyticsChart title="Sales Analytics" AnalyticsData={salesAnalyticsData} dataKey="sales" />
            <AnalyticsPieChart title="Transaction status"  analyticsData={transactionStatusAnalyticsData} dataKey="amount" nameKey="status" />
        </div>
    );
}