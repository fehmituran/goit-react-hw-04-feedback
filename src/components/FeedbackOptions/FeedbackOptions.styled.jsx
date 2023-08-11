import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ButtonContainer = styled.div`
  margin-right: 20px;
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 5px;
  color: #262c37;
  background: #fff;
  letter-spacing: 2px;
  transition: All .25s ease-in-out;

  &:hover {
    background-color: #262c37;
    color: #fff;
  }

  cursor: pointer;
`;
