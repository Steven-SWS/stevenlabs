import React from 'react'

import './layoutGauss.css'

import TopNav from '../topnav/TopNav'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'

const LayoutGauss = () => {


    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div >
                    <div className="layout__content">
                        <TopNav  />
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default LayoutGauss
