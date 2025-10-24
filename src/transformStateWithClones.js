'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const resultAllActions = [];
  let stateCopy = { ...state };

  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        stateCopy = { ...stateCopy, ...extraData };
        break;
      case 'removeProperties':
        for (const element of keysToRemove) {
          delete stateCopy[element];
        }
        break;
      case 'clear':
        for (const key in stateCopy) {
          delete stateCopy[key];
        }
        break;
      default:
        break;
    }
    resultAllActions.push({ ...stateCopy });
  }

  return resultAllActions;
}

module.exports = transformStateWithClones;
