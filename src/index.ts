import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import slugify from 'slugify'

import { form, autocomplete, grid } from './data'

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/form', (_, res) => {
  res.json(form);
})

app.get('/autocomplete', (req, res) => {
  res.json({
    entries: autocomplete.filter(v =>
      slugify(v.toLocaleLowerCase())
      .includes(slugify(req.query.keyword.toLocaleLowerCase())))
  })
})

app.get('/grid', (_, res) => {
  res.json(grid)
})

app.listen(port, () => console.log(`Server running at ${port}`));
