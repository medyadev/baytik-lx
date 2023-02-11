import React, { useState } from "react";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavItem";
import "./style.css";
import FristTab from "./FristTab";
import SecondTab from "./SecondTabs";
import ThirdTab from "./ThirdTab";

export default function Objects() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div id="object" className="container">
      <h1 className=" object-redux text-center text-[56px] font-[200] text-[ #343232]">Планировки</h1>
      <div className="Tabs">
        <ul  className="nav">
          <TabNavItem
            title='250'
            id="tab1"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="300"
            id="tab2"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title="350"
            id="tab3"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <hr/>

        <div className="outlet">
          <TabContent id="tab1" activeTab={activeTab}>
            <FristTab />
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <SecondTab />
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <ThirdTab />
          </TabContent>

        </div>
      </div>
    </div>
  );
}
