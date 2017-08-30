// @flow

import userAuth             from '../../../src/app/redux/modules/userAuth';
import * as userAuthActions from '../../../src/app/redux/modules/views';
import moment               from 'moment';
import userInfosMockData    from '../../../src/app/mock/userInfosMock.json';

const dateFormat = 'DD/MM/YYYY HH:mm';

describe('redux - reducer "userAuth"', () => {
  it('should return an initial state', () => {
    const initialState = {
      // actions details
      isFetching:      false,
      isLogging:       false,
      actionTime:      '',
      // userInfos
      id:              '',
      login:           '',
      firstname:       '',
      lastname:        '',
      token:           null,
      isAuthenticated: false
    };
    /* eslint-disable no-undefined */
    expect(userAuth(undefined, {})).toEqual(initialState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to CHECK_IF_USER_IS_AUTHENTICATED action', () => {
    const now = moment().format(dateFormat);

    const action = {
      type: 'CHECK_IF_USER_IS_AUTHENTICATED',
      isAuthenticated: true,
      token:           userInfosMockData.token,
      user:            userInfosMockData.user
    };

    const expectedState = {
      // actions details
      isFetching:      false,
      isLogging:       false,
      actionTime:      now,
      // userInfos
      token:           userInfosMockData.token,
      id:              userInfosMockData.user.id,
      login:           userInfosMockData.user.login,
      firstname:       userInfosMockData.user.firstname,
      lastname:        userInfosMockData.user.lastname,
      isAuthenticated: true
    };
    /* eslint-disable no-undefined */
    expect(userAuth(undefined, action)).toEqual(expectedState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to REQUEST_USER_INFOS_DATA action', () => {
    const now = moment().format(dateFormat);

    const action = {
      type: 'REQUEST_USER_INFOS_DATA'
    };

    const expectedState = {
      // actions details
      isFetching:      true,
      isLogging:       false,
      actionTime:       now,
      // userInfos
      id:              '',
      login:           '',
      firstname:       '',
      lastname:        '',
      token:           null,
      isAuthenticated: false
    };
    /* eslint-disable no-undefined */
    expect(userAuth(undefined, action)).toEqual(expectedState);
    /* eslint-enable no-undefined */
  });
});
