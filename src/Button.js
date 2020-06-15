import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.buttonColor || 'transparent'};
    border: 4px solid white;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin: 8px;
    outline: none;
    padding: 16px;
`;

export const Button = ({ children, buttonColor, ...props }) =>
    <StyledButton buttonColor={buttonColor} {...props}>{children}</StyledButton>;

export const DangerButton = ({ children, ...props }) =>
    <Button buttonColor="red" {...props}>{children}</Button>;
    
export const SuccessButton = ({ children, ...props }) =>
    <Button buttonColor="green" {...props}>{children}</Button>;

// export class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.buttonColor = props.buttonColor;
//     }

//     render() {
//         return (
//             <StyledButton
//                 buttonColor={this.buttonColor}
//                 {...this.props}>
//                     {this.props.children}
//             </StyledButton>
//         );
//     }
// }

// export class DangerButton extends Button {
//     constructor(props) {
//         super(props);
//         this.buttonColor = 'red';
//     }
// }