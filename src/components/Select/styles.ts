import styled from "styled-components";

export const Container = styled.div`
  .select {
    border-radius: 8px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
`;

export const Placeholder = styled.p`
  font-size: 15px;
  display: flex;

  .placeholder-message {
    margin-left: 10px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50px;
  width: 24px;
  height: 24px;
`;

export const Name = styled.span`
  margin-left: 10px;
`;
