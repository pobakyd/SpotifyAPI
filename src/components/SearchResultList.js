import React from 'react'
import {connect} from 'react-redux'
import SearchResultItem from '../components/SearchResultItem'
import SpotifyFetch from '../services/SpotifyFetch'

const mapStateToProps = (state) => ({
    query: state.query
})


const connector = connect(mapStateToProps)

class SearchResultList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artists : []
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.query !== this.props.query){
            this.searchArtists(this.props.query)
        }
    }

    componentDidMount(){
        this.searchArtists(this.props.query)
    }

	render(){
		return (
			<div className="card-body bg-dark">
                <div className="row">
                    {this.state.artists.map((artist,index) => <SearchResultItem item={artist} key={"MyKey" + index}/>)}
                </div>
            </div>
		);
	}

    searchArtists(query){
        if(query){
            SpotifyFetch.getArtists(this.props.query)
                .then(data => {
                    this.setState({artists: data.artists.items})
                })
        }
        else{
            this.setState({artists: []})
        }
    }
}


export default connector(SearchResultList);
