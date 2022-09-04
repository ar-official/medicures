import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export const redirectToProductDetail = (value) => {
    // history.push(`/product/${value}`);
    window.open(`/product/${value}`);
}

