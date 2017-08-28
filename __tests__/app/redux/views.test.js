// @flow

import views                from '../../../src/app/redux/modules/views';
import moment               from 'moment';

const dateFormat = 'DD/MM/YYYY HH:mm';

describe('redux - reducer "views"', () => {
  it('should return an initial state', () => {
    const initialState = {
      currentView:  'not set',
      enterTime:    null,
      leaveTime:    null
    };
    /* eslint-disable no-undefined */
    expect(views(undefined, {})).toEqual(initialState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to ENTER_HOME_VIEW action', () => {
    const now = moment().format(dateFormat);
    const action = {
      type:         'ENTER_HOME_VIEW',
      currentView:  'home',
      enterTime:    now,
      leaveTime:    null
    };
    const expectedState = {
      currentView:  'home',
      enterTime:    now,
      leaveTime:    null
    };
    /* eslint-disable no-undefined */
    expect(views(undefined, action)).toEqual(expectedState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to LEAVE_HOME_VIEW action', () => {
    const now = moment().format(dateFormat);
    const actionLeaveHome = {
      type:         'LEAVE_HOME_VIEW',
      currentView:  'home',
      enterTime:    null,
      leaveTime:    now
    };
    const expectedState = {
      currentView:  'home',
      enterTime:    null,
      leaveTime:    now
    };
    expect(views({currentView: 'home'}, actionLeaveHome)).toEqual(expectedState);
  });


  it('should set state according to ENTER_ABOUT_VIEW action', () => {
    const now = moment().format(dateFormat);
    const action = {
      type:         'ENTER_ABOUT_VIEW',
      currentView:  'about',
      enterTime:    now,
      leaveTime:    null
    };
    const expectedState = {
      currentView:  'about',
      enterTime:    now,
      leaveTime:    null
    };
    /* eslint-disable no-undefined */
    expect(views(undefined, action)).toEqual(expectedState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to LEAVE_ABOUT_VIEW action', () => {
    const now = moment().format(dateFormat);
    const actionLeaveAbout = {
      type:         'LEAVE_ABOUT_VIEW',
      currentView:  'about',
      enterTime:    null,
      leaveTime:    now
    };
    const expectedState = {
      currentView:  'about',
      enterTime:    null,
      leaveTime:    now
    };
    expect(views({currentView: 'about'}, actionLeaveAbout)).toEqual(expectedState);
  });

  it('should set state according to ENTER_LOGIN_VIEW action', () => {
    const now = moment().format(dateFormat);
    const actionEnterComponents = {
      type:         'ENTER_LOGIN_VIEW',
      currentView:  'login',
      enterTime:    now,
      leaveTime:    null
    };
    const expectedState = {
      currentView:  'login',
      enterTime:    now,
      leaveTime:    null
    };
    /* eslint-disable no-undefined */
    expect(views(undefined, actionEnterComponents)).toEqual(expectedState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to LEAVE_LOGIN_VIEW action', () => {
    const now = moment().format(dateFormat);
    const actionLeaveComponents = {
      type:         'LEAVE_LOGIN_VIEW',
      currentView:  'login',
      enterTime:    null,
      leaveTime:    now
    };
    const expectedState = {
      currentView:  'login',
      enterTime:    null,
      leaveTime:    now
    };
    expect(views({currentView: 'login'}, actionLeaveComponents)).toEqual(expectedState);
  });


  it('should set state according to ENTER_PROTECTED_VIEW action', () => {
    const now = moment().format(dateFormat);
    const actionEnterComponents = {
      type:         'ENTER_PROTECTED_VIEW',
      currentView:  'protected',
      enterTime:    now,
      leaveTime:    null
    };
    const expectedState = {
      currentView:  'protected',
      enterTime:    now,
      leaveTime:    null
    };
    /* eslint-disable no-undefined */
    expect(views(undefined, actionEnterComponents)).toEqual(expectedState);
    /* eslint-enable no-undefined */
  });

  it('should set state according to LEAVE_PROTECTED_VIEW action', () => {
    const now = moment().format(dateFormat);
    const actionLeaveComponents = {
      type:         'LEAVE_PROTECTED_VIEW',
      currentView:  'protected',
      enterTime:    null,
      leaveTime:    now
    };
    const expectedState = {
      currentView:  'protected',
      enterTime:    null,
      leaveTime:    now
    };
    expect(views({currentView: 'protected'}, actionLeaveComponents)).toEqual(expectedState);
  });
});
