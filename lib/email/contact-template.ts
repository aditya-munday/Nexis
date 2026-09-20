type ContactRequest = {
  name: string;
  email: string;
  message: string;
  kind: "contact" | "waitlist";
};

export function renderContactEmail(request: ContactRequest) {
  const subjectPrefix = request.kind === "waitlist" ? "Waitlist request" : "Contact request";
  return {
    subject: `${subjectPrefix} from ${request.name}`,
    text: [
      `${subjectPrefix}`,
      "",
      `Name: ${request.name}`,
      `Email: ${request.email}`,
      "",
      request.message,
    ].join("\n"),
    html: `
      <h2>${subjectPrefix}</h2>
      <p><strong>Name:</strong> ${escapeHtml(request.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(request.email)}</p>
      <p>${escapeHtml(request.message).replace(/\n/g, "<br />")}</p>
    `,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
