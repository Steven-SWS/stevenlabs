import React, { useState } from 'react'
import './RecipeVerification.scss'

import RecipeVerificationResult from './RecipeVerificationResult'
import RecipeVerificationFilter from './RecipeVerificationFilter'
import RecipeVerificationTab from './RecipeVerificationTab'


const RecipeVerification = () => {
    const [showFilter, setShowFilter] = useState(true);

    function onShowResult() {
        setShowFilter(false);
    }
    function onClickTab(e) {
        if (e === 'filter') {
            setShowFilter(true);
        } else {
            setShowFilter(false);
        }
    }

    return (
        <div className="container flex-row">
            <div className="search-filter">
                <RecipeVerificationTab showFilter={onShowResult} clickTab={onClickTab}></RecipeVerificationTab>
            </div>
            <div className="content_wrap">
                {showFilter ? <RecipeVerificationFilter showResult={onShowResult} ></RecipeVerificationFilter> :
                    <RecipeVerificationResult></RecipeVerificationResult>
                }
            </div>
        </div>
    )
}

export default RecipeVerification
