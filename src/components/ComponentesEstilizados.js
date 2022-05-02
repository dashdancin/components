import React from 'react';
import styled, { css,
    keyframes,
    ThemeProvider,
    createGlobalStyle,
} from 'styled-components';

export default function ComponentesEstilizados() {
    let mainColor = '#db7093',
        mainAlphaColor80 = '#db709380';

    const setTransformationTime = (time) => `all ${time} ease-in-out`;

    const fadeIn = keyframes`
        0% {
            opacity: 0%
        }
        
        100% {
            opacity: 1;
        }
        `;
    
        const MyH3 = styled.h3`
            padding: 2rem;
            text-align: center;
            color: ${(props) => props.color};
            color: ${({ color }) => color};
            color: ${({ color }) => color || '#000'};
            background-color: ${setTransformationTime('is')};
            animations: ${fadeIn} 5S ease-out};

        ${({ isButton }) => 
        isButton &&
    css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
    `}

        &:hover {
            background-color: ${mainAlphaColor80};
        }
            `;
        
            const light = {
                color: "#222",
                bgColor: "#DDD",
              };
            
              const dark = {
                color: "#DDD",
                bgColor: "#222",
              };
            
              const Box = styled.div`
                padding: 1rem;
                margin: 1rem;
                color: ${({ theme }) => theme.color};
                background-color: ${({ theme }) => theme.bgColor};
              `;
            
              const BoxRounded = styled(Box)`
                border-radius: 1rem;
              `;
            
              const GlobalStyle = createGlobalStyle`
                h2 {
                  padding: 2rem;
                  background-color: #fff;
                  color: #61dafb;
                  text-transform: uppercase;
                }
              `;

        return (
            <>
                <h2>Styled Components</h2>
                <MyH3>Hola Soy un h3 estilizado con styled-components</MyH3>
                <MyH3 color='#61dagb'>
                    Hola Soy un h3 estilizado con styled-components
                </MyH3>
                <MyH3>
                <ThemeProvider theme={light}>
                    <Box>Soy una caja dark</Box>
                    <BoxRounded>Soy una caja redondeada dark</BoxRounded>
                </ThemeProvider>
                <ThemeProvider theme={dark}>
                    <Box>Soy una caja dark</Box>
                    <BoxRounded>Soy una caja redondeada dark</BoxRounded>
                </ThemeProvider>
                </MyH3>
            </>
        )
}