import styled from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: #ee777f;
  color: white;
  font-size: 18px;
  padding: 12px 16px;
  border-radius: 21px;
  width: 100%;
  transition: .2s ease-in;

  &:hover,
  &:focus {
    transition: .2s ease-in;
    background: rgba(238, 119, 127, 0.46)
  }
`;

export {Btn};
