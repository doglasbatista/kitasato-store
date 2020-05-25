import React from 'react';

import {Btn} from './Button.style';

const Button = ({children, action, disabled}) => (
  <Btn onClick={action} disabled={disabled}>
    {children}
  </Btn>
);

export default Button;
