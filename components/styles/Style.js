import styled from 'styled-components';
import { variant } from 'styled-system';

export const ItemCellStyle = styled('div')(
  variant({
    scale: 'itemCell',
    variants: {
      contentBody: {}
    }
  })
);

export const ItemCellContainerStyle = styled('div')(
  variant({
    scale: 'itemCellContainer',
    variants: {
      grid: {}
    }
  })
);

export const ItemCellPageContainerStyle = styled('div')(
  variant({
    scale: 'itemCellPageContainer',
    variants: {
      major: {}
    }
  })
);

export const WishListBtnStyle = styled('div')(
  variant({
    scale: 'wishListBtn',
    variants: {
      major: {}
    }
  })
);

export const WishListModalStyle = styled('div')(
  variant({
    scale: 'wishListModal',
    variants: {
      major: {}
    }
  })
);

export const ScrollIndicatorStyle = styled('div')(
  variant({
    scale: 'scrollIndicator',
    variants: {
      major: {}
    }
  })
);
