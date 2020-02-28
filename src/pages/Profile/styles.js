import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    position: relative;

    input {
      background: rgba(0,0,0,0.5);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #FFF;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255,255,255,0.8);
      }
    }
    
    hr {
        border: 0;
        height: 1px;
        background: rgba(255,255,255,0.2);
        margin: 10px 0 20px;
      }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.08, '#3b9eff')};
      }
    }
  }
    
    > button {
      width: 100%;
      margin: 10px 0 0;
      height: 44px;
      background: ${darken(0.08, '#f63c79')};
      font-weight: bold;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.03, '#e40a3f')};
      }
    } 
`;
