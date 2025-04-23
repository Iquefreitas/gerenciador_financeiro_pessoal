import styled from "styled-components";


export const Container = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color:  #2C6383;
    margin-bottom: 5px;
`;

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color; #000;
    margin-bottom: 5px;
    COLOR: ${props => props.color ?? '#000'};
`;
