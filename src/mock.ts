export const mockError = {
    title: 'Unhandled Runtime Error',
    message: 'TypeError: console.lo is not a function',
    path: '/Users/bytedance/code/yari-playground/my-next-app/pages/about.tsx:4:2',
    codeFrame: `  10 | <button onClick={()=>{
  11 |     //@ts-expect-error
> 12 |     console.lo()
     |            ^
  13 | }}>
  14 |     click to throw new Error
  15 | </button>`,
    stack: `HTMLUnknownElement.callCallback
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (4164:0)
  Object.invokeGuardedCallbackDev
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (4213:0)
  invokeGuardedCallback
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (4277:0)
  invokeGuardedCallbackAndCatchFirstError
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (4291:0)
  executeDispatch
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (9041:0)
  processDispatchQueueItemsInOrder
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (9073:0)
  processDispatchQueue
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (9086:0)
  dispatchEventsForPlugins
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (9097:0)
  eval
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (9288:0)
  batchedUpdates$1
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (26140:0)
  batchedUpdates
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (3991:0)
  dispatchEventForPluginEventSystem
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (9287:0)
  dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (6465:0)
  dispatchEvent
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (6457:0)
  dispatchDiscreteEvent
  node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js (6430:0)
  `
  }