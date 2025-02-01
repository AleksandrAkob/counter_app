import React, {Component} from  'react'



export class CounterClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}


	increment = () => {
      this.setState(prev => ({
			count: prev.count + 1
		}))
	}

	decrement = () => {
      this.setState(prev => ({
			count: prev.count - 1
		}))
	}


	render() {
		return (
			<div>
        <h1>Счетчик: {this.state.count}</h1>
				<button onClick={this.increment}>Увеличить</button>
				<button onClick={this.decrement}>Уменьшить</button>
			</div>
		)
	}
}