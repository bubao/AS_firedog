import React from 'react';

class Nava extends React.Component {
	render() {
			return this.transferPropTo(<iframe />);
		},
		onLoadHandler() {
			// Handle rendering here
		}
}
class Header extends React.Component {
	render: function() {
		return (
			<Frame onLoad={this.onLoadHandler}>
				<h1>{this.props.children}</h1>
			</Frame>
		);
	}
}