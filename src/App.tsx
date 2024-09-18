import { useState } from 'react'
import './App.css'
import imgLogo from './assets/logo.png'

export default function App() {
  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
      'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!', 
      'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!', 
      'Escreva em seu coração: todo dia é o melhor dia do ano.',
      'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.',
      ]
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: [
        'Boa noite durma bem',
        'Teste frase boa noite'
      ]
    }
  ]
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)
  const [fraseGerada, setFraseGerada] = useState("")

  function selecionarCategoria(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setFraseGerada(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className="container">
      <img 
        src={imgLogo} 
        alt="Logo aplicação" 
        className="logo"
      />
      <h1 className="title">Gerador de frases</h1>
      <div className="category-area">
        {allFrases.map( (item, index) => (
          <button
            key={item.id} 
            className="category-button"
            onClick={ () => selecionarCategoria(index) }
            style={{
              borderWidth: categoriaSelecionada === index ? 2 : 0,
              borderColor: "#1FA4DB"
            }}
          >
            {item.nome}
          </button>
        ))}
      </div>
      <button className="button-frase" onClick={ () => gerarFrase() }>Gerar frase</button>
      {fraseGerada && (
        <div className="textoFrase">{fraseGerada}</div>
      )}
    </div>
  )
}