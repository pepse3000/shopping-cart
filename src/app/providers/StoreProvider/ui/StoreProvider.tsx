import {Provider} from "react-redux";
import {ReactNode} from "react";
import {createReduxStore} from "../config/store";
import {StateInterface} from "app/providers/StoreProvider";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateInterface;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}