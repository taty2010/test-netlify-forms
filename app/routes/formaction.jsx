import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export async function action({request}) {
    console.log("Here we are making a request with the backend")
    const data = await request.formData();
    await fetch(`${request.url}/some-form`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data).toString()
    })

    return redirect("/formaction")
}


export default function FormPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Form method="post">
        <input type="hidden" name="form-name" value="some-form" />
        {/* Replace with hidden style class */}
        <p style={{display: "none"}}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
        <textarea name="message"  />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
