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
  font-size: 24px;
  letter-spacing: .09em;
  color: #1d2343;
  margin-bottom: 8px;
  display: block;
  text-align: center;
`;

export {MiniCartList, MiniCartItem, ItemName, ItemPrice, Title};
