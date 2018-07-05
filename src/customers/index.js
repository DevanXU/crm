import React from 'react';
import * as actions from './actions';
import reducer from './reducer';
import CustomerList from './customerList';
import CustomerCreate from './customerCreate';
import CustomerEdit from './customerEdit';
import CustomerShow from './customerShow';

export { actions, reducer };
export { CustomerCreate, CustomerList, CustomerEdit, CustomerShow };
