import styled, { css } from 'styled-components';

const StyledGerericWrapper = styled.div`
${({ theme }) => css`
    display: flex;
    justify-content: ${(props) => props.justifyContent || 'center'};
    flex-direction: ${(props) => props.flexDirection || 'row'};
    justify-items: ${(props) => props.justifyItems || 'center'};
    flex-wrap: ${(props) => props.flexWrap || 'wrap'};
    align-items: ${(props) => props.alignItems || 'center'};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    background-color: ${(props) => props.backgroundColor || theme.light.palette.auxiliary.white};
    border-radius: ${(props) => props.borderRadius || '0 0 0 0'};
    font-weight: ${(props) => props.fontWeight || 'bold'};
    border: ${(props) => props.border || 'none'};
    margin: ${(props) => props.margin || '0'};
    filter: ${(props) => props.filter || 'brightness(1)'};
    padding: ${(props) => props.padding || '0'};
    gap: ${(props) => props.gap || '0'};
  `}

@media (min-width: 321px) and (max-width: 480px) {
  height:${(props) => props.height480 || '100vh'};
  width:${(props) => props.width480 || '100%'};
}

@media (min-width: 481px) and (max-width: 768px) {
  height:${(props) => props.height768 || '100vh'};
  width:${(props) => props.width768 || '100%'};

}

@media (min-width: 769px) and (max-width: 1024px) {
  height:${(props) => props.height1024 || '100vh'};
  width:${(props) => props.width1024 || '100%'};

}

@media (min-width: 1025px) and (max-width: 1280px) {
  height:${(props) => props.height1280 || '100vh'};
  width:${(props) => props.width1280 || '100%'};
}

@media (min-width: 1281px) {
width:${(props) => props.width1281 || '100%'};
height:${(props) => props.height1281 || '100vh'};
border-radius:${(props) => props.borderRadius1281 || '0 0 0 0'};
}
  `;

export default StyledGerericWrapper;