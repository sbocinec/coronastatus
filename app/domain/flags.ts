// Please keep locales sorted
export type Locale =
  | 'bd'
  | 'ca'
  | 'dk'
  | 'cs-CZ'
  | 'en-AU'
  | 'en-IN'
  | 'en-MT'
  | 'en-NG'
  | 'en-SG'
  | 'en-US'
  | 'en-NE'
  | 'en'
  | 'es-AR'
  | 'es-CL'
  | 'es-CO'
  | 'es-ES'
  | 'es-MX'
  | 'fr-FR'
  | 'id-ID'
  | 'it'
  | 'ms-MY'
  | 'zh-MY'
  | 'en-MY'
  | 'lt'
  | 'nl'
  | 'no'
  | 'ne'
  | 'pt-BR'
  | 'pt-PT'
  | 'se'
  | 'sk'
  | 'tr'
  | 'uk-UA';

type LocaleToFlagMap = {
  [locale in Locale]: string;
};

const localeToFlagMap: LocaleToFlagMap = {
  bd: 'bd',
  ca: 'ca',
  'cs-CZ': 'cz',
  dk: 'dk',
  'en-AU': 'au',
  'en-IN': 'gb',
  'en-MT': 'gb',
  'en-NG': 'ng',
  'en-SG': 'gb',
  'en-US': 'us',
  en: 'gb',
  'es-AR': 'ar',
  'es-CL': 'cl',
  'es-CO': 'co',
  'es-ES': 'es',
  'es-MX': 'mx',
  'fr-FR': 'fr',
  'id-ID': 'id',
  it: 'it',
  'ms-MY': 'my',
  'zh-MY': 'cn',
  'en-MY': 'gb',
  lt: 'lt',
  nl: 'nl',
  no: 'no',
  ne: 'np',
  'en-NE': 'us',
  'pt-BR': 'br',
  'pt-PT': 'pt',
  se: 'se',
  sk: 'sk',
  tr: 'tr',
  'uk-UA': 'ua'
};

export const localeToFlag = (locale: Locale): string => localeToFlagMap[locale];
