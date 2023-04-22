import { createBrowserRouter } from 'react-router-dom';
import { route } from './misc/constants';
import APIPage from './routes/API';
import Root from './routes/AppRoot'
import FAQ from './routes/FAQ';
import Home from './routes/Home';
import RecognitionFullResult from './routes/RecognitionFullResult';
import Recognizer from './routes/Recognizer';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: route.ROOT,
        element: <Home />,
      },
      {
        path: route.RECOGNIZER,
        element: <Recognizer />,
      },
      {
        path: route.API,
        element: <APIPage />,
      },
      {
        path: route.FAQ,
        element: <FAQ />,
      },
      {
        path: route.FULL_RESULTS,
        element: <RecognitionFullResult />,
      },
    ],
  },
]);
