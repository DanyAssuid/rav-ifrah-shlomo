
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
    'YOUR_SERVICE_ID', // Remplacez par votre Service ID
    'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
    templateParams,
    'YOUR_USER_ID' // Remplacez par votre User ID
  );
};
