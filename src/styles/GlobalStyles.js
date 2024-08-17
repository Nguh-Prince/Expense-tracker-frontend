import { createGlobalStyle } from "styled-components";

export const GlobalStyle= createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style: none;
}

:root{
    --primary-color:#222260;
    --primary-color:'color rgba(34 ,34 ,96 ,.6)';
    --primary-color:'color rgba(34 ,34 ,96 ,.6)';
    --color-grey:#aaa;
    --color-green:#42AD00;
    --color-accent:#F56692;
    --color-delete:#FF0000;
}

body{
    font-family:'Nunito',sans-serif ;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    overflow:hidden;
    color: rgba(34, 34, 96, .6);
}
`;