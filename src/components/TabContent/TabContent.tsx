import React from 'react'
import { Tab } from '../../views/MainView'
import SearchBar from '../SearchBar/SearchBar'
import './TabContent.scss'
interface TabContentProps {
  activeTab: Tab,
  searchHandler: (value:string) => void
}

const TabContent:React.FC<TabContentProps> = ({activeTab, searchHandler}) => {
  return (
    <div className='tab-content-container'>
      <SearchBar placeholder={activeTab.searchPlaceholder} handleSearch={searchHandler}/>
      <div className="tab-content">
        {activeTab.component}
      </div>
    </div>
  )
}

export default TabContent