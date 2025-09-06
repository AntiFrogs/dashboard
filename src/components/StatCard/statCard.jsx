import "./statCard.css"
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function StatCard({title , stats , compareTo}) {
    return(
        <div className="stat-card">
            <p>{title}</p>
            <div className="stats">
                <span>${stats.money}</span>
                <span>{stats.percent > 0 ? "+" + stats.percent : stats.percent}%</span>
                {stats.percent > 0 ?
                    <FaArrowUp color="#5CB338" />
                :
                    <FaArrowDown color="#E62727" />
                }
            </div>
            <p>compared to {compareTo}</p>
        </div>
    );
}