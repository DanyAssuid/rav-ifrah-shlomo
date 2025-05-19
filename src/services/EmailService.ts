
import { send } from 'emailjs-com';

export const sendContactEmail = (formData: {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}) => {
  const templateParams = {
    from_name: formData.name,
    reply_to: formData.email,
    phone: formData.phone,
    wedding_date: formData.date,
    message: formData.message,
  };

  return send(
    'service_0tq5jip', // Service ID
    'template_4ealsuj', // Template ID
    templateParams,
    'PQNOhyV0lch9a3seg' // Public Key
  );
};
