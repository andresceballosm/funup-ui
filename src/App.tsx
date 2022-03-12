import './App.styled.ts';
import { useRoutes } from 'react-router-dom';
import routes from 'navigation/router.navigation';
import { AppWrapper } from 'App.styled';

function App() {
  const content = useRoutes(routes);
  return <AppWrapper>{content}</AppWrapper>;
}

export default App;
