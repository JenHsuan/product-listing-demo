import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Theme from '../../../components/themes/Theme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import ItemCell from '../../../components/ItemCell';


import cake1 from '../../../public/images/cake/cake1.jpeg';
import cake2 from '../../../public/images/cake/cake2.jpeg';
import cake3 from '../../../public/images/cake/cake3.jpeg';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Item snapshots: when wishlist is empty', () => {
    let store;
    let component;
    let cell = {
        id: 0,
        imgSrcList: [cake1, cake2, cake3],
        title: 'Chocolate Birthdate Cake with Strewberries',
        finalPrice: 15,
        regularPrice: 20,
        fullStarNumber: 4,
        hasHalfStar: false
    };

    beforeEach(() => {
      store = mockStore({
        wishList: []
      });

      component = shallow(
          <Provider store={store}>
            <ThemeProvider theme={Theme}>
            <ItemCell id={cell.id}
                        key={`item-${cell.id}`}
                        imgSrcList={cell.imgSrcList}
                        title={cell.title}
                        finalPrice={cell.finalPrice}
                        regularPrice={cell.regularPrice}
                        fullStarNumber={cell.fullStarNumber}
                        hasHalfStar={cell.hasHalfStar}/>
            </ThemeProvider>
          </Provider>
        );
    });

    test('should render with given state from Redux store', () => {
      expect(component).toMatchSnapshot();
    });
  });
