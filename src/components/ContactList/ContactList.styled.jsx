import styled from '@emotion/styled';

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const DeleteButton = styled.p`
  padding: 2px 10px;
  border: 1px solid #8a9ec1;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #8a9ec1;
  }
`;
