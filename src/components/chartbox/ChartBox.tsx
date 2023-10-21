import { Link } from "react-router-dom";
import "./chartbox.scss";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  number: string | number;
  dataKey: string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartbox">
      <div className="chartboxleft">
        <div className="left-top">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartboxright">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                position={{ x: 5, y: 30 }}
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-details">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "green" }}
          >
            {props.percentage}%
          </span>
          <span className="timeline">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
