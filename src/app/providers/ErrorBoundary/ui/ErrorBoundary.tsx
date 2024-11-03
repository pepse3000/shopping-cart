import React, {ErrorInfo, Suspense} from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return error && { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <h1>Errore ...</h1>
                </Suspense>
            )
        }

        return children;
    }
}

export default ErrorBoundary;