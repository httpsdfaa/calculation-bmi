import React from 'react'
import "../index.css"

export default function Main() {
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
                        <input type="text" id="weight" name="weight" placeholder="ex.: 69,2"></input>
                    </div>
                    <div className="div-input">
                        <label htmlFor="height">Digite sua altura: (ex.: 1,70)</label>
                        <input type="text" id="height" name="height" placeholder="ex.: 1,70"></input>
                    </div>
                    <input id="btn" type="submit" value="calcular"></input>
                </div>
                <hr />
            </main>
        </React.Fragment>
    )
}