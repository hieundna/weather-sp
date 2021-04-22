import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Route path="/">
      <HomePage />
    </Route>
  );
}

export default App;
