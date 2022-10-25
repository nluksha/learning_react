import express from 'express';
import ReactDOMServer from 'react-dom/server';

import {Menu} from '../src/Menu';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static("./build"));

app.get("/*", (req, res) => {
  const appView = ReactDOMServer.renderToString(<Menu />);

  console.log('appView', appView);

  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, "utf8", (err, data) => {
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${appView}</div>`))
  })
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
