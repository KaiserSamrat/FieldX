import { call, delay, put, takeEvery } from "redux-saga/effects"
import{addUser} from '../../helpers/backend_helper'
import{ ADD_NEW_USER} from './actionTypes.js'
import {  addUserFail, addUserSuccess,} from "./actions"
function* onAddNewUser({ payload: { data, history } }) {
    // let adduserData = data.data
    try {
      const response = yield call(addUser, data)
      yield put(addUserSuccess(response))
      history.push("/userdata")
    } catch (error) {
  
      console.log(error.response)
      if (!error.response) {
        history.push("/userdata")
      } else {
        let message = error.response.data.message
        // console.log("error message,", error.response.data.message)
        yield put(addUserFail(message))}
      
    }
  }
