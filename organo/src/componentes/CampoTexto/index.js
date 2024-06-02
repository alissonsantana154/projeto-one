import("./CampoTexto.css")

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`

  let valor = ""

  const aoDigitado = (event) => {
    valor = event.target.value
    console.log(valor)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificado}
      />
    </div>
  )
}

export default CampoTexto
