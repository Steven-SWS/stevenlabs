import React, { useState } from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'


import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';



const Topnav = () => {

  const AIMSPageMenus = [
    { to: '/createRecipe', name: 'Create Recipe' },
    { to: '/recipeVerification', name: 'Recipe Verification' },
    { to: '/', name: 'Recipe Management' },
    { to: '/customers', name: 'Process History' },
  ]
  const VMPageMenus = [
    { to: '/vm/dashboard', name: 'Dashboard' },
    { to: '/vm/dataMigration', name: 'Data Migration' },
    { to: '/vm/createModel', name: 'Create Model' },
    { to: '/vm/modelManagement', name: 'Model Management' },
    { to: '/vm/prediction', name: 'Prediction' },

  ]
  const CAPageMenus = [
    { to: '/ca/dashboardCA', name: 'Dashboard' },
    { to: '/ca/responseAnomaly', name: 'Response Anomaly' },
    { to: '/ca/sourceAnomaly', name: 'Source Anomaly' },
    { to: '/ca/metrologyAnomaly', name: 'Metrology Anomaly' },
    { to: '/ca/historyAnomaly', name: 'History Anomaly' },
  ]

  const [selectedPage, setSelectedPage] = useState()
  const [selectedMenu, setSelectedMenu] = useState(AIMSPageMenus)
  const [selectedMenuName, setSelectedMenuName] = useState("AIMS")

  const appMenus = (
    <Menu>
      <Menu.Item onClick={(e) => selectMenu('AIMS')} key="aims" >
        AIMS
      </Menu.Item>
      <Menu.Item onClick={(e) => selectMenu('VM')} key="vm">
        VM
      </Menu.Item>
      <Menu.Item onClick={(e) => selectMenu('CA')} key="ca">
        CA
      </Menu.Item>
    </Menu>
  );

  const selectMenu = (menu) => {
    setSelectedMenuName(menu);
    if (menu === "AIMS") {
      setSelectedMenu(AIMSPageMenus);
    } else if (menu === "VM") {
      setSelectedMenu(VMPageMenus);

    } else if (menu === "CA") {
      setSelectedMenu(CAPageMenus);

    }
  }


  const menuTag = (items) => {
    if (items == null) return;
    let newArray = items.map((menu) => {
      return <Link to={menu.to} key={menu.name} className={menu.name === selectedPage ? "top-menu cerapro-medium-viking-15px" : "top-menu cerapro-medium-white-15px"} onClick={(e) => { setSelectedPage(menu.name) }}>{menu.name}</Link>
    });
    return newArray;
  }

  // useEffect(()=>{
  //   debugger
  //   setSelectedMenu(selectedMenu)
  // },[])

  return (
    <div className="nav">
      <div className="vm b_left">
        <div className="icon_filter" ></div>
        {menuTag(selectedMenu)}

      </div>
      <div className="b_right">
        <div className="home">
          <img
            className="icon_apps"
            src="https://anima-uploads.s3.amazonaws.com/projects/624f93c5eca1b3cfb27bea77/releases/624f9419ae9cfc5f3e2583e3/img/icon-apps@2x.svg"
          />
          <div className="text-1 opensans-normal-french-gray-15px">/</div>
          <div className="frame-773" >

            <Dropdown overlay={appMenus} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {selectedMenuName} <DownOutlined />
              </a>
            </Dropdown>,


          </div>
        </div>
        <div className="ellipse-24" ></div>
      </div>
    </div>
  )
}

export default Topnav
