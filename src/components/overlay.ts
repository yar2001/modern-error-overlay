import OpenIconSvg from '../open-outline.svg';
import { OverlayError } from '../type';
import { html } from '../util';

export function ErrorOverlayHtml(errors: OverlayError[], selectedError: number) {
  const { title, message, path, codeFrame, stack = '' } = errors[selectedError];
  return html`
    <div class="fixed inset-0 z-[9000] pt-[10vh] px-4 box-border">
      <div id="error-overlay-background" class="bg-gray-600 bg-opacity-10 inset-0 fixed -z-10 backdrop-blur"></div>
      <div
        class="shadow-xl rounded-lg overflow-hidden border-solid border-0 bg-white border-t-4 border-red-400 max-w-4xl mx-auto "
      >
        <div
          class="relative px-5 py-3 sm:px-7 sm:py-5 space-y-3 overflow-y-auto overflow-x-hidden break-words max-h-[75vh] h-max"
        >
          <div class="flex items-center gap-2">
            <div class="space-x-0.5">
              <button
                id="error-overlay-back-button"
                class="${selectedError === 0
                  ? 'bg-red-200 cursor-not-allowed'
                  : 'bg-red-400 hover:bg-red-500 cursor-pointer'} border-none transition-all active:scale-95 p-1 rounded-md text-white shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 block" viewBox="0 0 512 512">
                  <title>Arrow Back</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="48"
                    d="M244 400L100 256l144-144M120 256h292"
                  />
                </svg>
              </button>
              <button
                id="error-overlay-forward-button"
                class="${selectedError === errors.length - 1
                  ? 'bg-red-200 cursor-not-allowed'
                  : 'bg-red-400 hover:bg-red-500 cursor-pointer'} border-none transition-all active:scale-95 p-1 rounded-md text-white shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 block" viewBox="0 0 512 512">
                  <title>Arrow Forward</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="48"
                    d="M268 112l144 144-144 144M392 256H100"
                  />
                </svg>
              </button>
            </div>
            <div class="text-slate-400">${selectedError + 1} of ${errors.length} unhandled error</div>
          </div>
          <button
            id="error-overlay-close-button"
            class="cursor-pointer absolute border-none bg-white top-2 right-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 block sm:inline-block" viewBox="0 0 512 512">
              <title>Close</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
          <div>
            <h1 class="my-0 text-2xl sm:text-3xl font-semibold text-gray-700 text-left p-0">${title}</h1>
            <div class="text-red-400 font-semibold text-sm sm:text-lg">${message}</div>
          </div>
          <div class="space-y-1">
            <h2 class="my-0 text-base sm:text-2xl text-gray-700">Source</h2>
            <a
              class="text-gray-500 text-sm sm:text-lg hover:underline flex flex-wrap justify-between items-center gap-2"
              href="vscode://file${path}"
            >
              ${path}
              <img class="h-5 w-5 hidden sm:inline-block" src="${OpenIconSvg}" />
            </a>
            <pre class="p-3 text-sm sm:text-base rounded-md bg-gray-900 text-white overflow-x-auto">${codeFrame}</pre>
          </div>
          ${stack &&
          `<div class="space-y-1">
            <h2 class="my-0 text-base sm:text-2xl text-gray-700">Call Stack</h2>
            <div class="space-y-2">
              ${(stack + '\n').replace(
                /(.+)\n\s*(.+)\n/g,
                html`<div class="text-base sm:text-lg text-stone-500">
                  $1
                  <a class="text-xs sm:text-sm text-stone-400 ml-4 underline block" href="vscode://file$2">$2</a>
                </div>`
              )}
            </div>
          </div>`}
        </div>
      </div>
    </div>
  `;
}
