import emailjs from '@emailjs/browser';
import { CONTACT_INFO } from '../data/profile';
import type { InquiryForm } from '../types';

export interface MessageResult {
    success: boolean;
    message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || CONTACT_INFO.email;

export const MESSAGE_SERVICE_ENABLED = true;

export const MESSAGE_SERVICE_DISABLED_MESSAGE =
    'O envio de mensagens está temporariamente indisponível.';

export async function sendMessage(formData: InquiryForm): Promise<MessageResult> {
    if (!MESSAGE_SERVICE_ENABLED) {
        return {
            success: false,
            message: MESSAGE_SERVICE_DISABLED_MESSAGE,
        };
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn(
            '[EmailJS] Variáveis de ambiente em falta no ficheiro .env (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID ou VITE_EMAILJS_PUBLIC_KEY).'
        );
        return {
            success: false,
            message: 'O serviço de envio ainda não está configurado. Por favor, configure as chaves do EmailJS no ficheiro .env.',
        };
    }

    try {
        const templateParams = {
            to_email: TO_EMAIL,
            name: formData.name,
            email: formData.email,
            phone: formData.phone.trim() || 'Não indicado',
            subject: formData.subject,
            message: formData.message,
        };

        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
            publicKey: PUBLIC_KEY,
        });

        console.log('[EmailJS] Mensagem enviada com sucesso:', response.status, response.text);

        return {
            success: true,
            message: 'Mensagem enviada com sucesso! Entraremos em contacto brevemente.',
        };
    } catch (err) {
        console.error('[EmailJS] Erro ao enviar mensagem:', err);
        return {
            success: false,
            message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
        };
    }
}
