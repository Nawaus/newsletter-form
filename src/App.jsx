import { AppGlobalStyle } from "./App.style";
import Info from "./components/Info";
import Form from "./components/Form/style";
import Title from "./components/Title/index";
import iconList from "./assets/icon-list.svg";
import Input from "./components/Input";

function App() {
  return (
    <>
      <AppGlobalStyle />
      <Form>
        <Title text="Stay Updated!" />
        <Info content="Join 60,000+ product managers receiving monthly updates on:" />
        <ul>
          <li>
            <img src={iconList} alt={iconList} />
            <span>Product discovery and building what matters</span>
          </li>
          <li>
            <img src={iconList} alt={iconList} />
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li>
            <img src={iconList} alt={iconList} />
            <span> And much more!</span>
          </li>
        </ul>
        <Input />
      </Form>
    </>
  );
}

export default App;
