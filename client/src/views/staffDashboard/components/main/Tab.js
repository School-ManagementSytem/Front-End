import React from 'react';
import styled from 'styled-components';

const TabWrap = styled.div`
  width: 100%;
  height: 60px;
  // border: 1px solid black;
  // border-bottom: 1px solid transparent;
  line-height: 60px;
  vertical-alignment: center; 
  color: white;
  margin: 0 0 30px 0;
`

function Tab({ tab, navigation, setNavigation, tabColor, setTabColor, selected, setSelected }) {
 
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