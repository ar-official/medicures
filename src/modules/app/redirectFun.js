import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export const redirectToProductDetail = (value) => {
    history.push(`/medicures/product/${value}`);
    // window.open(`/product/${value}`);
}

