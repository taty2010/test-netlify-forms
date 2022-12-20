import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import * as React from "react";

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);

  // Netlify will accept form submissions to any valid URL
  // by submitting to a static file we skip Remix's POST catcher
  fetch('/some-form.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      window.location.href = '/success/';
    })
    .catch((error) => alert(error));
};

const NetlifyForm = ({children, formName, action}) => {
    return (
        <form action={action} method="POST" data-netlify="false" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value={formName}/>
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

  let [isForm, setIsForm] = React.useState(<div></div>);
  
  React.useEffect(() => {
    const setForm = () => {
      return(
        <NetlifyForm action="/success" formName="some-form">
          <textarea name="message"  />
          <button type="submit">Submit</button>
        </NetlifyForm>
      )
    }

    setForm();
    setIsForm(setForm);
  }, []);
  // console.log(isForm)
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        {/* <NetlifyForm action="/some-form" formName="some-form">
          <textarea name="message"  />
          <button type="submit">Submit</button>
        </NetlifyForm> */}
        {isForm && isForm}
      </div>
    );
}
