import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [produto, setProduto] = useState({});
  const [link, setLink] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (link) {
      fetchProduto(link);
    }
  }, [link]);

  const fetchProduto = async (url) => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const parsedProduct = parseProduto(html);
      setProduto(parsedProduct);
      setErro("");
    } catch (error) {
      setErro("Erro ao buscar produto. Tente novamente.");
      console.error(error);
    }
  };

  const parseProduto = (html) => {
    // Implementar lógica para extrair as informações do produto do HTML
    // Usar bibliotecas como cheerio ou jsdom para facilitar a manipulação do HTML
    // Retornar um objeto com as informações do produto
    return {
      titulo: "Título do Produto", // Exemplo
      vendedor: "Vendedor do Produto", // Exemplo
      preco: "R$0,00", // Exemplo
      prime: false, // Exemplo
      frete: "Frete Grátis", // Exemplo
    };
  };

  const handleChangeLink = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchProduto(link);
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Apresentamos o
          <strong>
            <em>Extrato Mágico Amazon</em>
          </strong>
        </h1>
        <p className="hero-subtitle">
          Explore detalhes de Produtos Amazon em um clique!
          <br />
          Sua chave para desvendar instantaneamente os detalhes que realmente
          importam.
        </p>
        <p className="hero-description">
          Com apenas um clique, você obtém todas as informações essenciais sobre
          qualquer produto da Amazon. Confira!
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="link">Link do Produto:</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={handleChangeLink}
            placeholder="Insira o link do produto da Amazon"
          />
          <button type="submit">Buscar Informações</button>
        </form>
      </div>

      {erro && <div className="error">{erro}</div>}

      {produto && (
        <div className="produto">
          {/* <p><strong>{produto.titulo}TITULO</strong></p> */}
          <h2>{produto.titulo}TITULO</h2>
          <p>Vendedor: {produto.vendedor}CASA DA VÓ</p>
          <p>Preço: {produto.preco}10000</p>
          {produto.prime && <p>Produto com Selo Prime</p>}
          <p>Frete: {produto.frete}1000000</p>
        </div>
      )}
    </div>
  );
}

export default App;
