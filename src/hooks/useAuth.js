import axios from 'axios';
import React from 'react';
import {BASE_URL} from '../config';
import createAction from '../config/createAction';
import SecureStorage from 'react-native-secure-storage';
import {sleep} from '../utils/sleep';

export function useAuth() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            loading: false,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };

        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );

  const auth = React.useMemo(
    () => ({
      login: async params => {
        const {data} = await axios.post(BASE_URL + '/auth/local', params);
        const user = {
          token: data?.jwt,
          ...data,
        };
        await SecureStorage.setItem('user', JSON.stringify(user));
        dispatch(createAction('SET_USER', user));
      },
      logout: async () => {
        await SecureStorage.removeItem('user');
        dispatch(createAction('REMOVE_USER'));
      },
      register: async params => {
        await sleep(1500);
        await axios.post(BASE_URL + '/auth/local/register', params);
      },
      usersMe: async token => {
        try {
          const response = await axios.get(BASE_URL + '/users/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200 && response.data.id) {
            return true;
          } else return false;
        } catch (e) {
          return false;
        }
      },
    }),
    [],
  );

  React.useEffect(() => {
    sleep(500).then(() => {
      SecureStorage.getItem('user').then(user => {
        if (user) {
          auth.usersMe(JSON.parse(user).token).then(value => {
            if (value) {
              dispatch(createAction('SET_USER', JSON.parse(user)));
            } else {
              dispatch(createAction('SET_LOADING', false));
            }
          });
        } else {
          dispatch(createAction('SET_LOADING', false));
        }
      });
    });
  }, []);

  return {auth, state};
}
