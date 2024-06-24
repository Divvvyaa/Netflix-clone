import React from "react";
import Banner from "../../components/Banner/Banner";
import Nav from "../../components/Nav/Nav";
import "./HomeScreen.css";
import requests from "../../helpers/requests";
import Row from "../../components/Row/Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Made in India" fetchUrl={requests.fetchMadeInIndia} />
      <Row title="TV Comedies" fetchUrl={requests.fetchTVComedies} />
      <Row title="New on Netflix" fetchUrl={requests.fetchNewOnNetflix} />
      <Row title="US TV Shows" fetchUrl={requests.fetchUSTVShows} />
      <Row title="Japanese Anime" fetchUrl={requests.fetchJapaneseAnime} />
      <Row title="Critically Acclaimed TV Shows" fetchUrl={requests.fetchCriticallyAcclaimedTVShows} />
      <Row title="Children & Family TV" fetchUrl={requests.fetchChildrenAndFamilyTV} />
    </div>
  );
};

export default HomeScreen;
