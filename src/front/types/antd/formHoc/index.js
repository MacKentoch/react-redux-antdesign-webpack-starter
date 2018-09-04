// @flow

export type FormCreateInjectedProps = {
  form: {
    getFieldDecorator: () => any,
    validateFields: () => any,
    getFieldValue: () => any,
  },
};
