export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data }
  }
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile }
  }
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE'
  }
}

export function removeAvatarRequest() {
  return {
    type: '@user/REMOVE_AVATAR_REQUEST'
  }
}

export function removeAvatarSuccess() {
  return {
    type: '@user/REMOVE_AVATAR_SUCCESS'
  }
}

export function removeAvatarFailure(error) {
  return {
    type: '@user/REMOVE_AVATAR_FAILUE',
    payload: { error }
  }
}
