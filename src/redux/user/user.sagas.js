import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { 
  auth, 
  googleProvider, 
  createUserProfileDocument,
  getCurrentUser,
  updateUserDocument
} from '../../firebase/firebase.utils';
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess, updateUserFailure, updateUserSuccess } from './user.actions';
import { setFeedback } from '../feedback/feedback.actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );

  } catch(err) {
    yield put(
      signInFailure(err)
    )
  }
};

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch(err) {
    yield put(
      signInFailure(err)
    )
  }
};

export function* signInWithEmail({payload: { email, password }}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch(err) {
    yield put(
      signInFailure(err)
    )
  }
};

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch(err) {
    yield put(signInFailure(err));
  }
};

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch(err) {
    yield put(signOutFailure(err));
  }
};

export function* signUp({payload: { email, password, displayName }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch(err) {
    yield put(signUpFailure(err));
  }
};

export function* updateUser(userData) {
  try {
    const userAuth = yield getCurrentUser();
    const userRef = yield call(updateUserDocument, userAuth, userData);
    const userSnapshot = yield userRef.get();
    yield console.log('userSnapshot', userSnapshot.data());
    yield put(
      updateUserSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
    yield put(
      setFeedback({ success: true, message: 'Your changes have been successfully saved.', timeout: 4000})
    );
  } catch(err) {
    yield put(updateUserFailure(err));
    yield put(
      setFeedback({ success: false, message: 'Something went wrong updating your information', timeout: 4000})
    );
  }
};

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
};

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
};

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};

export function* onSignupSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
};

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
};

export function* onUpdateUserStart() {
  yield takeLatest(UserActionTypes.USER_UPDATE_START, updateUser)
};


export function* userSagas() {
  yield all([
    call(onGoogleSignInStart), 
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignupSuccess),
    call(onUpdateUserStart),
  ]);
};
