import Mailgun from 'mailgun.js';
import formData from 'form-data';

const mailgun = new Mailgun.default(formData);
const mg = mailgun.client({username: 'api', key: import.meta.env.MAILGUN_API_KEY });

export const sendNotificationEmail = async (to, subject, text) => {
    const messageData = {
        from: `noreply@${import.meta.env.MAILGUN_DOMAIN}`,
        to,
        subject,
        text,
    };

    try {
        await mg.messages.create(import.meta.env.MAILGUN_DOMAIN, messageData);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
