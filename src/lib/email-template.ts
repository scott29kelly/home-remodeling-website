interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

export function buildContactEmail(data: ContactFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #2e2e2e;">
      <div style="border-bottom: 3px solid #B08D57; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="margin: 0; font-size: 22px; color: #2e2e2e;">New Project Inquiry</h1>
        <p style="margin: 4px 0 0; font-size: 14px; color: #6b6b6b;">via scottromconstruction.com</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; width: 120px; vertical-align: top;">Name</td>
          <td style="padding: 8px 0; font-size: 15px; font-weight: 600;">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; vertical-align: top;">Email</td>
          <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${data.email}" style="color: #B08D57;">${data.email}</a></td>
        </tr>
        ${data.phone ? `
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; vertical-align: top;">Phone</td>
          <td style="padding: 8px 0; font-size: 15px;"><a href="tel:${data.phone}" style="color: #B08D57;">${data.phone}</a></td>
        </tr>` : ''}
        ${data.projectType ? `
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #6b6b6b; vertical-align: top;">Project Type</td>
          <td style="padding: 8px 0; font-size: 15px;">${data.projectType}</td>
        </tr>` : ''}
      </table>

      ${data.message ? `
      <div style="background: #f8f6f3; border-left: 3px solid #B08D57; padding: 16px; margin-bottom: 24px;">
        <p style="margin: 0 0 4px; font-size: 13px; color: #6b6b6b;">Message</p>
        <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
      </div>` : ''}

      <p style="font-size: 12px; color: #9a9a9a; margin-top: 32px;">
        Reply directly to this email to respond to ${data.firstName}.
      </p>
    </div>
  `;
}
