import React from 'react';
require('../styles/Right.css');
require('../styles/CharBox.css');

var Character = require('../sources/Data/need.json');
var CharBox = require('../sources/Data/CharBox.json');
class Right extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	clickHandler(item) {
		this.props.pfn(Character[item].id)
	}

	render() {

		return <div className='r'>{CharBox.map((item) => (
			<div className = {`box c_${('0000' + item).slice(-4)}`} key={Character[item].id} title={`${Character[item].name}`}  onClick={this.clickHandler.bind(this, item)}>
		          	<div className='num' >{Character[item].id}</div>
		         	<div className={`${Character[item].element}`}></div>
		          </div>))}
		</div>
	}
}
export default Right;
/**
 * 此数据不全
 */
// var S = Character.map((item, index) => {

// 	if (index === 0) {
// 		return;
// 	}

// 	let value = Character[index].name
// 	let element = Character[index].element;
// 	let id = Character[index].id;
// 	let StrN = ('0000' + id).slice(-4)
// 	return (
// 		<li className = 'box' key={index} onMouseOver={() => this.setState({value: value})}  >
// 			 <img  src={`../sources/CharBox/Box_Mon_${StrN}.png` } title={this.state.value} />
// 	 		<div className='num' >{id}</div>
// 	 		<div className={`${element}`}/>
// 	  	</li>);
// })
// 
// 
// render() {
// 	var S = CharBox.map((item) => {
// 		let value = Character[item].name;
// 		let element = Character[item].element;
// 		let id = Character[item].id;
// 		let StrN = ('0000' + item).slice(-4)
// 		let b = 'c_' + StrN;
// 		return (
// 			<li className = {`box ${b}`} key={id} title={`${value}`}  >
// 		 		<div className='num' >{id}</div>
// 		 		<div className={`${element}`}/>
// 		  	</li>);
// 	})
// 	return <div>{S}</div>
// }
// 
// onClick={this.clickHandler.bind(this, item)}