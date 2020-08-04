import React from 'react';
import { TabWrap } from '../mainStyle/styledComponent.js';


function Tab({ tab, setNavigation, selected, setSelected }) {

  const handleClick = (tab) => {
    setSelected(tab.toLowerCase())
    setNavigation(tab.toLowerCase())
  }
  return (
    <div style={{cursor: "pointer"}} onClick={() => handleClick(tab.key)}>
    <TabWrap style={{backgroundColor: `${tab.key.toLowerCase() === selected ? "#DD3B58" : "transparent"}`}}>
      {tab.key}
    </TabWrap>
    </div>
  )
}


export default Tab;