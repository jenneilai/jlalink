"use server";

import { siteContact } from "@/lib/site-config";

export type ContactFormState = {
  ok: boolean;
  message?: "success" | "error" | "rate_limit";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "error" };
  }

  if (!emailPattern.test(email) || name.length > 120 || message.length > 4000) {
    return { ok: false, message: "error" };
  }

  const payload = {
    name,
    email,
    company: company || "—",
    message,
    submittedAt: new Date().toISOString(),
  };

  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL ?? siteContact.email;

  if (resendKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "JLA Link <onboarding@resend.dev>",
          to: [notifyTo],
          reply_to: email,
          subject: `[JLA Link] New inquiry from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Company: ${payload.company}`,
            "",
            message,
          ].join("\n"),
        }),
      });

      if (!response.ok) {
        console.error("Resend error:", await response.text());
        return { ok: false, message: "error" };
      }
    } catch (error) {
      console.error("Contact form send failed:", error);
      return { ok: false, message: "error" };
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("[Contact form submission]", payload);
  }

  return { ok: true, message: "success" };
}
