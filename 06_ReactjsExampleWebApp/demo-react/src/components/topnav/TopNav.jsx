import React, { useState, useEffect } from 'react'

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
    { to: '/', name: 'vm Create Recipe' },
    { to: '/customers', name: 'vm Recipe Verification' },
    { to: '/', name: 'vm Recipe Management' },
    { to: '/customers', name: 'vm Process History' },
  ]
  const CAPageMenus = [
    { to: '/', name: 'ca Create Recipe' },
    { to: '/customers', name: 'ca Recipe Verification' },
    { to: '/', name: 'ca Recipe Management' },
    { to: '/customers', name: 'ca Process History' },
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
    <div class="nav">
      <div class="vm b_left">
        <div class="icon_filter" onClick=""></div>
        {menuTag(selectedMenu)}

      </div>
      <div class="b_right">
        <div class="home">
          <img
            class="icon_apps"
            onClick=""
            src="https://anima-uploads.s3.amazonaws.com/projects/624f93c5eca1b3cfb27bea77/releases/624f9419ae9cfc5f3e2583e3/img/icon-apps@2x.svg"
          />
          <div class="text-1 opensans-normal-french-gray-15px">/</div>
          <div class="frame-773" onclick="">

            <Dropdown overlay={appMenus} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {selectedMenuName} <DownOutlined />
              </a>
            </Dropdown>,


          </div>
        </div>
        <div class="ellipse-24" onClick=""></div>
      </div>
    </div>
  )
}

export default Topnav
