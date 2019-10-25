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
export { default as isBadRequest } from './client-error/is-bad-request';
export {
  default as isClientClosedRequest
} from './client-error/is-client-closed-request';
export { default as isConflict } from './client-error/is-conflict';
export {
  default as isConnectionClosedWithoutResponse
} from './client-error/is-connection-closed-without-response';
export {
  default as isExpectationFailed
} from './client-error/is-expectation-failed';
export {
  default as isFailedDependency
} from './client-error/is-failed-dependency';
export { default as isForbidden } from './client-error/is-forbidden';
export { default as isGone } from './client-error/is-gone';
export { default as isImTeapot } from './client-error/is-im-teapot';
export { default as isLengthRequired } from './client-error/is-length-required';
export { default as isLocked } from './client-error/is-locked';
export {
  default as isMethodNotAllowed
} from './client-error/is-method-not-allowed';
export {
  default as isMisdirectedRequest
} from './client-error/is-misdirected-request';
export { default as isNotAcceptable } from './client-error/is-not-acceptable';
export { default as isNotFound } from './client-error/is-not-found';
export {
  default as isPayloadTooLarge
} from './client-error/is-payload-too-large';
export {
  default as isPaymentRequired
} from './client-error/is-payment-required';
export {
  default as isPreconditionFailed
} from './client-error/is-precondition-failed';
export {
  default as isPreconditionRequired
} from './client-error/is-precondition-required';
export {
  default as isProxyAuthenticationRequired
} from './client-error/is-proxy-authentication-required';
export {
  default as isRequestHeaderFieldsTooLarge
} from './client-error/is-request-header-fields-too-large';
export { default as isRequestTimeout } from './client-error/is-request-timeout';
export {
  default as isRequestUriTooLong
} from './client-error/is-request-uri-too-long';
export {
  default as isRequestedRangeNotSatisfiable
} from './client-error/is-requested-range-not-satisfiable';
export {
  default as isTooManyRequests
} from './client-error/is-too-many-requests';
export { default as isUnauthorized } from './client-error/is-unauthorized';
export {
  default as isUnavailableForLegalReasons
} from './client-error/is-unavailable-for-legal-reasons';
export {
  default as isUnprocessableEntity
} from './client-error/is-unprocessable-entity';
export {
  default as isUnsupportedMediaType
} from './client-error/is-unsupported-media-type';
export {
  default as isUpgradeRequired
} from './client-error/is-upgrade-required';

// 5×× Server Error
export { default as isBadGateway } from './server-error/is-bad-gateway';
export { default as isGatewayTimeout } from './server-error/is-gateway-timeout';
export {
  default as isHttpVersionNotSupported
} from './server-error/is-http-version-not-supported';
export {
  default as isInsufficientStorage
} from './server-error/is-insufficient-storage';
export {
  default as isInternalServerError
} from './server-error/is-internal-server-error';
export { default as isLoopDetected } from './server-error/is-loop-detected';
export {
  default as isNetworkAuthenticationRequired
} from './server-error/is-network-authentication-required';
export {
  default as isNetworkConnectTimeoutError
} from './server-error/is-network-connect-timeout-error';
export { default as isNotExtended } from './server-error/is-not-extended';
export { default as isNotImplemented } from './server-error/is-not-implemented';
export {
  default as isServiceUnavailable
} from './server-error/is-service-unavailable';
export {
  default as isVariantAlsoNegotiates
} from './server-error/is-variant-also-negotiates';
