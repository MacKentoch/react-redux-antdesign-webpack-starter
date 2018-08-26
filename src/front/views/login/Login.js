// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Icon,
  Layout
}                     from 'antd';

const FormItem = Form.Item;
const { Content } = Layout;

import auth           from '../../services/auth';


class Login extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // antd Form.create
    form: PropTypes.shape({
      getFieldDecorator:  PropTypes.func.isRequired,
      validateFields:     PropTypes.func.isRequired,
      getFieldValue:      PropTypes.func.isRequired
    }).isRequired,

    // views props:
    currentView: PropTypes.string.isRequired,
    enterLogin:  PropTypes.func.isRequired,
    leaveLogin:  PropTypes.func.isRequired,

    // userAuth:
    isAuthenticated: PropTypes.bool,
    isFetching:      PropTypes.bool,
    isLogging:       PropTypes.bool,
    disconnectUser:  PropTypes.func.isRequired,
    logUserIfNeeded: PropTypes.func.isRequired
  };

  static defaultProps = {
    isFetching:      false,
    isLogging:       false
  }

  componentDidMount() {
    const {
      enterLogin,
      disconnectUser
    } = this.props;

    disconnectUser(); // diconnect user: remove token and user info
    enterLogin();
  }

  componentWillUnmount() {
    const { leaveLogin } = this.props;
    leaveLogin();
  }

  render() {
    const {
      form: { getFieldDecorator },
      isLogging
    } = this.props;

    return (
      <Layout style={{ height: '100vh' }}>
        <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Row
            className="login-form"
          >
            <Col
              md={{ span: 6, offset: 8 }}
              xs={{ span: 18, offset: 3 }}
            >
              <div className="login-icon">
                <Icon
                  type="user"
                  style={{ fontSize: '142px' }}
                />
              </div>
            </Col>
          </Row>
          <Row
            className="login-form"
          >
            <Col
              md={{ span: 6, offset: 8 }}
              xs={{ span: 18, offset: 3 }}
            >
              <Form
                onSubmit={this.handlesOnLogin}
                className="login-form"
              >
                <FormItem>
                  {
                    getFieldDecorator(
                      'eMail',
                      {
                        rules: [{ required: true, message: 'Please input your email!' }]
                      }
                    )(
                      <Input
                        prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                        placeholder="Email"
                      />
                    )
                  }
                </FormItem>
                <FormItem>
                  {
                    getFieldDecorator(
                      'password',
                      {
                        rules: [{ required: true, message: 'Please input your Password!' }]
                      }
                    )(
                      <Input
                        prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                        type="password"
                        placeholder="Password"
                      />
                    )
                  }
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
            <Col
              md={{ span: 6, offset: 8 }}
              xs={{ span: 18, offset: 3 }}
            >
              <Button
                type="default"
                onClick={this.handlesOnBackToHome}
              >
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

  handlesOnBackToHome = (
    event: SyntheticEvent<*>
  ) => {
    if (event) {
      event.preventDefault();
    }
    const { history } = this.props;

    history.push('/');
  }

  handlesOnLogin = async (
    event: SyntheticEvent<*>
  ): Promise<any> => {
    if (event) {
      event.preventDefault();
    }

    const {
      form: {
        validateFields,
        getFieldValue
      },
      history,
      logUserIfNeeded
    } = this.props;

    let isValidForm = true;
    validateFields(
      (err /* , values */) => {
        if (err) {
          isValidForm = false;
        }
      }
    );

    if (!isValidForm) {
      return false;
    }

    const userLogin = {
      login:    getFieldValue('eMail'),
      password: getFieldValue('password')
    };

    try {
      const response = await logUserIfNeeded(userLogin);
      const {
        data: {
          token,
          user
        }
      } = response.payload;

      auth.setToken(token);
      auth.setUserInfo(user);

      history.push({ pathname: '/' }); // back to Home
    } catch (error) {
      /* eslint-disable no-console */
      console.log('login went wrong..., error: ', error);
      /* eslint-enable no-console */
    }
  }

  goHome = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    const {
      history
    } = this.props;
    history.push({ pathname: '/' });
  }
}

export default Form.create({})(Login);
