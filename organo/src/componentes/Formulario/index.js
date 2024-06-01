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

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Fomulario
