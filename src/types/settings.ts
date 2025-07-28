import { FAQI } from "./FAQ";

export interface SettingsI {
  title: string | null;
  privacy_policy: string; // HTML content
  about_us_title: string;
  about_us_text: string; // HTML content
  about_us_image: string;
  terms_and_conditions: string; // HTML content
  mobile: string;
  email: string | null;
  android_app_link: string | null;
  ios_app_link: string | null;
  whatsapp: string | null;
  snapchat: string | null;
  instagram: string | null;
  facebook: string | null;
  x: string | null; // e.g., "x.com"
  FAQs: FAQI[];
}
