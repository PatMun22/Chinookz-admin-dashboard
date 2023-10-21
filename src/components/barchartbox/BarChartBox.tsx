import "./barchartbox.scss";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";

type Props = {
  title: string;
  chartData: object[];
  dataKey: string;
  color: string;
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barchartbox">
      <h1>{props.title}</h1>
      <div className="barchart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#2a3447",
                padding: "5px",
                borderRadius: "5px",
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
