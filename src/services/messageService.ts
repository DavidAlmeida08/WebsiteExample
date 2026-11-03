import type { InquiryForm } from '../types';

export interface MessageResult {
  success: boolean;
  message: string;
}

export async function sendMessage(formData: InquiryForm): Promise<MessageResult> {

  return {
    success: true,
    message: 'Pedido validado. O envio real de mensagens ainda não está configurado.',
  };
}
