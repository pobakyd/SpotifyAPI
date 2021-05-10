import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import AlbumItem from '../components/AlbumItem'

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChangeBreadcrumb: (to,name) => dispatch(actions.actGoAlbum(to, name))
})

const connector = connect(null, mapDispatchToProps)

class SearchResultList extends React.Component {
    componentDidMount(){
        this.props.handleChangeBreadcrumb(`/album/${this.props.album.id}`, this.props.album.name)
    }
    
	render(){
        const {album, tracks} = this.props
		return (
			<div>
                <div className="card-header bg-info">
                    <h3 className="text-white">Album: {<strong><i>{album.name}</i></strong>}</h3>
                </div>
                <div className="card-body bg-dark">
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-thumbnail" src={this.getImg(album.images)} alt="Singer" />
                        </div>
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-primary">List Tracks</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {tracks.map((track,idx) => <AlbumItem track={track} key={"MyKey" + idx}/>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}

    getImg(images){
        return images.length > 0 ? images[0].url : './images/no-img.jpg'
    }
}


export default connector(SearchResultList);
