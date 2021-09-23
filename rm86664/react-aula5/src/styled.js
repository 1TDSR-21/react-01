import styled from "styled-components";

const corFundoPadrao = '#cccccc'


//Isto é um módulo de componente
export const Container = styled.div`
  margin: 0 auto;
  background-color: #f0eae3;

  h2 {
    text-align: center;
    font-family: "Montserrat Regular", sans-serif;
    background-color: ${corFundoPadrao};
    color: #fff;
    border-radius: 3px;
    padding: 0.3rem;
  }
`;
export const HtmlRoot = styled.html`
  font-size: 16px;
`;

export const Navbar = styled.nav`
  background-color: #1e1f1d;
  color: #fff;
  display: flex;
  font-family: "Montserrat Regular", sans-serif;
  flex-direction: column;
  cursor: pointer;

  ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    padding: 5vh auto;
    justify-content: space-around;
  }

  li {
    padding: 0 3vw;
  }
`;

export const HoverEl = styled.span`
  &:hover {
    background-color: #fff;
    color: #1e1f1d;
  }
`;

export const SectionHome = styled.section`
  #lado-e{
    float: left;
    background-color: #ff0000;
    padding: .25rem;
  }

  #lado-d{
    float: right;
    background-color: #0000ff;
    padding: .25rem;
  }

  .imagem{
    transform: scale(0.5);
    display: inline-block;
    margin:auto;
  }
`