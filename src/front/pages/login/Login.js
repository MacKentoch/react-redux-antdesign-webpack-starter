// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Row, Col, Button, Form, Input, Icon, Layout } from 'antd';
import LoginForm from './styled/LoginForm';
import LoginIcon from './styled/LoginIcon';
import auth from '../../services/auth';
import { type RouterProps } from '../../types/react-router';
import { type UserAuthActions } from '../../types/redux/userAuth';
import { type FormCreateInjectedProps } from '../../types/antd/formHoc';
// #endregion

// #region flow types
export type Props = {
  isAuthenticated: boolean,
  isFetching: boolean,
  isLogging: boolean,
  ...any,
} & RouterProps &
  FormCreateInjectedProps &
  UserAuthActions;

export type State = { ...any };
// #endregion

// #region constants
const FormItem = Form.Item;
const { Content } = Layout;
// #endregion

class Login extends PureComponent<Props, State> {
  static defaultProps = {
    isFetching: false,
    isLogging: false,
  };

  // #region lifecycle
  componentDidMount() {
    const { disconnectUser } = this.props;
    disconnectUser(); // diconnect user: remove token and user info
  }

  render() {
    const {
      form: { getFieldDecorator },
      isLogging,
    } = this.props;

    return (
      <Layout style={{ height: '100vh' }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <LoginForm className="login-form">
              <Col md={{ span: 6, offset: 8 }} xs={{ span: 18, offset: 3 }}>
                <LoginIcon>
                  <Icon type="user" style={{ fontSize: '142px' }} />
                </LoginIcon>
              </Col>
            </LoginForm>
            <Row className="login-form">
              <Col md={{ span: 6, offset: 8 }} xs={{ span: 18, offset: 3 }}>
                <Form onSubmit={this.handlesOnLogin} className="login-form">
                  <FormItem>
                    {getFieldDecorator('eMail', {
                      rules: [
                        { required: true, message: 'Please input your email!' },
                      ],
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                        placeholder="Email"
                      />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your Password!',
                        },
                      ],
                    })(
                      <Input
                        prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                        type="password"
                        placeholder="Password"
                      />,
                    )}
                  </FormItem>

                  <FormItem>
                    <Button
                      loading={isLogging}
                      disabled={isLogging}
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in
                    </Button>
                  </FormItem>
                </Form>
              </Col>
              <Col md={{ span: 6, offset: 8 }} xs={{ span: 18, offset: 3 }}>
                <Button type="default" onClick={this.handlesOnBackToHome}>
                  <Icon type="home" />
                  back to Home
                </Button>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
  // #enregion

  // #region back to home button press event
  handlesOnBackToHome = (event: SyntheticEvent<*>) => {
    if (event) {
      event.preventDefault();
    }
    const { history } = this.props;

    history.push('/');
  };
  // #endregion

  // #region login button event
  handlesOnLogin = async (event: SyntheticEvent<*>): Promise<any> => {
    if (event) {
      event.preventDefault();
    }

    const {
      form: { validateFields, getFieldValue },
      history,
      logUserIfNeeded,
    } = this.props;

    let isValidForm = true;
    validateFields((err /* , values */) => {
      if (err) {
        isValidForm = false;
      }
    });

    if (!isValidForm) {
      return false;
    }

    const userLogin = {
      login: getFieldValue('eMail'),
      password: getFieldValue('password'),
    };

    try {
      const response = await logUserIfNeeded(userLogin);
      const {
        data: { token, user },
      } = response.payload;

      auth.setToken(token);
      auth.setUserInfo(user);

      history.push({ pathname: '/' }); // back to Home
    } catch (error) {
      /* eslint-disable no-console */
      console.log('login went wrong..., error: ', error);
      /* eslint-enable no-console */
    }
  };
  // #endregion
}

export default Form.create({})(Login);
