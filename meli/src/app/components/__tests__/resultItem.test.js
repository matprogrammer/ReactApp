import React from 'react';
import ResultItem from '../resultItem';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

function getProps() {
  const product = {
    'item': {
      "title": "iPhone XS 512 Gb Plata 4 Gb Ram",
      "price": {
          "currency": "ARS",
          "amount": 193989.99,
      },
      "picture": "http://http2.mlstatic.com/D_848011-MLA31002678112_062019-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "sold_quantity": 0
    }
  }
  return product;
}

describe('result item test suite', () => {
  test('item result success', () => {
    const props = getProps();
    const wrapper = shallow(<ResultItem {...props} />)
    expect(wrapper.find('.item-image')).toHaveLength(1)
    expect(wrapper.find('.item-price')).toHaveLength(1)
    expect(wrapper.find('.item-shipping')).toHaveLength(1)
    expect(wrapper.find('.item-title')).toHaveLength(1)
  });
});
