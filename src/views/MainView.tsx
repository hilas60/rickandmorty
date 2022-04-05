import React, { useCallback, useEffect, useState } from 'react'
import BrowseTab from '../components/TabContent/BrowseTab/BrowseTab'
import CharacterTab from '../components/TabContent/CharacterTab/CharacterTab'
import TabContent from '../components/TabContent/TabContent'
import TabsNav from '../components/TabsNav/TabsNav'
import { Character } from './character.type'
import { fetchData } from './MainView.data.handler'
import './MainView.scss'

export interface Tab {
    label: string,
    component: JSX.Element,
    searchPlaceholder: string
}

const MainView:React.FC = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [charactersList, setCharactersList] = useState<Character[]>([]) // Should be on global state management to prevent props drilldown
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    
    useEffect(() => {
        if (activeTab === 0) {
            setSelectedCharacter(null)
        }
    }, [activeTab])
    
    const tabsList = [
        { label: 'browse', searchPlaceholder: 'Browse for characters...', component: <BrowseTab data={charactersList}/>}, 
        { label: 'pick a charcter', searchPlaceholder: 'Search for character I.d', component: <CharacterTab data={selectedCharacter}/>}
    ]

    const handleChangeTab = (tab: number) => { 
        setActiveTab(tab)
    }
    
    const getData = async (query = '', queryKey = '') => {
        const data = await fetchData(query, queryKey)
        if (activeTab === 0 ) {
            setCharactersList(data?.results || [])
        } else if (activeTab === 1 ) {
            setSelectedCharacter(data)
        }
    }

    const getFilteredData = useCallback(
        (value: string) => {
            const key = activeTab === 0 ? 'name' : 'id';
            getData(value, key)
        }, [activeTab])
    

    return (
        <div className='tabs-container'>
            <TabsNav tabsList={tabsList} active={activeTab} handleChangeTab={handleChangeTab}/>
            <TabContent activeTab={tabsList[activeTab]} searchHandler={getFilteredData} />
        </div>
    )
}

export default MainView