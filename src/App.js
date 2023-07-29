import Container from './components/container/Container';
import { ContextProvider } from './utils/context/context';

const App = () => (
  <ContextProvider>
    <Container />
  </ContextProvider>
);

export default App;
