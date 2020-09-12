import React, { useState } from "react"

const Formulario = () => {

    // state del formulario
    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        país: " "
    })

    const [error, setError] = useState(false)

    // extraer ciudad y pais
    const { ciudad, pais } = busqueda

    // funcion que coloca los elementos en el state
    const handleChange = event => {
        setBusqueda({
            ...busqueda,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        // validar
        if (ciudad.trim() === "" || pais.trim() === "") {
            setError(true)
            return
        }
        setError(false)
        // pasando al componente principal

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-4 error">Todos los campos son obligatorios</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país -- </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="ciudad">país:</label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="buscar clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}

export default Formulario