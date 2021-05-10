import React from 'react'

class SearchResultList extends React.Component {
	render(){
		const {track} = this.props
		return (
			<div className="col-sm-6 track">
				<h4><a href={track.external_urls.spotify} style={{textDecoration:"none"}} className="text-info">{track.name}</a></h4>
                <audio src={track.preview_url} controls>Your browser does not support the audio element.</audio>
            </div>
		);
	}
}


export default SearchResultList;
