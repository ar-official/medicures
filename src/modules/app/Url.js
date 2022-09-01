export const Url = '/'

export const Constant= {
    productListUrl : Url+'product',
    productDetailUrl : Url+'product/:id'
}

export const menuItems = [
    {
        "menuId": 0,
        'menuItem': 'Home',
        'menuLink': Url,
    },
    {
        "menuId": 1,
        'menuItem': 'Products',
        'menuLink': Url+'product',
    }
];