import { html } from '../util';

export function ErrorStatusHtml(errorNum: number) {
  if (errorNum === 0) {
    return '';
  }
  return html`
    <button
      id="error-overlay-open-button"
      class="cursor-pointer border-none fixed bottom-4 left-4 z-[9000] py-2 pl-4 pr-5 bg-red-400 active:bg-red-500 shadow-xl text-white rounded-lg hover:scale-110 transition-all flex items-center space-x-1"
    >
      <svg
        class="w-7 h-7 fill-white inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>Alert Circle</title>
        <path
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" />
      </svg>
      <div>Error ${errorNum}</div>
    </button>
  `;
}
