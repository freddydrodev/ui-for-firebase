import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

class Registration extends Component {
  state = {};

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form hideRequiredMark={true}>
        <Form.Item>
          {getFieldDecorator("firstname", {
            rules: [
              {
                required: true,
                whitespace: true,
                message: "This field is required"
              },
              {
                type: "string",
                message: "Should be a string format"
              }
            ]
          })(
            <Input
              size="large"
              placeholder="Enter your firstname here"
              required
              className="rounded-0 border-0"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("lastname", {
            rules: [
              {
                required: true,
                whitespace: true,
                message: "This field is required"
              },
              {
                type: "string",
                message: "Should be a string format"
              }
            ]
          })(
            <Input
              size="large"
              placeholder="Enter your lastname here"
              required
              className="rounded-0 border-0"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                whitespace: true,
                message: "This field is required"
              },
              {
                type: "string",
                message: "Should be a string format"
              }
            ]
          })(
            <Input
              size="large"
              placeholder="Enter your phone here"
              required
              className="rounded-0 border-0"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                whitespace: true,
                message: "This field is required"
              },
              {
                type: "email",
                message: "Should be a valid email format"
              }
            ]
          })(
            <Input
              type="email"
              size="large"
              placeholder="Enter your email here"
              required
              className="rounded-0 border-0"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                whitespace: true,
                message: "This field is required"
              },
              {
                type: "string",
                message: "Should be a string format"
              },
              {
                min: 6,
                whitespace: true,
                message: "Must have at least 6 characters"
              },
              {
                max: 32,
                whitespace: true,
                message: "Must have at most 32 characters"
              }
            ]
          })(
            <Input
              type="password"
              size="large"
              placeholder="Enter your password here"
              required
              className="rounded-0 border-0"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            size="large"
            className="logButton rounded-0 w-100"
          >
            Create Account
          </Button>
        </Form.Item>
        <p className="text-center">
          Already have account? <Link to="/">Login</Link>
        </p>
      </Form>
    );
  }
}

export default Form.create()(Registration);
