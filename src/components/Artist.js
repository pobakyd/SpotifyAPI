import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import ArtistAlbumList from '../components/ArtistAlbumList'
import SpotifyFetch from '../services/SpotifyFetch'

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChangeBreadcrumb: (to,name) => dispatch(actions.actGoArtist(to, name))
})

const connector = connect(null, mapDispatchToProps)

class Artist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentDidMount(){
        SpotifyFetch.getArtistAlbums(this.props.infors.id).then(data => this.setState({albums: data.items}))
        this.props.handleChangeBreadcrumb(`/artist/${this.props.infors.id}`, this.props.infors.name)
    }

	render(){
        const {infors} = this.props
        const {albums} = this.state
		return (
			<div>
                <div className="card-header bg-info">
                    <h3 className="text-white">Singer: {<strong><i>{infors.name}</i></strong>}</h3>
                </div>
                <div className="card-body bg-dark">
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-thumbnail img-fluid" src={this.getImg(infors.images)} alt={infors.name} />
                            <blockquote className="blockquote">
                                <footer className="blockquote-footer mt-1"><p className="text-info d-inline">{infors.name}</p></footer>
                            </blockquote>
                            <a href={infors.external_urls.spotify} style={{textDecoration:"none"}}>View Spotify</a>
                            <p className="text-warning d-block">
                                Genres: {this.getGenres(infors.genres)}
                            </p>
                        </div>
                        <div className="col-sm-8">
                            {albums.length > 0 ? <ArtistAlbumList albums={albums}/> : null}
                        </div>
                    </div>
                </div>
            </div>
		);
	}

    getImg(images){
        return images.length > 0 ? images[0].url : './images/no-img.jpg'
    }

    getGenres(genres){
        if(genres.length > 0){
            return genres.map((genre,idx) => <span className="badge badge-pill badge-warning mb-2 mr-2" key={"MyKey" + idx}>{genre}</span>)
        }
        else{
            return <span className="badge badge-pill badge-secondary mb-2 mr-2">None</span>
        }
    }
}


export default connector(Artist);
