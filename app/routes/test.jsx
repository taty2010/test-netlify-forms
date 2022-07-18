import { redirect } from "@remix-run/node";

export const action = async ({request}) => {
  const body = await request.formData();
  console.log(body)
  return null;
}

export default function TestPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <form data-netlify="true" name="feedback-form" method="post">
        <input type="hidden" name="form-name" value="feedback-form" />
        <textarea name="message"  />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
