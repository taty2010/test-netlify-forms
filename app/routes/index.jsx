export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <form method="POST">
        <input type="hidden" name="form-name" value="feedback-form" />
        <textarea name="message"  />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
