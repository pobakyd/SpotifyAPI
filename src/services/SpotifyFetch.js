import * as keys from '../constants/KeySpecs'

const queryString = require('query-string')

export default class SpotifyFetch{
    static config = {
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + keys.API_TOKEN
        }
    }

    static getArtists(query){
        const params = {
            type: 'artist',
            limit: 5,
            offset: 1
        }
        const strParams = queryString.stringify(params)
        const url = `${keys.BASE_URL}search?q=${query}&${strParams}`
        
        return fetch(url, SpotifyFetch.config).then(response => response.json())
    }

    static getArtistInfors(id){
        const url = `${keys.BASE_URL}artists/${id}`
        return fetch(url, SpotifyFetch.config).then(response => response.json())
    }

    static getArtistAlbums(id){
        const url = `${keys.BASE_URL}artists/${id}/albums`
        return fetch(url, SpotifyFetch.config).then(response => response.json())
    }

    static getAlbum(id){
        const url = `${keys.BASE_URL}albums/${id}`
        return fetch(url, SpotifyFetch.config).then(response => response.json())
    }

    static getAlbumTracks(id){
        const url = `${keys.BASE_URL}albums/${id}/tracks`
        return fetch(url, SpotifyFetch.config).then(response => response.json())
    }
}