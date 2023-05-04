import { useEffect, useState } from 'react';

import { MovieCard } from './components/MovieCard';

import { GenreResponseProps, SideBar } from './components/SideBar';
// import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';



export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);  


 function handleSelectedGenreIdChange(value: number){
  setSelectedGenreId(value)
 }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onChange={(value) => handleSelectedGenreIdChange(value)}/>

      <Content GenreId={selectedGenreId}/>
    </div>
  )
}