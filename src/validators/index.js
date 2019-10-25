export { default as validateHttpStatus } from './validate-http-status';

// 1×× Informational
export { default as isContinue } from './informational/is-continue';
export { default as isProcessing } from './informational/is-processing';
export {
  default as isSwitchingProtocols
} from './informational/is-switching-protocols';

// 2×× Success
export { default as isCreated } from './success/is-created';
export { default as isOk } from './success/is-ok';

// 3×× Redirection
export {
  default as isMovedPermanently
} from './redirection/is-moved-permanently';

// 4×× Client Error
export { default as isUnauthorized } from './client-error/is-unauthorized';
