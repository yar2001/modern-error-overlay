import { filter, fromEvent, merge, Subject, Subscription } from 'rxjs';
import { ErrorOverlayHtml } from './components/overlay';
import { ErrorStatusHtml } from './components/status';
import './style.css';
import { OverlayError } from './type';

const errorOverlay = document.createElement('div');
errorOverlay.id = 'error-overlay';

// import { mockOverlay } from './mock';
window.onload = function () {
  document.body.append(errorOverlay);
  // mockOverlay();
};

const command$ = new Subject<'open' | 'close' | 'refresh'>();

let errors: OverlayError[] = [];
let isOpen = false;
let selectedError = 0;

export function addErrorToOverlay(err: OverlayError) {
  errors.push(err);
  if (errors.length === 1) {
    isOpen = true;
  }
  if (isOpen) {
    command$.next('open');
  } else {
    command$.next('close');
  }
}

export function resetErrorOverlay() {
  errors = [];
  isOpen = false;
  selectedError = 0;
  errorOverlay.innerHTML = '';
}

let clickSubscriptions: Subscription[] = [];

command$.pipe(filter((v) => v === 'open')).subscribe(() => {
  isOpen = true;
  errorOverlay.innerHTML = ErrorOverlayHtml(errors, selectedError);

  const background = document.querySelector<HTMLDivElement>('#error-overlay-background')!;
  const closeButton = document.querySelector<HTMLButtonElement>('#error-overlay-close-button')!;
  const backButton = document.querySelector<HTMLButtonElement>('#error-overlay-back-button')!;
  const forwardButton = document.querySelector<HTMLButtonElement>('#error-overlay-forward-button')!;

  clickSubscriptions.forEach((subscription) => subscription.unsubscribe());
  clickSubscriptions = [];
  clickSubscriptions.push(
    merge(fromEvent(background, 'click'), fromEvent(closeButton, 'click')).subscribe(() => {
      command$.next('close');
    }),
    fromEvent(backButton, 'click').subscribe(() => {
      if (selectedError > 0) {
        selectedError--;
        command$.next('open');
      }
    }),
    fromEvent(forwardButton, 'click').subscribe(() => {
      if (selectedError < errors.length - 1) {
        selectedError++;
        command$.next('open');
      }
    }),
  );
});

command$.pipe(filter((v) => v === 'close')).subscribe(() => {
  isOpen = false;
  errorOverlay.innerHTML = ErrorStatusHtml(errors.length);

  const openButton = document.querySelector<HTMLButtonElement>('#error-overlay-open-button')!;

  clickSubscriptions.forEach((subscription) => subscription.unsubscribe());
  clickSubscriptions = [];
  clickSubscriptions.push(
    fromEvent(openButton, 'click').subscribe(() => {
      command$.next('open');
    }),
  );
});
