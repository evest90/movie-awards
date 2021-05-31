import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: -10px;

  & > * {
    flex: 0 0 calc(100% - 10px);
    margin-bottom: 20px;
  }

  &::after {
    content: "";
    flex: 0 0 calc(100% - 10px);
  }

  @media screen and (min-width: 450px) {
    & > * {
      flex: 0 0 calc(50% - 10px);
      margin-bottom: 20px;
    }
  
    &::after {
      content: "";
      flex: 0 0 calc(50% - 10px);
    }
  }

  @media screen and (min-width: 740px) {
    & > * {
      flex: 0 0 calc(33% - 10px);
      margin-bottom: 20px;
    }
  
    &::after {
      content: "";
      flex: 0 0 calc(33% - 10px);
    }
  }
  
`

export const SubmitButtonContainer = styled.div`
  text-align: right;
`

export const ShowNomineesButtonContainer = styled.div`
  position: sticky;
  top: 20px;
`;

export const ShowNomineesButton = styled.button`
  border: none;
  outline: none;
  background-color: #808080;
  color: #fff;
  height: 40px;
  width: 100px;
  margin: 0 auto;
  border-radius: 10px;

  &:hover {
    background: #ccc;
  }
`;