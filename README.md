## Proof of Concept with Netlify Forms + Remix

In order for us to get detection with Netlify, we are suggesting putting an html file into the public folder which will allow Netlify to detect the form and create it online there. From there, we would still need to create our form within our actual route like `routes/test.jsx` where we use our action to the HTML page but with the method `POST`. This way we are still utilizing that page. We can also still incorporate things like honeypot detection.
