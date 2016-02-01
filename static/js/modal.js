import React from 'react';

class Modal extends React.Component {

	show() {
		$('.ui.basic.modal').modal({
			detachable: false,
			onApprove: this.props.onOk
		})
		.modal('show');
	}

	render() {
		return (
			<div className="ui basic modal">
				<div className="content">
					{this.props.children}
				</div>
				<div className="actions">
					<div className="ui cancel red inverted button">
						<i className="remove icon" />
						Cancel
					</div>
					<div className="ui ok green inverted button">
						<i className="checkmark icon" />
						Submit
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Modal;
