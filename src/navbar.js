import React from "react";
import "./dashStyle.css";

export default function Navbar() {
  return (
    <div>
      <h1 className="main-heading">SQL Server informations</h1>
      <table className="nav-table">
        <tr className="nav-table-head">
          <th>CollectDateUTC</th>
          <th>Hostname</th>
          <th>NetworkName</th>
          <th>IsClustered</th>
          <th>HadrEnabled</th>
          <th>ClusterName</th>
          <th>ClusterNodes</th>
          <th>Edition</th>
          <th>Version</th>
          <th>ProductLevel</th>
          <th>UpdateLevel</th>
          <th>StartTime</th>
          <th>LastUpgrade</th>
          <th>Collation</th>
          <th>SqlServiceAccount</th>
          <th>SqlAgentAccount</th>
          <th>TcpPort</th>
          <th>TcpDynamicPort</th>
          <th>CpuSockets</th>
          <th>CoresPerSocket</th>
          <th>PhysicalCore</th>
        </tr>
        <tr className="nav-table-body">
          <td className="time">2020-11-18 07:56:43</td>
          <td>SQLDBHVNTT001</td>
          <td>SQLDBHVNTT001\I...</td>
          <td>NO</td>
          <td>YES</td>
          <td>SQLCRHVNTT001</td>
          <td>SQLDBHVNTT001;SQ...</td>
          <td>Developer Edtion (6...</td>
          <td>14.0.3257.3</td>
          <td>RTM</td>
          <td>CU18</td>
          <td className="time">2020-11-18 07:56:43</td>
          <td className="time">2020-11-18 07:56:43</td>
          <td>SQL_Latin1_General...</td>
          <td>BEE\SU_SQLDBHVNTT001</td>
          <td>BEE\SU_SQLDBHVNTT...</td>
          <td>14331</td>
          <td>null</td>
          <td>1</td>
          <td>8</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
}
