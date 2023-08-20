import styled from "styled-components";

const Form = styled.form`
  width: 60rem;
  height: 35rem;
  border-radius: 20px;
  background: var(--White);
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.677);
  background-image: url(/src/assets/illustration-sign-up-desktop.svg);
  background-repeat: no-repeat;
  background-position: right;

  h1 {
    font-weight: 700;
    color: var(--Dark-Slate-Grey);
    font-size: 3rem;
  }

  span {
    font-weight: 400;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1em;

    li {
      display: flex;
      align-items: center;
      gap: 1em;
    }
  }

  label {
    color: var();
    font-weight: 700;
    font-size: 0.8rem;
    display: flex;
  }

  input {
    padding: 1em;
    width: 22rem;
    border-radius: 5px;
    color: var(--Grey);
    font-size: 1em;
    border: 2px solid var(--Grey);
  }
`;

export default Form;
