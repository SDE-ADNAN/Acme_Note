import express from 'express';
import fs from 'fs';
import path from 'path';
const app = express();
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'dist'),
    { maxAge: '30d' },
));

const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');
// here we serve the index.html page
app.get('/*', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const data ={
            title: 'React App',
            description: 'React App Description',
            thumbnail: 'https://via.placeholder.com/150'
        }
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>React App</title>",
            `<title>${data.title}</title>`
        )
        .replace('__META_OG_TITLE__', data.title)
        .replace('__META_OG_DESCRIPTION__', data.description)
        .replace('__META_DESCRIPTION__', data.description)
        .replace('__META_OG_IMAGE__', data.thumbnail)
        return res.send(htmlData);
    });
});

app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});