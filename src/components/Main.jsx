import React from 'react'
import "../index.css"

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = { valueWeight: '', valueHeight: ''};

        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleChangeHeight = this.handleChangeHeight.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeWeight = (e) => {
        this.setState({
            valueWeight: e.target.value
        });
    }

    handleChangeHeight = (e) => {
        this.setState({
            valueHeight: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let weight = this.state.valueWeight
        let height = this.state.valueHeight

        //  TERMINAR
        (weight / (height * height))

    }

    render() {

        return (
            <React.Fragment>
                <div className="titles">
                    <h1>CÁLCULO IMC</h1>
                    <h3>Índice Massa Corporal</h3>
                </div>
                <main>
                    <div className="div-info-input">
                        <div className="div-input">
                            <label htmlFor="weight">Digite seu peso: (ex.: 69,2)</label>
                            <input type="text" id="weight" name="weight" placeholder="ex.: 69,2"
                            onChange={this.handleChangeWeight}
                            value={this.state.valueWeight}></input>
                        </div>
                        <div className="div-input">
                            <label htmlFor="height">Digite sua altura: (ex.: 1,70)</label>
                            <input type="text" id="height" name="height" placeholder="ex.: 1,70"
                            onChange={this.handleChangeHeight}
                            value={this.state.valueHeight}></input>
                        </div>
                        <input id="btn" type="submit" value="Calcular" onClick={this.handleSubmit}/>
                    </div>
                    <hr />
                </main>
            </React.Fragment>
        )
    }
}