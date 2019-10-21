import findStatus from '.';

function findStatusByKey(statusKey) {
  return findStatus(statusKey, 'key');
}

export default findStatusByKey;
