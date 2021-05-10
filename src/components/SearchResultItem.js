import React from 'react'
import {Link} from 'react-router-dom'

class SearchResultItem extends React.Component {
	render(){
        const {item} = this.props
        const img = item.images.length > 0 ? item.images[0].url : './images/no-img.jpg'
        const to = `/artist/${item.id}`
		return (
			<div className="col-sm-3">
                <div className="thumbnail">
                    <img className="img-thumbnail" src={img} alt={item.name} />
                    <div className="caption">
                        <h4 className="mb-0">
                            <Link to={to}>{item.name}</Link>
                        </h4>
                        {item.genres.map((genre,idx) => <span className="badge badge-pill badge-warning mb-2 mr-2" key={"MyKey" + idx}>{genre}</span>)}
                    </div>
                </div>
            </div>
		);
	}
}


export default SearchResultItem;
