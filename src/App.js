import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import 'assets/sass/styles.sass';

import ErrorPage from 'pages/error-page/ErrorPage';
import AppRoutes from 'routes/AppRoutes';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
