import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const ButtonIcon = ({ onclick, tip, btnClassname, tipClassname, children }) => (
  <Tooltip title={tip} className={tipClassname} placement="top">
    <IconButton onClick={onclick} className={btnClassname}>
      {children}
    </IconButton>
  </Tooltip>
);

export default ButtonIcon;
