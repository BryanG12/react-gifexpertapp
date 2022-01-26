import React from 'react';
import { useFechGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFechGifs(category);
  

  return (
    <>
      <h3 className='animate__animated animate__rotateInUpRight '> {category} </h3>

      { loading && <p className='animate__animated  animate__flash'> Cargando... </p> }

      <div className='card-grid'>

        { images.map( img =>( 
            <GifGridItem 
            key={img.id}
            {...img}
            />
          ))
        }
        
      </div>
    </>
  );
};



