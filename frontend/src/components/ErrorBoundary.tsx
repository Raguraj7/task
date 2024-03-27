import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  errormessage: undefined | string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errormessage: undefined };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true, errormessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errormessage}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
