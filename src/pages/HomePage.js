import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Search from '../components/Search'
import SearchResultList from '../components/SearchResultList'

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChangeBreadcrumb: () => dispatch(actions.actGoHome())
})

const connector = connect(null, mapDispatchToProps)

class HomePage extends React.Component {
    componentDidMount(){
        this.props.handleChangeBreadcrumb()
    }
    
	render(){
		return (
		    <div>
                <Header/>
				<Breadcrumb/>
                <div className="row">
                    <div className="card">
                        <Search/>
                        <SearchResultList/>
                    </div>
                </div>
            </div>
		);
	}
}


export default connector(HomePage);