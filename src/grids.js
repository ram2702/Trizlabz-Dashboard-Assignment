import React from "react";
import "./dashStyle.css";
import info from "./info.png";
import GaugeChart from "react-gauge-chart";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Sinchart from "./singlechart";
import Chart from "./cdhart";
import Sinbigchart from "./singlebigchart";
import Bargauge from "./cdbargauge";
const chartStyle = {
  height: 0,
};

export default function Grids() {
  return (
    <section>
      <div className="wrapper-one">
        <div className="prog-one">
          <span className="progtitle">
            <img src={info} alt="information" height={20} />
            <h3 className="proghead">Server CPU Usage %</h3>
          </span>
          <GaugeChart
            colors={["#F25656", "#F6D433", "#22BAA0"]}
            className="progbar"
            style={chartStyle}
            id="gauge-chart1"
          />
        </div>
        <div className="prog-two">
          <h3 className="dash-head">Server Installed Memory</h3>
          <p className="dash-stat">65.5 GB</p>
        </div>
        <div className="prog-three">
          <span className="progtitle">
            <img src={info} alt="information" height={20} />
            <h3 className="dash-head" style={{ "margin-left": "36%" }}>
              PLE
            </h3>
          </span>
          <p className="dash-stat-two">65.5 GB</p>
          <Sparklines data={[5, 10, 5, 20]}>
            <SparklinesLine color="#22baa0" />
          </Sparklines>
        </div>
        <div className="prog-four">
          <span className="progtitle">
            <img src={info} alt="information" height={20} />
            <h3 className="dash-head" style={{ "margin-left": "36%" }}>
              PLE
            </h3>
          </span>
          <p className="dash-stat-two">65.5 GB</p>
          <Sparklines data={[10, 0, 5, 0, 2, 0, 7, 0, 0, 0, 0, 0]}>
            <SparklinesLine color="#22baa0" />
          </Sparklines>
        </div>
        <div className="prog-five">
          <Chart />
        </div>
        <div className="prog-six">
          {" "}
          <span className="progtitle">
            <img src={info} alt="information" height={20} />
            <h3 className="proghead">SQL CPU Usage %</h3>
          </span>
          <GaugeChart
            colors={["#F25656", "#F6D433", "#22BAA0"]}
            className="progbar"
            style={chartStyle}
            id="gauge-chart1"
          />
        </div>
        <div className="prog-seven">
          {" "}
          <span className="progtitle">
            <img src={info} alt="information" height={20} />
            <h3 className="proghead">Server Memory Usage %</h3>
          </span>
          <GaugeChart
            colors={["#F25656", "#F6D433", "#22BAA0"]}
            className="progbar"
            style={chartStyle}
            id="gauge-chart1"
          />
        </div>
        <div className="prog-eight">
          {" "}
          <span className="progtitle">
            <img src={info} alt="information" height={20} />
            <h3 className="proghead">TempDB Free Space %</h3>
          </span>
          <GaugeChart
            colors={["#F25656", "#F6D433", "#22BAA0"]}
            className="progbar"
            style={chartStyle}
            id="gauge-chart1"
          />
        </div>
        <div className="prog-nine">
          {" "}
          <span className="progtitle">
            <img src={info} alt="information" height={20} />
            <h3 className="proghead">Server CPU Usage %</h3>
          </span>
          <GaugeChart
            colors={["#F25656", "#F6D433", "#22BAA0"]}
            className="progbar"
            style={chartStyle}
            id="gauge-chart1"
          />
        </div>
      </div>
      <div className="wrapper-two">
        <div className="nest-one">
          <div className="tab-one">
            <h3 className="dash-head">Top Databases in Buffer Pool</h3>
            <table className="dash-tab">
              <tr className="nav-table-head">
                <th className="col-one">Database</th>
                <th className="col-two">GB</th>
                <th className="col-three">Percent</th>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
            </table>
          </div>
          <div className="tab-two">
            <h3 className="dash-head">Current Wait Stats</h3>
            <table className="dash-tab">
              <tr className="nav-table-head">
                <th className="col-one">Database</th>
                <th className="col-two">GB</th>
                <th className="col-three">Percent</th>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>SIMS</td>
                <td>26</td>
                <td>79%</td>
              </tr>
            </table>
          </div>
          <div className="tab-three">
            <Sinchart />
          </div>
          <div className="tab-four">
            {" "}
            <Sinchart />
          </div>
        </div>
        <div className="nest-two">
          <div className="graph-one">
            {" "}
            <Bargauge />
          </div>
          <div className="graph-two">
            <Sinbigchart />
          </div>
        </div>
      </div>
    </section>
  );
}
