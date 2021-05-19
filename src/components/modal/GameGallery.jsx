import React, { useState } from 'react'
import { useGetScreenshots } from '../../hooks/useFetchGame'
import { GallerySelector } from './GallerySelector'
import { MainImageGallery } from './MainImageGallery'
import { Platforms } from './Platforms'

export const GameGallery = ({ detailsData }) => {
  const { image, image2, name, slug } = detailsData;
  const { screenshotData, loading } = useGetScreenshots( slug )
  // const { screenshot } = loading!== true && screenshotData[0]
  // debugger
  const [currentScreenshot, setCurrentScreenshot] = useState( image2 )

  return (
    <div className="game__gallery">
      <h3 className="game--subtitles">Gallery</h3>
      {
        loading
        ? <h2>loading</h2>
        : <div>
            <MainImageGallery currentScreenshot={ currentScreenshot } />
              <div className="carousel__item">
                {
                  screenshotData.map( screenshots => (
                    <GallerySelector 
                      key={screenshots.id} 
                      screenshots={screenshots}
                      setCurrentScreenshot={setCurrentScreenshot}
                    />
                  ))
                }
                </div>  
            </div>
      }
      
      {/* <Platforms platforms={ platforms }/> */}
      
    </div>
  )
}
