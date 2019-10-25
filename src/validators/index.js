export { default as validateHttpStatus } from './validate-http-status';

// 1×× Informational
export { default as isContinue } from './informational/is-continue';
export { default as isProcessing } from './informational/is-processing';
export {
  default as isSwitchingProtocols
} from './informational/is-switching-protocols';

// 2×× Success
export { default as isOk } from './success/is-ok';
export { default as isCreated } from './success/is-created';
export { default as isAccepted } from './success/is-accepted';
export {
  default as isNonAuthoritativeInformation
} from './success/is-non-authoritative-information';
export { default as isNoContent } from './success/is-no-content';
export { default as isResetContent } from './success/is-reset-content';
export { default as isPartialContent } from './success/is-partial-content';
export { default as isMultiStatus } from './success/is-multi-status';
export { default as isAlreadyReported } from './success/is-already-reported';
export { default as isImUsed } from './success/is-im-used';

// 3×× Redirection
export {
  default as isMultipleChoices
} from './redirection/is-multiple-choices';
export {
  default as isMovedPermanently
} from './redirection/is-moved-permanently';
export { default as isFound } from './redirection/is-found';
export { default as isSeeOther } from './redirection/is-see-other';
export { default as isNotModified } from './redirection/is-not-modified';
export { default as isUseProxy } from './redirection/is-use-proxy';
export {
  default as isTemporaryRedirect
} from './redirection/is-temporary-redirect';
export {
  default as isPermanentRedirect
} from './redirection/is-permanent-redirect';

// 4×× Client Error
export { default as isUnauthorized } from './client-error/is-unauthorized';

// 5×× Server Error
