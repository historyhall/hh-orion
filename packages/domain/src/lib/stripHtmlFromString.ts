export function stripHtmlFromString(text: string) {
    return text.replace(/<[^>]*>/g, '');
}