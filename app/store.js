
import socrates from 'socrates';
import logger from 'redux-logger';
import history from 'redux-routes';

import { getGaiaVideos } from 'api';

// Setup our Socrates store.
export const store = socrates([
  history(),
  logger(),
]);

store('boot', {
  url: document.location.pathname,
  videos: getGaiaVideos,
});
