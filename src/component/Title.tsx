import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
    display: flex;
  justify-content: center;

  width: 15rem;
  padding: 1rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  border-radius: 10px;
  background-color: #ffe066;

  font-family: 'Roboto';
`

const Title: React.FC = () => {
    return (
        <Text>Infinity Photos</Text>
    )
}

export default Title;