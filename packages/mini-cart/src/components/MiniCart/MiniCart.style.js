import styled from 'styled-components';

const MiniCartList = styled.ul`
  list-style: none;
  height: fit-content;
  background: #fff5f5;
`;

const MiniCartItem = styled.li`
  border-bottom: 1px solid #dddddd;
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;
const ItemName = styled.span`
  color: #1d2343;
  font-weight: 700;
`;

const ItemPrice = styled.span`
  background: #65bdc0;
  color: #1d2343;
  padding: 4px 8px;
  border-radius: 21px;
  font-size: 13px;
`;

const Title = styled.span`
  cursor: default;
  font-size: 24px;
  letter-spacing: 0.09em;
  color: #1d2343;
  margin-bottom: 8px;
  display: block;
  text-align: center;
`;

const RemoveItemButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: #ee777f;
  font-size: 18px;
  margin-left: 8px;
  font-weight: 700;
  cursor: pointer;

  &:hover,
  &:focus {
    transition: 0.2s ease-in;
    color: rgba(238, 119, 127, 0.46);
  }
`;

const Container = styled.div`
  height: fit-content;
`;

export {
  MiniCartList,
  MiniCartItem,
  ItemName,
  ItemPrice,
  Title,
  RemoveItemButton,
  Container,
};
