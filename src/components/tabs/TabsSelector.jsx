import React, { useState } from "react";

const TabsSelector = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-1 w-full mb-6">
        {props.tabsData.map((tab, index) => (
          <button
            key={index}
            className={`w-full rounded text-lg px-6 py-3 
              ${activeTab === index ? "bg-accent-700 text-white" : "bg-transparent text-gray-700 border-b-2 border-accent-700"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full">
        {activeTab === 0 && props.tab1}
        {activeTab === 1 && props.tab2}
      </div>
    </div>
  );
};

export default TabsSelector;
