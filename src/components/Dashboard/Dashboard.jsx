import "./Dashboard.css";
import { useState } from "react";

import Row from "./DashBoardComponents/Row/Row";
import SideBar from "./DashBoardComponents/SideBar/SideBar";
import Card from "./DashBoardComponents/Card/Card";
import { LineGraph } from "./DashBoardComponents/Charts/Line";
import BarChart from "./DashBoardComponents/Charts/Bar";
import DoughnutChart from "./DashBoardComponents/Charts/Doughnut";
import PieChart from "./DashBoardComponents/Charts/Pie";
import SCard from "./DashBoardComponents/SCard/SCard";
import PolarAreaChart from "./DashBoardComponents/Charts/PolarArea";
import MenuBars from "./DashBoardComponents/Menubars/MenuBars";

function Dashboard() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="min-h-screen">
        <section className="master">
          {isSidebarVisible && <SideBar />}
          <div className="dashboard">
            <Row>
              <SCard bgColor="#c8acf0" title="Total Users" value="476" />
              <SCard bgColor="#a3f1c0" title="Students" value="290" />
              <SCard bgColor="#eff0a3" title="Alumni" value="186" />
              <SCard
                bgColor="#ccd3dc"
                title="Total Donation"
                value="Rs. 150500"
              />
            </Row>
            <Row>
              <Card title="Active Users Month wise" width="700px">
                <LineGraph />
              </Card>
              <Card title="Field of Education" width="380px">
                <DoughnutChart />
              </Card>
            </Row>
            <Row>
              <Card title="Month wise Amount Donation" width="690px">
                <BarChart />
              </Card>
              <Card title="Jobs Opening Fiels wise" width="350px">
                <PieChart />
              </Card>
            </Row>
            <Row>
              <Card title="Employed Alumni" width="300px">
                <PolarAreaChart />
              </Card>
              <Card title="Passing Year of Alumni" width="450px">
                <BarChart />
              </Card>
              <Card title="Open Jobs" width="300px">
                <DoughnutChart />
              </Card>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
