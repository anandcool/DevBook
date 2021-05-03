import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'


const PrivateRoute = ({component:Component,auth:{isAuthenticated,loading},...rest}) => {
    return (
        <Route {...rest} render={props => !isAuthenticated && !loading ?(<Redirect to="/login"/>):(<Component {...props}/>)}/>
    )
}

PrivateRoute.propTypes = {
 auth:PropTypes.object.isRequired
}

const mapStateToProp = state =>({
    auth:state.auth
})

export default connect(mapStateToProp)(PrivateRoute)
