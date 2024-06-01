import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Fomulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Back-End",
    "Full-Stack",
    "Mobile",
    "UI/UX",
    "Analista de Testes",
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log("Form foi submetido")
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Fomulario
