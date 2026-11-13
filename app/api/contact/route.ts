import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, use_case, message } = await req.json();

    if (!name || !email || !use_case) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const useCaseLabels: Record<string, string> = {
      "customer-support": "Customer support agent",
      "coding-assistant": "Coding assistant",
      "personal-assistant": "Personal AI assistant",
      "multi-agent": "Multi-agent system",
      "other": "Other",
    };

    await resend.emails.send({
      from: "MindVault <noreply@getmindvault.ai>",
      to: "todd@collectivepoint.com",
      replyTo: email,
      subject: `🧠 New MindVault waitlist signup — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px 24px;">
          <div style="background: white; border-radius: 12px; padding: 32px; border: 1px solid #e2e8f0;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
              <div style="width: 40px; height: 40px; background: #4f46e5; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">M</div>
              <span style="font-size: 20px; font-weight: 700; color: #0f172a;">MindVault</span>
            </div>
            <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin: 0 0 20px;">New waitlist signup</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 130px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Building</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${useCaseLabels[use_case] ?? use_case}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0 0; color: #64748b; font-size: 14px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0 0; color: #0f172a; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 28px; padding: 16px; background: #f1f5f9; border-radius: 8px;">
              <a href="mailto:${email}" style="display: inline-block; background: #4f46e5; color: white; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600;">Reply to ${name} →</a>
            </div>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">MindVault · getmindvault.ai</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
