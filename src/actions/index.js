import * as types from '../constants/ActionTypes'

export const actSearch = (keyword) => ({
    type: types.USER_SEARCH,
    keyword
})

export const actGoHome = () => ({
    type: types.GO_HOME,
})

export const actGoArtist = (to,name) => ({
    type: types.GO_ARTIST,
    to,
    name
})

export const actGoAlbum = (to,name) => ({
    type: types.GO_ALBUM,
    to,
    name
})
