import React from 'react';
import ProductDetails from '../productDetails';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

function getProps() {
  const product = [{
    "title": "iPhone XS 512 Gb Plata 4 Gb Ram",
      "price": {
          "currency": "ARS",
          "amount": "193989",
          "decimals": "99"
      },
      "picture": "http://http2.mlstatic.com/D_848011-MLA31002678112_062019-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "sold_quantity": 0,
      "description": "iPhone XS 512 Gb Plata 4 Gb Ram"
  }]
  return product;
}

describe('product details test suite', () => {
  test('product details success', () => {
    const props = getProps();
    const wrapper = shallow(<ProductDetails {...props} />)
    expect(wrapper.find('.product-image')).toHaveLength(1)
    expect(wrapper.find('.product-title')).toHaveLength(1)
    expect(wrapper.find('.product-price')).toHaveLength(1)
    expect(wrapper.find('.product-image')).toHaveLength(1)
    expect(wrapper.find('.product-condition')).toHaveLength(1)
  });
});
