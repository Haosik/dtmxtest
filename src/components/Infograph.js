import React, {Component} from 'react';
import Marker from '../containers/Marker';

export default class Infograph extends Component {
	constructor(props) {
		super(props)

		this.state = {
			markers: [{
				id: 1,
				posx: 220,
				posy: -35,
				title: 'First marker',
				titlePos: 'left'
			  }, {
				id: 2,
				posx: 420,
				posy: 25,
				title: 'Second marker',
				titlePos: 'top'
			  }]
		}
	}

	render() {
		const {markers} = this.state;
		return (
			<div className="infograph">
				{markers.map((item) => {
					return <Marker key={item.id} props={{...item}}></Marker>
				})}
			</div>
		)
	}
}