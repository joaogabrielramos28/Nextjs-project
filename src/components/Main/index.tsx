import React from 'react';

import * as S from './styles';

const Main: React.FC = () => {
    return (
        <S.Wrapper>
            <S.Logo
                src="/img/logo.svg"
                alt="Imagem de um átomo e React Avançado escrito ao lado."
            />
            <S.Title>React avançado</S.Title>
            <S.Description>
                Typescript, ReactJS, NextJS e Styled Components
            </S.Description>
            <S.Illustration
                src="/img/hero-illustration.svg"
                alt="Programador sentado em frente ao computador"
            />
        </S.Wrapper>
    );
};

export default Main;
