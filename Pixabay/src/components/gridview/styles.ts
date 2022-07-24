import styled from 'styled-components/native';

export const Grid = styled.View`
  align-items: center;
  background-color: black;
  flex-grow: 1;
  margin: 4px;
  padding: 20px;
  flex-basis: 0;
`;

export const GridText = styled.Text`
  font-size: 24px;
  color: white;
`;

export const EmptyView = styled(Grid)`
  background-color: transparent;
`;
