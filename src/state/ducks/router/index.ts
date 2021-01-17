import { connectRouter } from 'connected-react-router';
import { createHashHistory } from 'history';

export const history = createHashHistory();

const connectedRouter = connectRouter(history);

export default connectedRouter;
