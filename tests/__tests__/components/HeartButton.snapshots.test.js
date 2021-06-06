import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Theme from '../../../components/themes/Theme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import HeartButton from '../../../components/HeartButton';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Item snapshots: when wishlist is empty', () => {
    let component;
    let wishList = [];

    beforeEach(() => {
      component = shallow(
            <ThemeProvider theme={Theme}>
                  <HeartButton onHeartClicked={() => { }}
                isSelected={typeof wishList.find(ele => ele.id === id) != 'undefined'}>
            </HeartButton>
            </ThemeProvider>
        );
    });

    test('should render with given state from Redux store', () => {
      expect(component).toMatchSnapshot();
    });
  });
