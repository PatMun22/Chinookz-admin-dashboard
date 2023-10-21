import AreaChartBox from "../../components/areaChart/AreaChartBox";
import BarChartBox from "../../components/barchartbox/BarChartBox";
import ChartBox from "../../components/chartbox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopDealsBox from "../../components/topdealsbox/TopDealsBox";
import {
  barChart1,
  barChart2,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopDealsBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <AreaChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChart1} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChart2} />
      </div>
    </div>
  );
}

export default Home;
