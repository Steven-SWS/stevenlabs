import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import RecipeVerification from '../pages/recipeVerification/RecipeVerification'
import CreateRecipe from '../pages/createRecipe/CreateRecipe'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' exact component={Dashboard} />
            <Route path='/customers' component={Customers} />
            <Route path='/recipeVerification' component={RecipeVerification} />
            <Route path='/createRecipe' component={CreateRecipe} />
        </Routes>
    )
}

export default Routers
