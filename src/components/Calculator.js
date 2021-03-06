import React from 'react'

class Calculator extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 num: '0',
			 errorMsg: ''
		}
	}

	clearHandler = () => this.setState({ num: 0, errorMsg: '' })

	changeHandler = event => this.setState({ num: event.target.value});

	numberAndOperatorClickHandler = event => {
		let {num, errorMsg} = this.state;
		let value = event.target.value;
		let isNan = isNaN(value);

		isNan 
			? isNaN(num[num.length-1])
				? this.setState({ num: num.slice(0, -1)+value }) 
				: this.setState({ num: num + event.target.value }) 
			: num === 0
				? this.setState({ num: event.target.value })
				: this.setState({ num: num + event.target.value  }) ;

		/*
		if !number
			if last value is operator
				replace last operator with new one
			else	
				append value after current value	
		else
			if	check if value === 0
			 	replace 0 with value
			else
				append value after current value
		*/
	}

	equalsOperationHandler = () => {
		let lastChar = this.state.num[this.state.num.length-1];
		let firstChar = this.state.num[0];

		isNaN(parseInt(lastChar)) || isNaN(parseInt(firstChar)) 
			? this.setState({ errorMsg: 'Error' }) 
			: this.setState({ num: eval(this.state.num).toString() })
	}
	
	render() {

		let {num, errorMsg} = this.state;

		return (

			<div className='calculator'>
			<h1>{errorMsg}</h1>
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
									<button className='something-red' onClick={this.equalsOperationHandler} value={'='}> = </button>
								</div>
								<div className="right-item something-red">
									<button className='something-red' onClick={this.numberAndOperatorClickHandler} value={'+'}> + </button>
								</div>
							</div>
						</div>

						<div className='content'>
							<div className="item">
								<button value={7} onClick={this.numberAndOperatorClickHandler}> 7 </button>
							</div>
							<div className="item">
								<button value={8} onClick={this.numberAndOperatorClickHandler}> 8 </button>
							</div>
							<div className="item">
								<button value={9} onClick={this.numberAndOperatorClickHandler}> 9 </button>
							</div>
							<div className="item something-red">
								<button className='something-red' onClick={this.numberAndOperatorClickHandler} value={'-'}> - </button>
							</div>
						</div>

						<div className='content'>
							<div className="item">
								<button value={4} onClick={this.numberAndOperatorClickHandler}> 4 </button>
							</div>
							<div className="item">
								<button value={5} onClick={this.numberAndOperatorClickHandler}> 5 </button>
							</div>
							<div className="item">
								<button value={6} onClick={this.numberAndOperatorClickHandler}> 6 </button>
							</div>
							<div className="item something-red">
								<button className='something-red' onClick={this.numberAndOperatorClickHandler} value={'*'}> * </button>
							</div>
						</div>

						<div className='content'>
							<div className="item">
								<button value={1} onClick={this.numberAndOperatorClickHandler}> 1 </button>
							</div>
							<div className="item">
								<button value={2} onClick={this.numberAndOperatorClickHandler}> 2 </button>
							</div>
							<div className="item">
								<button value={3} onClick={this.numberAndOperatorClickHandler}> 3 </button>
							</div>
							<div className="item something-red">
								<button className='something-red' onClick={this.numberAndOperatorClickHandler} value={'/'}> / </button>
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Calculator