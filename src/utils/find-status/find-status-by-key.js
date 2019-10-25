import findStatus from '.';

/**
 * @description
 * This method finds HTTP status by key
 *
 * @param {String} statusKey - The HTTP Status key
 * @return {Object}
 */
function findStatusByKey(statusKey) {
  return findStatus(statusKey, 'key');
}

export default findStatusByKey;
