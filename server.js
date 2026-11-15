//Markdown files (.md) ka content read karna, usko HTML mein convert karna
//aur HTML page ke andar insert karna.



/*



Concept: Template Rendering



const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
MarkdownIt ek library hai jo Markdown ko HTML mein convert karti hai.
new MarkdownIt() se hum iska ek object (md) create karte hain.



function renderMarkdown(file) {
    const markdown = fs.readFileSync(
        path.join(__dirname, 'content', file + '.md'),
        'utf8'
    );

    return md.render(markdown);
}
-->
Function ek filename leta hai
renderMarkdown('experience');
Yahan file ki value 'experience' ho jayegi.
/project/content/experience.md
-->
File read hoti hai
readFileSync() = file ko synchronously read karna.
'utf8' = file ka content text format mein read karna.
Ab markdown variable mein file ka actual text aa jayega.
-->
return md.render(markdown);
Ye Markdown text ko HTML mein convert karke return kar deta hai.



html = html.replace('{{start}}', renderMarkdown('start'));
html = html.replace('{{experience}}', renderMarkdown('experience'));
html = html.replace('{{end}}', renderMarkdown('end'));
Ab replace() kya karega?
{{start}} ko start.md ke converted HTML se replace karega.
{{experience}} ko experience.md ke converted HTML se replace karega.
{{end}} ko end.md ke converted HTML se replace karega.

md-->
# About Us
This is my website.

html-->
<section>
    <h1>About Us</h1>
    <p>This is my website.</p>
</section>



*/


const express = require('express');
const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');

// 1. Initialize dependencies
const app = express();
const md = new MarkdownIt();

// 2. Static files
app.use(express.static('public'));

// 3. EXPERIENCE
const EXPERIENCE = [
    'summer-project-training',
    'summer-training',
    'project-portfolio'
];

// 4. Markdown rendering function
// function renderMarkdown(file) {
//     const markdown = fs.readFileSync(
//         path.join(__dirname, 'content', file + '.md'),
//         'utf8'
//     );

//     return md.render(markdown);
// }
function renderMarkdown(file) {
    try {
        const markdown = fs.readFileSync(
            path.join(__dirname, 'content', file + '.md'),
            'utf8'
        );

        return md.render(markdown);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(`No content for ${file}, skipping`);
        }
    }
}

// 5. HTML template rendering function
function renderPage() {
    let html = fs.readFileSync(
        path.join(__dirname, 'views', 'index.html'),
        'utf8'
    );

    html = html.replace('{{start}}', renderMarkdown('start'));
    html = html.replace('{{experience}}', renderMarkdown('experience'));
    html = html.replace('{{end}}', renderMarkdown('end'));

    return html;
}

// 6. Home Route
app.get('/', (req, res) => {
    res.send(renderPage());
});

// 7. Work Route
app.get('/:work', (req, res) => {
    const work = req.params.work;

    if (!EXPERIENCE.includes(work)) {
        return res.status(404).send('Page not found');
    }

    // Render work page
    let html = fs.readFileSync(
        path.join(__dirname, 'views', 'work.html'),
        'utf8'
    );

    html = html.replace('{{work}}', renderMarkdown(work));

    res.send(html);
});

// 8. Not Found Route
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// 9. Start server
app.listen(process.env.PORT || 3000);
