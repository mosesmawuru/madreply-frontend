import styled from "styled-components";

export const FooterDescSection = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 30px;
  }
`;

export const FooterDescPart = styled.div`
  & > :first-child {
    margin-bottom: 10px;
  }
  max-width: 280px;
`;

export const FooterDescContent = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: black;
  transition: 0.2s all;
  font-weight: 500;
  svg {
    width: 16px;
    margin-right: 10px;
  }
  :hover {
    color: rgb(148, 0, 0);
  }
`;

export const FooterDescTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  font-size: 25px;
  & > *:not(:first-child) {
    margin-left: 20px;
  }
  svg {
    transition: 0.2s all;
    :hover {
      color: rgb(148, 0, 0);
    }
  }
`;
