import React from 'react'

class Calculator extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 num: 0
		}
	}

	changeHandler = event => this.setState({ num: event.target.value })

	numberClickHandler = event => this.setState({ num: event.target.value })
	
	clearHandler = () => this.setState({ num: 0 })

	render() {
		return (
			<div className='calculator'>
				<div className='container'>
					<div className='top'>
						<input type="text" value={this.state.num} onChange={this.changeHandler} />
					</div>
					<div className='bottom'>

						<div className='content'>
							<div className="left second clear">
								<button onClick={this.clearHandler} >Clear</button>
							</div>
							<div className="right second">
								<div className="right-item">
									<button className='something-red'> = </button>
								</div>
								<div className="right-item something-red">
									<button className='something-red'> + </button>
								</div>
							</div>
						</div>

						<div className='content'>
							<div className="item">
								<button value={7} onClick={this.numberClickHandler}> 7 </button>
							</div>
							<div className="item">
								<button value={8} onClick={this.numberClickHandler}> 8 </button>
							</div>
							<div className="item">
								<button value={9} onClick={this.numberClickHandler}> 9 </button>
							</div>
							<div className="item something-red">
								<button className='something-red'> - </button>
							</div>
						</div>

						<div className='content'>
							<div className="item">
								<button value={4} onClick={this.numberClickHandler}> 4 </button>
							</div>
							<div className="item">
								<button value={5} onClick={this.numberClickHandler}> 5 </button>
							</div>
							<div className="item">
								<button value={6} onClick={this.numberClickHandler}> 6 </button>
							</div>
							<div className="item something-red">
								<button className='something-red'> * </button>
							</div>
						</div>

						<div className='content'>
							<div className="item">
								<button value={1} onClick={this.numberClickHandler}> 1 </button>
							</div>
							<div className="item">
								<button value={2} onClick={this.numberClickHandler}> 2 </button>
							</div>
							<div className="item">
								<button value={3} onClick={this.numberClickHandler}> 3 </button>
							</div>
							<div className="item something-red">
								<button className='something-red'> / </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Calculator