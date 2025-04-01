import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface Actor_Key {
  id: string;
  __typename?: 'Actor_Key';
}

export interface AddReviewData {
  review: Review_Key;
}

export interface AddReviewVariables {
  movieId: string;
  rating: number;
  review?: string | null;
}

export interface AddWatchData {
  watch: Watch_Key;
}

export interface AddWatchVariables {
  movieId: string;
  format?: string | null;
  watchDate?: DateString | null;
  reviewId?: UUIDString | null;
}

export interface BrowseMoviesData {
  movies: ({
    id: string;
    rating: string;
    title: string;
    posterUrl: string;
    genre: string;
    releaseDate: DateString;
    stats?: {
      watchCount?: number | null;
      reviewCount?: number | null;
      avgRating?: number | null;
    };
  } & Movie_Key)[];
}

export interface BrowseMoviesVariables {
  partialTitle?: string | null;
  minDate?: DateString | null;
  maxDate?: DateString | null;
  minRating?: number | null;
  ratings?: string[] | null;
  genres?: string[] | null;
}

export interface DeleteWatchData {
  watch?: Watch_Key | null;
}

export interface DeleteWatchVariables {
  watchId: UUIDString;
}

export interface DetailedWatchHistoryData {
  watches: ({
    id: UUIDString;
    watchDate: DateString;
    format?: string | null;
    review?: {
      id: UUIDString;
      user: {
        username: string;
      };
        rating: number;
        review?: string | null;
        reviewTime: TimestampString;
        watch?: {
          watchDate: DateString;
          format?: string | null;
        };
    } & Review_Key;
      movie: {
        id: string;
        rating: string;
        title: string;
        posterUrl: string;
        genre: string;
        releaseDate: DateString;
        stats?: {
          watchCount?: number | null;
          reviewCount?: number | null;
          avgRating?: number | null;
        };
          description?: string | null;
          actors: ({
            name: string;
            id: string;
          } & Actor_Key)[];
      } & Movie_Key;
  } & Watch_Key)[];
}

export interface GetMoviesData {
  movies: ({
    id: string;
    rating: string;
    title: string;
    posterUrl: string;
    genre: string;
    releaseDate: DateString;
    stats?: {
      watchCount?: number | null;
      reviewCount?: number | null;
      avgRating?: number | null;
    };
  } & Movie_Key)[];
}

export interface GetMoviesVariables {
  ids?: string[] | null;
}

export interface HomePageData {
  newReleases: ({
    id: string;
    rating: string;
    title: string;
    posterUrl: string;
    genre: string;
    releaseDate: DateString;
    stats?: {
      watchCount?: number | null;
      reviewCount?: number | null;
      avgRating?: number | null;
    };
  } & Movie_Key)[];
    topMovies: ({
      movie?: {
        id: string;
        rating: string;
        title: string;
        posterUrl: string;
        genre: string;
        releaseDate: DateString;
        stats?: {
          watchCount?: number | null;
          reviewCount?: number | null;
          avgRating?: number | null;
        };
      } & Movie_Key;
    })[];
      recentReviews: ({
        id: UUIDString;
        user: {
          username: string;
        };
          rating: number;
          review?: string | null;
          reviewTime: TimestampString;
          watch?: {
            watchDate: DateString;
            format?: string | null;
          };
            movie: {
              id: string;
              rating: string;
              title: string;
              posterUrl: string;
              genre: string;
              releaseDate: DateString;
              stats?: {
                watchCount?: number | null;
                reviewCount?: number | null;
                avgRating?: number | null;
              };
            } & Movie_Key;
      } & Review_Key)[];
}

export interface MoviePageData {
  movie?: {
    id: string;
    rating: string;
    title: string;
    posterUrl: string;
    genre: string;
    releaseDate: DateString;
    stats?: {
      watchCount?: number | null;
      reviewCount?: number | null;
      avgRating?: number | null;
    };
      description?: string | null;
      reviews: ({
        id: UUIDString;
        user: {
          username: string;
        };
          rating: number;
          review?: string | null;
          reviewTime: TimestampString;
          watch?: {
            watchDate: DateString;
            format?: string | null;
          };
      } & Review_Key)[];
        roles: ({
          character?: string | null;
          description?: string | null;
          actor: {
            id: string;
            name: string;
            imageUrl: string;
          } & Actor_Key;
        })[];
  } & Movie_Key;
}

export interface MoviePageVariables {
  movieId: string;
}

export interface Movie_Key {
  id: string;
  __typename?: 'Movie_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface Role_Key {
  movieId: string;
  actorId: string;
  __typename?: 'Role_Key';
}

export interface SearchMoviesData {
  movies: ({
    id: string;
    rating: string;
    title: string;
    posterUrl: string;
    genre: string;
    releaseDate: DateString;
    stats?: {
      watchCount?: number | null;
      reviewCount?: number | null;
      avgRating?: number | null;
    };
      description?: string | null;
  } & Movie_Key)[];
}

export interface SearchMoviesVariables {
  query: string;
}

export interface UpdateUserData {
  user: User_Key;
}

export interface UpdateUserVariables {
  displayName?: string | null;
  imageUrl?: string | null;
  username: string;
}

export interface User_Key {
  uid: string;
  __typename?: 'User_Key';
}

export interface WatchHistoryPageData {
  watches: ({
    id: UUIDString;
    watchDate: DateString;
    format?: string | null;
    review?: {
      id: UUIDString;
      user: {
        username: string;
      };
        rating: number;
        review?: string | null;
        reviewTime: TimestampString;
        watch?: {
          watchDate: DateString;
          format?: string | null;
        };
    } & Review_Key;
      movie: {
        id: string;
        rating: string;
        title: string;
        posterUrl: string;
        genre: string;
        releaseDate: DateString;
        stats?: {
          watchCount?: number | null;
          reviewCount?: number | null;
          avgRating?: number | null;
        };
      } & Movie_Key;
  } & Watch_Key)[];
}

export interface WatchHistoryPageVariables {
  limit?: number | null;
}

export interface Watch_Key {
  id: UUIDString;
  __typename?: 'Watch_Key';
}

/* Allow users to create refs without passing in DataConnect */
export function updateUserRef(vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateUserRef(dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;

export function updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

/* Allow users to create refs without passing in DataConnect */
export function addWatchRef(vars: AddWatchVariables): MutationRef<AddWatchData, AddWatchVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addWatchRef(dc: DataConnect, vars: AddWatchVariables): MutationRef<AddWatchData, AddWatchVariables>;

export function addWatch(vars: AddWatchVariables): MutationPromise<AddWatchData, AddWatchVariables>;
export function addWatch(dc: DataConnect, vars: AddWatchVariables): MutationPromise<AddWatchData, AddWatchVariables>;

/* Allow users to create refs without passing in DataConnect */
export function addReviewRef(vars: AddReviewVariables): MutationRef<AddReviewData, AddReviewVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addReviewRef(dc: DataConnect, vars: AddReviewVariables): MutationRef<AddReviewData, AddReviewVariables>;

export function addReview(vars: AddReviewVariables): MutationPromise<AddReviewData, AddReviewVariables>;
export function addReview(dc: DataConnect, vars: AddReviewVariables): MutationPromise<AddReviewData, AddReviewVariables>;

/* Allow users to create refs without passing in DataConnect */
export function deleteWatchRef(vars: DeleteWatchVariables): MutationRef<DeleteWatchData, DeleteWatchVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteWatchRef(dc: DataConnect, vars: DeleteWatchVariables): MutationRef<DeleteWatchData, DeleteWatchVariables>;

export function deleteWatch(vars: DeleteWatchVariables): MutationPromise<DeleteWatchData, DeleteWatchVariables>;
export function deleteWatch(dc: DataConnect, vars: DeleteWatchVariables): MutationPromise<DeleteWatchData, DeleteWatchVariables>;

/* Allow users to create refs without passing in DataConnect */
export function homePageRef(): QueryRef<HomePageData, undefined>;
/* Allow users to pass in custom DataConnect instances */
export function homePageRef(dc: DataConnect): QueryRef<HomePageData, undefined>;

export function homePage(): QueryPromise<HomePageData, undefined>;
export function homePage(dc: DataConnect): QueryPromise<HomePageData, undefined>;

/* Allow users to create refs without passing in DataConnect */
export function searchMoviesRef(vars: SearchMoviesVariables): QueryRef<SearchMoviesData, SearchMoviesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function searchMoviesRef(dc: DataConnect, vars: SearchMoviesVariables): QueryRef<SearchMoviesData, SearchMoviesVariables>;

export function searchMovies(vars: SearchMoviesVariables): QueryPromise<SearchMoviesData, SearchMoviesVariables>;
export function searchMovies(dc: DataConnect, vars: SearchMoviesVariables): QueryPromise<SearchMoviesData, SearchMoviesVariables>;

/* Allow users to create refs without passing in DataConnect */
export function moviePageRef(vars: MoviePageVariables): QueryRef<MoviePageData, MoviePageVariables>;
/* Allow users to pass in custom DataConnect instances */
export function moviePageRef(dc: DataConnect, vars: MoviePageVariables): QueryRef<MoviePageData, MoviePageVariables>;

export function moviePage(vars: MoviePageVariables): QueryPromise<MoviePageData, MoviePageVariables>;
export function moviePage(dc: DataConnect, vars: MoviePageVariables): QueryPromise<MoviePageData, MoviePageVariables>;

/* Allow users to create refs without passing in DataConnect */
export function watchHistoryPageRef(vars?: WatchHistoryPageVariables): QueryRef<WatchHistoryPageData, WatchHistoryPageVariables>;
/* Allow users to pass in custom DataConnect instances */
export function watchHistoryPageRef(dc: DataConnect, vars?: WatchHistoryPageVariables): QueryRef<WatchHistoryPageData, WatchHistoryPageVariables>;

export function watchHistoryPage(vars?: WatchHistoryPageVariables): QueryPromise<WatchHistoryPageData, WatchHistoryPageVariables>;
export function watchHistoryPage(dc: DataConnect, vars?: WatchHistoryPageVariables): QueryPromise<WatchHistoryPageData, WatchHistoryPageVariables>;

/* Allow users to create refs without passing in DataConnect */
export function browseMoviesRef(vars?: BrowseMoviesVariables): QueryRef<BrowseMoviesData, BrowseMoviesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function browseMoviesRef(dc: DataConnect, vars?: BrowseMoviesVariables): QueryRef<BrowseMoviesData, BrowseMoviesVariables>;

export function browseMovies(vars?: BrowseMoviesVariables): QueryPromise<BrowseMoviesData, BrowseMoviesVariables>;
export function browseMovies(dc: DataConnect, vars?: BrowseMoviesVariables): QueryPromise<BrowseMoviesData, BrowseMoviesVariables>;

/* Allow users to create refs without passing in DataConnect */
export function getMoviesRef(vars?: GetMoviesVariables): QueryRef<GetMoviesData, GetMoviesVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getMoviesRef(dc: DataConnect, vars?: GetMoviesVariables): QueryRef<GetMoviesData, GetMoviesVariables>;

export function getMovies(vars?: GetMoviesVariables): QueryPromise<GetMoviesData, GetMoviesVariables>;
export function getMovies(dc: DataConnect, vars?: GetMoviesVariables): QueryPromise<GetMoviesData, GetMoviesVariables>;

/* Allow users to create refs without passing in DataConnect */
export function detailedWatchHistoryRef(): QueryRef<DetailedWatchHistoryData, undefined>;
/* Allow users to pass in custom DataConnect instances */
export function detailedWatchHistoryRef(dc: DataConnect): QueryRef<DetailedWatchHistoryData, undefined>;

export function detailedWatchHistory(): QueryPromise<DetailedWatchHistoryData, undefined>;
export function detailedWatchHistory(dc: DataConnect): QueryPromise<DetailedWatchHistoryData, undefined>;

