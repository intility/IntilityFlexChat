export const languageNameFromCode = (code: string): string => {
    switch (code) {
        case 'fr-FR':
            return 'French / Française';
        case 'es-ES':
            return 'Spanish / Español';
        case 'it-IT':
            return 'Italian / Italiano';
        case 'ja-JP':
            return 'Japanese / 日本語';
        case 'de-DE':
            return 'German / Deutsch';
        case 'en-US':
            return 'English';
        default:
            return `Unknown: ${code}`;
    }
};

export const generateLanguages = (preferredLanguage: string) => {
    const allowedLanguages: string[] = ['en-US', 'es-ES', 'fr-FR', 'it-IT', 'de-DE', 'ja-JP'];

    return allowedLanguages
        .sort((a, b) => languageNameFromCode(a).localeCompare(languageNameFromCode(b)))
        .map((code) => ({
            value: code,
            label: languageNameFromCode(code),
            selected: allowedLanguages.includes(preferredLanguage)
                ? code === preferredLanguage
                : code === 'en-us',
        }));
};
