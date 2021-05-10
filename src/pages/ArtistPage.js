import React from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Artist from '../components/Artist'
import SpotifyFetch from '../services/SpotifyFetch'

class ArtistPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artistInfors: null
        }
    }

    componentDidMount(){
        SpotifyFetch.getArtistInfors(this.props.match.params.id).then(data => this.setState({artistInfors: data}))
    }

	render(){
		return (
		    <div>
                <Header/>
				<Breadcrumb/>
                <div className="row">
                    <div className="card">
                        {this.state.artistInfors ? <Artist infors={this.state.artistInfors}/> : null}
                    </div>
                </div>
            </div>
		);
	}
}


export default ArtistPage;