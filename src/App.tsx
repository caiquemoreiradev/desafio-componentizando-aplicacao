import Routes from './routes';

import { MoviesProvider } from './contexts/MovieContext';

export function App() {

  return (
    <MoviesProvider>
      <Routes />
    </MoviesProvider>
  )
}