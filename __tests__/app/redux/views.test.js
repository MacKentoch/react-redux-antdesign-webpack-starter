// @flow

import views                from '../../../src/app/redux/modules/views';
import * as viewsActions    from '../../../src/app/redux/modules/views';
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

describe('redux - action creator "views"', () => {
  const  now = moment().format(dateFormat);

  it('should return enterHome action object', () => {
    const enterHomeACTION = {
      type:         'ENTER_HOME_VIEW',
      currentView:  'home',
      enterTime:    now,
      leaveTime:    null
    };
    expect(viewsActions.enterHome(now)).toEqual(enterHomeACTION);
  });

  it('should return leaveHome action object', () => {
    const leaveHomeACTION = {
      type:         'LEAVE_HOME_VIEW',
      currentView:  'home',
      enterTime:    null,
      leaveTime:    now
    };
    expect(viewsActions.leaveHome(now)).toEqual(leaveHomeACTION);
  });

  it('should return enterAbout action object', () => {
    const enterAboutACTION = {
      type:         'ENTER_ABOUT_VIEW',
      currentView:  'about',
      enterTime:    now,
      leaveTime:    null
    };
    expect(viewsActions.enterAbout(now)).toEqual(enterAboutACTION);
  });

  it('should return leaveAbout action object', () => {
    const leaveAboutACTION = {
      type:         'LEAVE_ABOUT_VIEW',
      currentView:  'about',
      enterTime:    null,
      leaveTime:    now
    };
    expect(viewsActions.leaveAbout(now)).toEqual(leaveAboutACTION);
  });

  it('should return enterLogin action object', () => {
    const enterComponentsACTION = {
      type:         'ENTER_LOGIN_VIEW',
      currentView:  'Login',
      enterTime:    now,
      leaveTime:    null
    };
    expect(viewsActions.enterLogin(now)).toEqual(enterComponentsACTION);
  });

  it('should return leaveLogin action object', () => {
    const leaveComponentsACTION = {
      type:         'LEAVE_LOGIN_VIEW',
      currentView:  'Login',
      enterTime:    null,
      leaveTime:    now
    };
    expect(viewsActions.leaveLogin(now)).toEqual(leaveComponentsACTION);
  });

  it('should return enterProtected action object', () => {
    const enterComponentsACTION = {
      type:         'ENTER_PROTECTED_VIEW',
      currentView:  'Protected',
      enterTime:    now,
      leaveTime:    null
    };
    expect(viewsActions.enterProtected(now)).toEqual(enterComponentsACTION);
  });

  it('should return leaveProtected action object', () => {
    const leaveComponentsACTION = {
      type:         'LEAVE_PROTECTED_VIEW',
      currentView:  'Protected',
      enterTime:    null,
      leaveTime:    now
    };
    expect(viewsActions.leaveProtected(now)).toEqual(leaveComponentsACTION);
  });
});
