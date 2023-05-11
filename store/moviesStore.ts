import { makeAutoObservable } from 'mobx';
import { runInAction } from 'mobx';
import router, { useRouter } from 'next/router';

interface UniqueValue {
    id: number;
    nameRu: string;
    nameEn: string | null;
  }

interface Film {
    id: number;
    kinopoiskId: number;
    nameRu: string;
    nameEn: string;
    ratingKinopoiskVoteCount: number;
    ratingKinopoisk: number;
    year: number;
    type: string;
    filmLength: number;
    posterUrl: string;
    posterUrlPreview: string;
    genres: UniqueValue[];
    countries: UniqueValue[];
  }
  
  interface Films {
    rows: Film[];
  }
  interface Filter {
    id: string;
    nameRu: string;
  }


  class MoviesStore {
    selectedFilters = {
      genres: [],
      countries: [],
      actors:[],
      minRating:[],
      voteCount:[]
    };
    baseUrl = 'http://localhost:3003/info';
    genresUrl = 'http://localhost:3001/movies/filters/genres'
    countriesUrl = 'http://localhost:3001/movies/filters/countries'
    actorsUrl = 'http://localhost:3005/persons/all?keywords='

    url = this.baseUrl;
    films = null;
    genres:Filter[] = [];
    countries:Filter[] = [];
    actors:Filter[] = [];
    minRating = [];
    voteCount= [];
  
    constructor() {
      makeAutoObservable(this);
      this.fetchData();
      this.fetchFilters(this.genresUrl, 'genres');
      this.fetchFilters(this.countriesUrl, 'countries');
      /* this.fetchFilters(this.actorsUrl, 'actors'); */
    }

    resetFilters() {
      this.selectedFilters = {
        genres: [],
        countries: [],
        actors:[],
        minRating:[],
        voteCount:[]
      };
    }
  
    handleButtonClick(name, id, type) {
      const index = this.selectedFilters[type].findIndex((filter) => filter.id === id);
      if (index !== -1) {
        this.selectedFilters[type].splice(index, 1);
      } else {
        this.selectedFilters[type].push({ id, name });
      }
      
      this.updateUrl();
      this.fetchData();
      this.generateUrl();
    }

    handleMinRatingChange(value: number, type: string) {
      this.selectedFilters[type] = value;
      this.updateUrl();
      this.fetchData();
      this.generateUrl();
    }
    
    async fetchFilters(url: string, property: string) {
      const response = await fetch(url);
      const data = await response.json();
      runInAction(() => {
        this[property] = data;
      });
    }
  
    generateUrl() {
      let path = 'all';
      const hasFilters = Object.values(this.selectedFilters).some(
        (filters) => filters.length > 0
      );
      if (hasFilters || this.selectedFilters.minRating) {
        const filterStrings = Object.keys(this.selectedFilters)
          .map((key) => {
            // Handle minRating separately
            if (key === 'minRating') {
              return `${key}=${this.selectedFilters[key]}`;
            }
            const filterValues = this.selectedFilters[key]
              .map((filter) => filter.name)
              .join('+');
            return filterValues;
          })
          .filter((str) => str.length > 0);
        path = filterStrings.join('/');
      }
      router.push(
        {
          pathname: `/movies/${path}`,
        },
        undefined,
        { shallow: true }
      );
    }
  
    generateRequest() {
      const filterStrings = Object.keys(this.selectedFilters)
        .filter((key) => key === 'minRating' || this.selectedFilters[key].length > 0)
        .map((key) => {
          if (key === 'minRating') {
            return `${key}=${this.selectedFilters[key]}`;
          } else {
            const filterValues = this.selectedFilters[key].map((filter) => filter.id).join(",");
            return `${key}=${filterValues}`;
          }
        });
      return filterStrings.length > 0 ? `?${filterStrings.join("&")}` : "";
    }

    updateUrl() {
      this.url = `${this.baseUrl}/${this.generateRequest()}`;
    }

    async fetchData() {

      const response = await fetch(this.url);
      const data = await response.json();

      runInAction(() => {
        this.films = data;
      });
    }

    
    async fetchPersons(keywords) {

      const response = await fetch(`${this.actorsUrl}${keywords}`);
      const data = await response.json();

      runInAction(() => {
        this.actors = data;
      });
    }


}


export const moviesStore = new MoviesStore();