import React, { useReducer, useEffect } from 'react';
import cartItems from './data';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';

//////////////////////////////////
// ROOT REDUCER

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 0,
  total: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(el => el.id !== action.payload),
      };
    case 'DECREASE':
      let newCart = state.cart
        .map(cartItem => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter(cartItem => cartItem.amount !== 0);
      return {
        ...state,
        cart: newCart,
      };
    case 'INCREASE':
      let increasedCart = state.cart.map(cartItem => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: increasedCart,
      };
    case 'GET_TOTALS':
      const { amount, total } = state.cart.reduce(
        (accObj, objVal) => {
          accObj.amount += objVal.amount;
          accObj.total += objVal.amount * objVal.price;
          return accObj;
        },
        { amount: 0, total: 0 }
      );

      return {
        ...state,
        total,
        amount,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SEND_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    default:
      return state;
  }
};

///////////////////////////////
/// APP CONTEXT

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const removeItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const increaseItem = id => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decreaseItem = id => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const fetchData = async url => {
    dispatch({ type: 'LOADING' });
    const res = await fetch(url);
    const cart = await res.json();
    dispatch({ type: 'SEND_DATA_SUCCESS', payload: cart });
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
