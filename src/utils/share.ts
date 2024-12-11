export const createShareMessage = (name: string, url: string): string => {
  return `Hey ${name}, I want to give you a sneak peek into what you'll be learning after you join our program.
I have sent you an exclusive sample video link that covers some important topics. Feel free to watch it. Here is the link: ${url}`;
};

export const createWhatsAppUrl = (number: string, message: string): string => {
  return `https://web.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
};