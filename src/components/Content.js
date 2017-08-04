import React from 'react';
import Right from './Right.js'
import Left from './Left.js'
require('../styles/View.css');
// var json1 = require('sources/data/AS_CharacterDefine.json')
// var json2 = require('sources/data/AS_StringTable.json')
class Content extends React.Component {
	constructor() {
		super();
		this.state = {
			a: 0
		};
	}
	fn(newState) {
		// 使用闭包保存父组件的 this 值
		var self = this;
		return (newState) => self.setState({
			a: newState
		});
	}
	render() {
		var fn = this.fn();
		return (
			<div className='view'>
				<div className='left'>
					<Left id={this.state.a}/>
				</div>
				<div className='right'>
					<Right pfn={fn} />
				</div>
            </div>
		);
	}
}

export default Content;
/**
 * <div>{this.state.a}</div>
 * <Left id={this.state.a}/>
 * 
 */