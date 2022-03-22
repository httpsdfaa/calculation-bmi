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
        this.setState({
            valueHeight: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let values = {
            weight: this.state.valueWeight,
            height: this.state.valueHeight
        }


        let formula = values.weight / (values.height * values.height)
        formula = formula.toFixed(2)


        this.setState({ formula: formula})

        /*let magreza = 18.5
        let normal = (18.5, 24,9)
        let sobrepeso = (25, 29.9)
        let obesidade = (30, 39.9)
        let obesidadeGrave = (40)*/

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
        if(formula !== '') {
            this.setState({ title: 'RESULTADO' })
            
            divSpan.style.display = 'flex'
        }


        //  LÓGICA RESULTADO
        if(formula < 18.5) {
            this.setState({ legend: legendCategory.magreza })
        } else if (formula >= 18.5 && formula <= 24.9) {
            this.setState({ legend: legendCategory.normal })
        } else if (formula >= 25.0 && formula <= 29.9) {
            this.setState({ legend: legendCategory.sobrepeso })
        } else if (formula >= 30.0 && formula <= 39.9) {
            this.setState({ legend: legendCategory.obesidade })
        } else if (formula >= 40) {
            this.setState({ legend: legendCategory.obesidadeGravissima })
        }

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