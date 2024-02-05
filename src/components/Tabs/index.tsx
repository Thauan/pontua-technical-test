import { ReactNode, useState } from "react";
import { Container, Tab } from "./styles";

export interface ITabs {
  tabs: ITab[]
}

export interface ITab {
  id: string;
  title: string;
  component: ReactNode;
}

const Tabs = ({ tabs }: ITabs) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTab = (tab: ITab) => {
    setActiveTab(tab.id);
  };

  return (
    <Container>
      <ul className="nav">
        {tabs.map((tab: ITab) => (
          <Tab
            active={activeTab === tab.id}
            onClick={() => handleTab(tab)}
          >
            {tab.title}
          </Tab>
        ))}
      </ul>
      <div className="outlet">
        {tabs.filter((tab) => activeTab === tab.id).map((item) => item.component)}
      </div>
    </Container>
  );
};
export { Tabs };