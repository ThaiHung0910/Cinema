import React from 'react';
import CarouselMovie from './CarouselMovie/CarouselMovie';
import MovieList from './MovieList/MovieList';
import SpeedBooking from './SpeedBookingMovie/SpeedBooking';
import MovieTabs from './MovieTab/MovieTabs'

const HomePage = () => {
  return (
    <div>
      <CarouselMovie />
      <SpeedBooking/>
      <MovieList/>
      <MovieTabs />
    </div>
  );
};

export default HomePage;
