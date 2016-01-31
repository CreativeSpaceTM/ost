import React from 'react';

class Keypad extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: ""
		};
	}

	keyPressed(key) {
		var newValue;
		if (key > 0) {
			newValue = this.state.value + key;
		}
		else {
			newValue = this.state.value.slice(0, -1);
		}

		this.setState({value: newValue}, function () {
			this.props.onChange(this.state.value);
		});
	}

	render() {
		return (
			<div>
				<div>
					<button onClick={this.keyPressed.bind(this, 1)}>1</button>
					<button onClick={this.keyPressed.bind(this, 2)}>2</button>
					<button onClick={this.keyPressed.bind(this, 3)}>3</button>
				</div>
				<div>
					<button onClick={this.keyPressed.bind(this, 4)}>4</button>
					<button onClick={this.keyPressed.bind(this, 5)}>5</button>
					<button onClick={this.keyPressed.bind(this, 6)}>6</button>
				</div>
				<div>
					<button onClick={this.keyPressed.bind(this, 7)}>7</button>
					<button onClick={this.keyPressed.bind(this, 8)}>8</button>
					<button onClick={this.keyPressed.bind(this, 9)}>9</button>
				</div>
				<div>
					<button onClick={this.keyPressed.bind(this, 0)}>0</button>
					<button onClick={this.keyPressed.bind(this, -1)}>&lt;</button>
				</div>
			</div>
		);
	}
}

module.exports = Keypad;
