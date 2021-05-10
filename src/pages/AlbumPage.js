import React from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Album from '../components/Album'
import SpotifyFetch from '../services/SpotifyFetch'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            album: null,
            tracks: []
        }
    }
    componentDidMount(){
        SpotifyFetch.getAlbumTracks(this.props.match.params.id).then(data => this.setState({tracks: data.items}))
        SpotifyFetch.getAlbum(this.props.match.params.id).then(data => this.setState({album: data}))
    }

	render(){
        const {album, tracks} = this.state
		return (
		    <div>
                <Header/>
				<Breadcrumb/>
                <div className="row">
                    <div className="card">
                        {tracks.length > 0 && album ? <Album tracks={tracks} album={album}/> : null}
                    </div>
                </div>
            </div>
		);
	}
}


export default HomePage;