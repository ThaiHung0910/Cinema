import React from 'react';
import CarouselMovie from './CarouselMovie/CarouselMovie';
import MovieList from './MovieList/MovieList';
import SpeedBooking from './SpeedBookingMovie/SpeedBooking';
import MovieTabs from './MovieTab/MovieTabs'
import NewsMovie from "./News/NewsMovie";


const HomePage = () => {
  return (
    <div>
      <CarouselMovie />
      <SpeedBooking/>
      <MovieList/>
      <MovieTabs />
      <NewsMovie />
    </div>
  );
};

export default HomePage;
