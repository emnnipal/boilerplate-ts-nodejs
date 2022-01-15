import app from './App';
import { APP, PORT } from './shared/configs';
import { logger } from './shared/utils/Logger';

app.listen(PORT, () => {
  logger.info('APP', `Listening on PORT: ${PORT}, APP: ${APP}`);
});
