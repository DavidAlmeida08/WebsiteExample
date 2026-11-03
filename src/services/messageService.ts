import type { InquiryForm } from '../types';

export interface MessageResult {
  success: boolean;
  message: string;
}

export const MESSAGE_SERVICE_ENABLED = false;
export const MESSAGE_SERVICE_DISABLED_MESSAGE =
  'O envio de mensagens est\u00e1 temporariamente indispon\u00edvel.';

export async function sendMessage(formData: InquiryForm): Promise<MessageResult> {
  void formData;

  return {
    success: false,
    message: MESSAGE_SERVICE_DISABLED_MESSAGE,
  };
}
