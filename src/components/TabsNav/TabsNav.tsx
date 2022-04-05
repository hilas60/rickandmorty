import React from 'react';
import { Tab } from '../../views/MainView';
import './TabsNav.scss';

interface TabsNavProps {
    tabsList: Tab[],
    active?: number,
    handleChangeTab: Function
};

const TabsNav:React.FC<TabsNavProps> = ({tabsList, active, handleChangeTab}) => {

  return (
    <div className='tabs-nav-container'>
        {tabsList.map((tab, idx) => 
            <div className={`tab-nav-item ${active === idx? 'active':''}` } onClick={() => handleChangeTab(idx)} key={`tab-${idx}`}>{tab.label}</div>    
        )}
    </div>
  )
};

export default TabsNav