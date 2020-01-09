import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  outline: 0;
  width: 1237px;
  margin-bottom: 5px;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;

const Input = ({
  type = " text",
  value = "",
  onChange = () => null,
  name = ""
}) => <StyledInput type={type} value={value} onChange={onChange} name={name} />;

export default Input;
