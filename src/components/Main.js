import React from 'react';
import List from './List.js'
import {BackTop} from 'antd';
require('../styles/B.css');
class AppComponent extends React.Component {
	render() {
		return (
		<div>
		<BackTop><div className="ant-back-top-inner">UP</div></BackTop>
			<List />
		</div>
		);
	}
}
AppComponent.defaultProps = {};
export default AppComponent;