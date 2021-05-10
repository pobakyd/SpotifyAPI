import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

const mapStatetoProps = (state) => ({
    query: state.query
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSearch: (keyword) => dispatch(actions.actSearch(keyword))
})

const connector = connect(mapStatetoProps, mapDispatchToProps)

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            query: this.props.query
        }
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    onFormSubmit = (e) => {
        console.log('s')
        e.preventDefault()
        this.props.handleSearch(this.state.query)
    }

    handleClear = () => {
        this.setState({
            query: ''
        })
        this.props.handleSearch('')
    }

	render(){
		return (
			<div className="card-header bg-info">
                <form className="form-inline" method="get" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <input id="artist-name" className="form-control mr-4" type="text" name="artist-name" placeholder="Enter artist name ..." value={this.state.query} onChange={this.handleChange} />
                        <button className="btn btn-primary mr-4" type="submit" >Search</button>
                        <button className="btn btn-danger" type="button" onClick={this.handleClear}>Clear</button>
                    </div>
                </form>
            </div>
		);
	}
}


export default connector(Search);

