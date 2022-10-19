import express from 'express';
import ReactDOMServer from 'react-dom/server';

import {Menu} from '../src/Menu';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static("./build"));

app.get("/*", (req, res) => {
  const appView = ReactDOMServer.renderToString(<Menu />);

  const indexFile = path.resolve('./build/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
