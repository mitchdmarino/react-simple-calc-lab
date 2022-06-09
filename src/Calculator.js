import React, {Component} from 'react'





export default class Calculator extends Component {
    state={
        num1: 0,
        num2: 0, 
        operator: "+",
        answer: 0, 
       }

    setNum = (e) => {
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }
    
    setOperator = (e) => {
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    calculate = (e) => {
        e.preventDefault()
        if (this.state.operator === '+') {
            let sum = Number(this.state.num1)+Number(this.state.num2)
            this.setState({
                answer: sum
            })
        }
        if (this.state.operator === '-') {
            let difference = Number(this.state.num1)-Number(this.state.num2)
            this.setState({
                answer: difference
            })
        }
        if (this.state.operator === '*') {
            let product = Number(this.state.num1)*Number(this.state.num2)
            this.setState({
                answer: product
            })
        }
        if (this.state.operator === '/') {
            let quotient = Number(this.state.num1)/Number(this.state.num2)
            this.setState({
                answer: quotient
            })
        }
    }
    

    render() {
        return (
            <div className="caclulator">
                <h1> Math with React!</h1>

                <form onSubmit={this.calculate}>
                    <input type="number" 
                        name="num1"
                        value={this.state.num1}
                        onChange={this.setNum}
                    />
                    <select name="operator" 
                        id="operator"
                        value={this.state.operator}
                        onChange={this.setOperator}
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                        
                    </select>
                    <input type="number" 
                        name="num2"
                        value={this.state.num2}
                        onChange={this.setNum}
                    />
                    <button>=</button>
                    <h3>{this.state.answer}</h3>
                </form>
            </div>
        )
    }
} 