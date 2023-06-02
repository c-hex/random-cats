import styled from "styled-components";
import type { CSSProperties } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: auto;
    height: 100%;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 620px;
    height: 100%;
`;

export const Item = styled.li`
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    list-style: none;
    transition: 0.2s;
    &:hover {    
        transform: scale(1.04);
        cursor: pointer;
    }
`;

export const Image = styled.img<{objectFit?: CSSProperties['objectFit']}>`
    width: 100%;
    height: 100%;
    ${({objectFit}) => objectFit && `object-fit: ${objectFit};`}
`;

