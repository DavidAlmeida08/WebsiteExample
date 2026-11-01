import type { InquiryForm } from '../types';

export interface MessageResult {
  success: boolean;
  message: string;
}

const simulate = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Sends an inquiry form submission.
 *
 * Currently simulated with client-side validation and an artificial delay.
 * To connect a real backend, replace the body of this function with a call
 * to EmailJS, Formspree, Resend, or your own REST endpoint — no UI changes needed.
 */
export async function sendMessage(form: InquiryForm): Promise<MessageResult> {
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    return {
      success: false,
      message: 'Por favor preencha todos os campos obrigatórios.',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    return {
      success: false,
      message: 'Por favor introduza um endereço de email válido.',
    };
  }

  if (!form.subject.trim()) {
    return {
      success: false,
      message: 'Por favor indique o assunto da sua mensagem.',
    };
  }

  // Simulated network delay
  await simulate(1400);

  // TODO: Replace with your delivery mechanism, e.g.:
  // const response = await fetch('/api/inquiries', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(form),
  // });
  // return response.json();

  return {
    success: true,
    message: 'Mensagem enviada com sucesso! Entraremos em contacto em breve.',
  };
}
