import { useState } from "react";
import Resizer from "react-image-file-resizer";

const mainUrl = `https://api.rawg.io/api/`;
const api_key = 'key=35df8dd5d9ad4572b98e6f1e95d73c3e';
const queryGame = 'games?';
const queryGenres = 'genres?';


export const resizeFile = ( file ) => {
  const myFile = JSON.parse(file, 2, null)
  debugger
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      myFile,
      300,
      300,
      "JPEG",
      50,
      0, 
      ( uri ) => {
        console.log(uri)
        resolve(uri)
      },
      "base64",
      200,
      200,
      ) 
    })
  }
  
  // debugger
export const GetGames = async () => {
  try {
    const response = await fetch(`${mainUrl}${queryGame}${api_key}&page=3`);
    const { results } = await response.json();
    const randomResult = results[Math.floor( Math.random() * results.length )]
    // debugger
    const dataGame = results.map(game => {
      return {
        id: game.id,
        name: game.name,
        released: game.released,
        metacritic: game.metacritic,
        image: game.background_image,
        slug: game.slug,
        random: randomResult
      }
    })
    // debugger
    return dataGame
    
  } catch (error) {
    console.error('error on: ',  error)
  }
}


export const getGenreGames = async () => {
  const response = await fetch(`${mainUrl}${queryGenres}${api_key}`);
  const { results } = await response.json();
  
  const dataGenres = results.map(genre => {
    return {
      id: genre.id,
      slug: genre.slug,
      name: genre.name,
      total_games: genre.games_count,
      image: genre.image_background
    }
  })
  
  return dataGenres
}

export const getGamesByGenre = async ( genre ) => {
  try {
    let response;
    
    if(genre == undefined) {
      response = await fetch(`${mainUrl}${queryGame}${api_key}&page=2`);
    } else {
      response = await fetch(`${mainUrl}${queryGame}${api_key}&genres=${genre}&page=2&page_size=30`);
    }
    // debugger
  const { results } = await response.json();
  // debugger
  const gameByGenre = results.map( listGame => {
    return {
      name: listGame.name,
      slug: listGame.slug,
      platforms: listGame.platforms,
      released: listGame.released,
      image: listGame.background_image,
      calification: listGame.rating,
      rating_star: listGame.rating_top,
      ratings: listGame.ratings,
      metacritic: listGame.metacritic,
      updated: listGame.updated,
      clasification: listGame.esrb_rating,
      gallery: listGame.short_screenshots
    }
  })

  return gameByGenre
  } catch (error) {
    console.error(new Error(error))
  }
}

export const getDetailsGame = async ( game ) => {
  const response = await fetch(`${mainUrl}games/${game}?${api_key}`)
  const data = await response.json();
  // debugger
  return {
    id: data.id,
    name: data?.name,
    slug: data?.slug,
    description: data?.description_raw,
    metacritic: data?.metacritic,
    released: data?.released,
    image: data?.background_image,
    genre: data?.genres,
    image2: data?.background_image_additional,
    calification: data?.rating,
    rating_star: data?.rating_top,
    people_say: data?.ratings,
    platforms: data?.platforms,
    developers: data?.developers,
    publishers: data?.publishers,
    clasification: data?.esrb_rating,
    tags: data?.tags
  }
}

export const getGameScreenshots = async ( game ) => {
 try {
  const response = await fetch(`${mainUrl}games/${game}/screenshots?${api_key}`);
  const { results } = await response.json();
  
  const gameScreenshots = results.map(screenshot => {
    return {
      id: screenshot.id,
      screenshot: screenshot.image
    }
  })

  return gameScreenshots;
 } catch (error) {
   console.errror(error)
 }
  
}

export const getGameByName = async ( searchInput  ) => {
  // const gameToSearch = searchInput.replace(/\s/g, '-')
  // debugger
  // const replaceSimbols = /\s/gi
  // const toLowerGameName = searchInput.toLowerCase().replace(replaceSimbols, '-')
  // debugger
  // let cleanGame = ''
  // debugger
  // if(toLowerGameName.match(':')) {
  //   const end = toLowerGameName.indexOf
  //   cleanGame = toLowerGameName.slice(0, end)
  // } else {
  //   cleanGame = toLowerGameName
  // }
  // debugger
  const response = await fetch(`${mainUrl}${queryGame}${api_key}&search=${searchInput}`);
  const { results } = await response.json();
  // debugger
  const searchResult = results.map( result => {
    return {
      id: result.id,
      name: result.name,
      slug: result.slug,
      released: result.released,
      calification: result.rating,
      rating_star: result.rating_top,
      image: result.background_image,
      metacritic: result.metacritic
    }
  })
  // debugger
  return searchResult
}