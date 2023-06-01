import styled from "styled-components";
import type { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
    border-radius: 50vh;
    padding: 8px 12px;
    border: none;
    display: flex;
    align-items: center;
    ${({bgColor}) => bgColor && `background-color: ${bgColor};`}
    color: ${({color}) => color || "#000"};
    ${({pointer}) => pointer && "cursor: pointer;"}
    > a {
        text-decoration: none;
        color: inherit;
    }
    &:hover {
        cursor: pointer;
    }
`