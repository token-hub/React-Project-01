import React from 'react'
import '../styles/calculator.css'

class Calculator extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 num: 0
		}
	}

	changeHandler = event => {
		this.setState({ num: event.target.value })
	}

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
								<button>Clear</button>
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
								<button> 7 </button>
							</div>
							<div className="item">
								<button> 8 </button>
							</div>
							<div className="item">
								<button> 9 </button>
							</div>
							<div className="item something-red">
								<button className='something-red'> - </button>
							</div>
						</div>

						<div className='content'>
							<div className="item">
								<button> 4 </button>
							</div>
							<div className="item">
								<button> 5 </button>
							</div>
							<div className="item">
								<button> 6 </button>
							</div>
							<div className="item something-red">
								<button className='something-red'> * </button>
							</div>
						</div>

						<div className='content'>
							<div className="item">
								<button> 1 </button>
							</div>
							<div className="item">
								<button> 2 </button>
							</div>
							<div className="item">
								<button> 3 </button>
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