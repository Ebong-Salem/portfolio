// Centralized contact configuration — change the phone number here once.
// International format, digits only, no "+" or spaces.
export const WHATSAPP_NUMBER = "237658884551";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Bonjour Salem,\nJe viens de découvrir votre portfolio et j'aimerais discuter de mon projet.";

export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildProjectWhatsAppUrl(projectName: string) {
  const message = `Bonjour Salem,\n\nJe viens de voir votre projet "${projectName}" sur votre portfolio.\n\nJ'aimerais discuter d'un projet similaire.\n\nMerci.`;
  return buildWhatsAppUrl(message);
}
