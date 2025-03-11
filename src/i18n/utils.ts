import { defaultLanguage, languages, uiTexts } from "./ui";

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in languages) return lang as keyof typeof languages;
    return defaultLanguage;
}

export function setLangInUrl(url: URL, lang: keyof typeof languages) {
    url.pathname = `/${lang}`;
    return url;
}

type TranslationType = (typeof uiTexts)[typeof defaultLanguage];

type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;

type DotNestedKeys<T> = (T extends object ?
    { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>] : "") extends infer D ? Extract<D, string> : never;

export function useTranslations(lang: keyof typeof languages) {
    return function t(key: DotNestedKeys<TranslationType>) {
        return key.split('.').reduce((obj, k) => 
            obj && typeof obj === 'object' ? obj[k as keyof typeof obj] : undefined
        , uiTexts[lang] as any) as string;
    }
}