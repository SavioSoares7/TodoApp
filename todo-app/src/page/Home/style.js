import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BG_COLOR};
  color: ${({ theme }) => theme.COLORS.FT_BLACK};
`;
