import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import store from './app/states/store';
import {Provider} from 'react-redux';

import router from './app/rotes/appRouter';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "../../../dev";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HelmetProvider>
        <Provider store={store}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <RouterProvider router={router}/>
            </DevSupport>
        </Provider>
    </HelmetProvider>
);
