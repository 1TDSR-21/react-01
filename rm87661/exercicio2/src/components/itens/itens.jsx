import React from 'react'

export default function Itens(props) {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>INFO</legend>
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" name="txtNm"></input>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" name="txtEmail"></input>
                    </div>
                    <div>
                        <input type="button" value="CADASTRAR"></input>
                    </div>
                </fieldset>
            </form>

            <div>
                <p>ValorState em Itens: {props.valor}</p>
                <button onClick={() => props.plus()}>AUMENTAR</button>
            </div>
        </div>
    )
}