import styled from 'styled-components';

const paletaPadrao = ['#f0eae3','#FFFFFF','#1e1f1d']

//Isso é um módulo de componente
export const Container = styled.div`
    margin: 0 auto;
    background-color:${paletaPadrao[0]};

    h2{
        text-align:center;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode';
        background-color:${paletaPadrao[2]};
        color:${paletaPadrao[1]};
        border-radius:3px;
    
    }
   
`

export const HtmlRoot = styled.html`
    font-size: 16px;
`
export const Navbar = styled.nav`
    background-color:${paletaPadrao[2]};
    
    
    color: #FFFFFF;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode';
    
    a{
        text-decoration:none;
    }
    ul {
        display: flex;
        list-style:none;
        flex-direction: row;
        justify-content:space-around;
        
    }

    li {
        background-color:#ff0000;
        padding: 2%;
    }

    li:hover {
        background-color: #FFFFFF;
        background-color:${ props => props.backgroundColor };
        color: #1e1f1d;
    }
    
`

export const HoverEl = styled.span`
    font-size:${props => `${props.fontSize}px`};
    background-color:${ props => props.backgroundColor };
    &:hover{
        background-color:${ props => props.backgroundColor };
        color: #1e1f1d;
    }

`

export const SecaoHome = styled.section`
    #lado-e{
        float:left;
        background-color: #ff0000;
        max-width: 10vw;
        height:inherit;
        color: ${paletaPadrao[0]}
    }

    #lado-d{
        float:right;
        background-color: #0000ff;
        max-width: 10vw;
        height:inherit;
        color: ${paletaPadrao[0]}
    }

    .imagem{
        transform:scale(0.25);
        position:absolute;
        top:50%;
    }

`