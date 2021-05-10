import React from 'react'
import {Link} from 'react-router-dom'

class ArtistAlbumItem extends React.Component {
	render(){
        const {album} = this.props
		return (
			<div className="col-sm-3">
                <div className="thumbnail">
                    <img src={this.getImg(album.images)} alt={album.name} className="img-thumbnail img-fluid" />
                    <div className="caption">
                        <h5>
                            <Link to={`/album/${album.id}`}>{album.name}</Link>
                        </h5>
                    </div>
                </div>
            </div>
		);
	}

    getImg(images){
        return images.length > 0 ? images[0].url : './images/no-img.jpg'
    }

}


export default ArtistAlbumItem;
