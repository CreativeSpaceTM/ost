import React from 'react';

class Modal extends React.Component {

	render() {
		return (
			<div className="ui basic modal">
				<div className="content">
					{this.props.children}
				</div>
				<div className="actions">
					<div className="ui red inverted button">
						<i className="remove icon" />
						Cancel
					</div>
					<div className="ui green inverted button">
						<i className="checkmark icon" />
						Submit
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Modal;
