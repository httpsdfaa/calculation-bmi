import React from 'react'
import "../index.css"

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valueWeight: '',
            valueHeight: '',
            formula: '',
            legend: '',
            title: '',
            erro: ''
        };

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

        const number = parseInt(e.target.value)
        let toLocale = number.toLocaleString('pt-br', { style: 'decimal', maximumFractionDigits : 2 })

        this.setState({
            valueHeight: toLocale
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let values = {
            formula: this.state.valueWeight / (this.state.valueHeight * this.state.valueHeight)
        }

        const formula = () => {

            if (!isNaN(values.formula) && !Infinity) {

                let calculate = values.formula
                calculate = calculate.toFixed(2)

                const result = () => {
                    let legendCategory = {
                        magreza: 'Magreza',
                        normal: 'Normal',
                        sobrepeso: 'Sobrepeso',
                        obesidade: 'Obesidade',
                        obesidadeGravissima: 'Obesidade Grave'
                    }

                    //  TÍTULO DO RESULTADO PARA MOSTRAR QUANDO TIVER RESULTADO
                    //  ATUALIZANDO A DIV
                    let divSpan = document.querySelector('.div-span')
                    if (formula !== '') {
                        this.setState({ title: 'RESULTADO' })

                        divSpan.style.display = 'flex'
                    }


                    if (values.formula < 18.5) {
                        this.setState({ legend: legendCategory.magreza })
                    } else if (values.formula >= 18.5 && values.formula <= 24.9) {
                        this.setState({ legend: legendCategory.normal })
                    } else if (values.formula >= 25.0 && values.formula <= 29.9) {
                        this.setState({ legend: legendCategory.sobrepeso })
                    } else if (values.formula >= 30.0 && values.formula <= 39.9) {
                        this.setState({ legend: legendCategory.obesidade })
                    } else if (values.formula >= 40) {
                        this.setState({ legend: legendCategory.obesidadeGravissima })
                    }
                }



                this.setState({ formula: calculate })
                result()

                this.setState({ valueHeight: '', valueWeight: '' })
                this.setState({ erro: '' })
            } else {
                this.setState({ erro: 'Por favor, digite novamente!' })
                this.setState({ valueHeight: '', valueWeight: '' })
            }
        }

        formula()
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
                            <input type="number" id="weight" name="weight" placeholder="ex.: 69,2"
                                onChange={this.handleChangeWeight}
                                value={this.state.valueWeight}></input>
                        </div>
                        <div className="div-input">
                            <label htmlFor="height">Digite sua altura: (ex.: 1,70)</label>
                            <input type="number" id="height" name="height" placeholder="ex.: 1,70"
                                onChange={this.handleChangeHeight}
                                value={this.state.valueHeight}></input>
                        </div>
                        <span id="span-erro">{this.state.erro}</span>
                        <input id="btn" type="submit" value="Calcular" onClick={this.handleSubmit} />
                    </div>
                    <div className="div-result">
                        <h3>{this.state.title}</h3>
                        <div className="div-span" >
                            <span id="span-number">{this.state.formula}</span>
                            <span id="span-legend">{this.state.legend}</span>
                        </div>
                    </div>
                    <hr />
                </main>
            </React.Fragment>
        )
    }
}