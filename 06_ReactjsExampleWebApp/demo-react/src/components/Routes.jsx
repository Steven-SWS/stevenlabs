import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import RecipeVerification from '../pages/recipeVerification/RecipeVerification'
import CreateRecipe from '../pages/createRecipe/CreateRecipe'
import responseAnomaly from '../pages/ca/responseAnomaly/responseAnomaly';
import dashboardCA from '../pages/ca/dashboardCA/dashboardCA';
import sourceAnomaly from '../pages/ca/sourceAnomaly/sourceAnomaly';
import metrologyAnomaly from '../pages/ca/metrologyAnomaly/metrologyAnomaly';
import historyAnomaly from '../pages/ca/historyAnomaly/historyAnomaly';
import prediction from '../pages/vm/prediction/prediction';
import dashboard from '../pages/vm/dashboard/dashboard';
import dataMigration from '../pages/vm/dataMigration/dataMigration';
import modelManagement from '../pages/vm/modelManagement/modelManagement';
import createModel from '../pages/vm/createModel/createModel'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/customers' component={Customers} />
            <Route path='/recipeVerification' component={RecipeVerification} />
            <Route path='/createRecipe' component={CreateRecipe} />
            <Route path='/ca/dashboardCA' component={dashboardCA} />
            <Route path='/ca/responseAnomaly' component={responseAnomaly} />            
            <Route path='/ca/sourceAnomaly' component={sourceAnomaly} />            
            <Route path='/ca/metrologyAnomaly' component={metrologyAnomaly} />
            <Route path='/ca/historyAnomaly' component={historyAnomaly} />
            <Route path='/vm/dashboard' component={dashboard} />
            <Route path='/vm/dataMigration' component={dataMigration} />
            <Route path='/vm/createModel' component={createModel} />
            <Route path='/vm/modelManagement' component={modelManagement} />
            <Route path='/vm/prediction' component={prediction} />
        </Switch>
    )
}

export default Routes
