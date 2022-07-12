/**
 * Return origin string (for html-lit extension intelligence)
 */
export function html(strings: TemplateStringsArray, ...exps: unknown[]) {
    return strings.reduce((p, v) => p += v + (exps.shift() ?? ''), '')
}

export function escapeHtml(html:string)
{
    return html
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }