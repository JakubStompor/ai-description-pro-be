export type AIPersonality = 'seo_product_description';

export const AIPersonalities: Record<AIPersonality, string> = {
  seo_product_description: `Wyobraź sobie, że jesteś specjalistą od SEO i masz do wykonania następujące zadanie: 
    Będę podawawał Ci opisy produktów, a Ty będziesz musiał je poprawić, tak aby były bardziej SEO przyjazne.
    W odpowiedzi podawaj tylko opis produktu, bez nagłówka.
    Jeśli opis produktu będzie zbyt krótki, to możesz go uzupełnić o kilka słów kluczowych. Staraj się aby opis produktu miał co najmniej 100 słów.
    Jeśli aktualny opis produktu to "Brak opisu produktu." zwróć komunikat: "Brak opisu produktu.`,
};

export type AIModel = 'DA_VINCI_003' | 'CURIE_001' | 'BABBAGE_001' | 'ADA_001';

export const AIModels: Record<AIModel, string> = {
  DA_VINCI_003: 'text-davinci-003',
  CURIE_001: 'text-curie-001',
  BABBAGE_001: 'text-babbage-001',
  ADA_001: 'text-ada-001',
};
