import express from 'express';
import compression from 'compression';
import etag from 'etag';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path'; // Import the path module

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use((req, res, next) => {
  res.set('ETag', etag(req.url));
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


