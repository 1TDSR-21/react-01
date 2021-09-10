import React from 'react'

export default function Itens(props) {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>INFO</legend>
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" name="txtNm" />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" name="txtEmail" />
                    </div>
                    <div>
                        <input type="button" value="CADASTRAR" />
                    </div>
                </fieldset>
            </form>

            <div>
                <p>ValorState em Itens: {props.valor}</p>
                <button onClick={() => props.plus()}>AUMENTAR EM ITENS</button>
            </div>


        </div>
    )
}
