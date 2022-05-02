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
            `
        return (
            <>
                <h2>Styled Components</h2>
                <MyH3>Hola Soy un h3 estilizado con styled-components</MyH3>
            </>
        )
}