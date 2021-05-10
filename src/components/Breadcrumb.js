import React from 'react'
import{Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    breadcrumb: state.breadcrumb
})

const connector = connect(mapStateToProps)

const MenuCustomLink = ({label, to, activeOnlyWhenExact = true}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
        if(match){
            return (
                <li className="breadcrumb-item active">
                    {label}
                </li>)
        }
        return (
            <li className="breadcrumb-item">
                <Link to={to} exact={`${activeOnlyWhenExact}`} style={{textDecoration:"none"}}>
                    {label}
                </Link>
            </li>)
        }
    }/>
)

class Breadcrumb extends React.Component {
	render(){
        const {breadcrumb} = this.props
		return (
			<nav aria-label="Page breadcrumb">
                <ol className="breadcrumb">
                    {breadcrumb.map((menu,idx) => <MenuCustomLink label={menu.name} to={menu.to} key={"MyKey" + idx}/>)}
                </ol>
            </nav>
		);
	}
}


export default connector(Breadcrumb);
