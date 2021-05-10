import React from 'react'
import ArtistAlbumItem from '../components/ArtistAlbumItem'

class ArtistAlbumList extends React.Component {
	render(){
		return (
			<div className="card">
                <div className="card-header">
                    <h3 className="text-primary">List Albums</h3>
                </div>
                <div className="card-body list-albums">
                    <div className="row">
                        {this.props.albums.map((album,index) => <ArtistAlbumItem album={album} key={"MyKey" + index}/>)}
                    </div>
                </div>
            </div>
		);
	}
}


export default ArtistAlbumList;
