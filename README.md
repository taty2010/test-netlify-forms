## Proof of Concept with Netlify Forms + Remix

In order for us to get detection with Netlify, we are suggesting putting an html file into the public folder which will allow Netlify to detect the form and create it online there. From there, we would still need to create our form within our actual route like `routes/test.jsx` where we use our action to the HTML page but with the method `POST`. This way we are still utilizing that page. We can also still incorporate things like honeypot detection.

### Steps

1. Create a static html file in your `public` folder. In this example we put it under `public/some-form.html`.
2. Make sure the form has the `netlify` attribute, a `name`, and a `netlify-honeypot` with the appropriate `bot-field` input.
3. Go into your `routes` folder and create the page with the form, in our case we did this under `routes/test.jsx`. We created our form component and made sure that it included an input with the name `form-name` and the value being the same as our static form's `name` is (e.g. `some-name`).
4. Most importantly we want our `action` to point to the same route as our static page's form and its `method` being `post`
5. We also need to make sure to add the input with the `bot-field` as well to make sure any users logged in could be caught through the detection.


```html
<!-- Inside of public/some-form.html
<form netlify name="some-form" method="POST" hidden netlify-honeypot="bot-field">
  <p style="clip:rect(0 0 0 0);clip-path: inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;">
    <label>
    Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>
  <textarea name="message" ></textarea>
  <button type="submit">Submit</button>
</form>
```

```jsx
// Inside `routes/test.jsx

// Custom component we wrote to abstract some logic and make it a tad more ergonomic
const NetlifyForm = ({ action, children, formName}) => {
    return (
        <form action={action} method="post">
            <input type="hidden" name="form-name" value={formName} />
            {/* Replace with hidden style class */}
            <p style={{display: "none"}}>
                <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>
            {children}
        </form>
    )
}

export default function TestPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <NetlifyForm action="/some-form" formName="some-form">
        <textarea name="message"  />
        <button type="submit">Submit</button>
      </NetlifyForm>
    </div>
  );
}
```
