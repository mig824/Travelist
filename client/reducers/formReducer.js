import axios from 'axios';
import * as types from '../constants/actionTypes';

const initialState = {
  signUp: {
    firstName: '',
    email: '',
    username: '',
    password: '',
    confirmedPassword: '',
  },
  logIn: {
    username: '',
    password: '',
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_SIGNUP_FORM: {
      const {
        firstName,
        email,
        username,
        password,
        confirmedPassword,
      } = action.payload;
      const inputToDB = { firstName, email, username, password };

      // document
      //   .querySelectorAll('.signup-field')
      //   .forEach((field) => (field.value = ''));

      if (password !== confirmedPassword) {
        console.log('passwords dont match');
        return {
          ...state,
        };
      }
      console.log('pws match');
      axios
        .post('/signup', inputToDB)
        .then((response) => {
          console.log('in reducer --> ', response);
        })
        .catch((err) => console.log('err in reducer: ', err));

      return {
        ...state,
        signUp: {
          ...state.signUp,
          ...action.payload,
        },
      };
    }
    case types.SIGNUP_FORM_INPUT: {
      const { name, value } = action.payload;

      return {
        ...state,
        signUp: {
          ...state.signUp,
          [name]: value,
        },
      };
    }

    default:
      return state;
  }
};

export default formReducer;
