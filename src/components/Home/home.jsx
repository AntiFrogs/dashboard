import "./home.css"
import StatCard from "../StatCard/statCard.jsx";

export default function Home() {
    return (
        <div className="home">
            <div className="home-main-stats">
                <StatCard title="Revanue" stats={{money: "2,415" , percent: -11.4}} compareTo={"last month"} />
                <StatCard title="Sales" stats={{money: "4,415" , percent: -1.4}} compareTo={"last month"} />
                <StatCard title="Cost" stats={{money: "2,225" , percent: 3.7}} compareTo={"last month"} />
            </div>
        </div>
    );
}