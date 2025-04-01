# Table of Contents
- [**Overview**](#generated-typescript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*HomePage*](#homepage)
  - [*SearchMovies*](#searchmovies)
  - [*MoviePage*](#moviepage)
  - [*WatchHistoryPage*](#watchhistorypage)
  - [*BrowseMovies*](#browsemovies)
  - [*GetMovies*](#getmovies)
  - [*DetailedWatchHistory*](#detailedwatchhistory)
- [**Mutations**](#mutations)
  - [*UpdateUser*](#updateuser)
  - [*AddWatch*](#addwatch)
  - [*AddReview*](#addreview)
  - [*DeleteWatch*](#deletewatch)

# Generated TypeScript README
This README will guide you through the process of using the generated TypeScript SDK package for the connector `connector`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@app/data` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `connector`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@app/data';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```javascript
import { connectDataConnectEmulator, getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@app/data';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `connector` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## HomePage
You can execute the `HomePage` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
homePage(): QueryPromise<HomePageData, undefined>;

homePageRef(): QueryRef<HomePageData, undefined>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
homePage(dc: DataConnect): QueryPromise<HomePageData, undefined>;

homePageRef(dc: DataConnect): QueryRef<HomePageData, undefined>;
```

### Variables
The `HomePage` query has no variables.
### Return Type
Recall that executing the `HomePage` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `HomePageData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
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
```
### Using `HomePage`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, homePage } from '@app/data';


// Call the `homePage()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await homePage();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await homePage(dataConnect);

console.log(data.newReleases);
console.log(data.topMovies);
console.log(data.recentReviews);

// Or, you can use the `Promise` API.
homePage().then((response) => {
  const data = response.data;
  console.log(data.newReleases);
  console.log(data.topMovies);
  console.log(data.recentReviews);
});
```

### Using `HomePage`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, homePageRef } from '@app/data';


// Call the `homePageRef()` function to get a reference to the query.
const ref = homePageRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = homePageRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.newReleases);
console.log(data.topMovies);
console.log(data.recentReviews);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.newReleases);
  console.log(data.topMovies);
  console.log(data.recentReviews);
});
```

## SearchMovies
You can execute the `SearchMovies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
searchMovies(vars: SearchMoviesVariables): QueryPromise<SearchMoviesData, SearchMoviesVariables>;

searchMoviesRef(vars: SearchMoviesVariables): QueryRef<SearchMoviesData, SearchMoviesVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
searchMovies(dc: DataConnect, vars: SearchMoviesVariables): QueryPromise<SearchMoviesData, SearchMoviesVariables>;

searchMoviesRef(dc: DataConnect, vars: SearchMoviesVariables): QueryRef<SearchMoviesData, SearchMoviesVariables>;
```

### Variables
The `SearchMovies` query requires an argument of type `SearchMoviesVariables`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface SearchMoviesVariables {
  query: string;
}
```
### Return Type
Recall that executing the `SearchMovies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SearchMoviesData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
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
```
### Using `SearchMovies`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, searchMovies, SearchMoviesVariables } from '@app/data';

// The `SearchMovies` query requires an argument of type `SearchMoviesVariables`:
const searchMoviesVars: SearchMoviesVariables = {
  query: ..., 
};

// Call the `searchMovies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await searchMovies(searchMoviesVars);
// Variables can be defined inline as well.
const { data } = await searchMovies({ query: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await searchMovies(dataConnect, searchMoviesVars);

console.log(data.movies);

// Or, you can use the `Promise` API.
searchMovies(searchMoviesVars).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

### Using `SearchMovies`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, searchMoviesRef, SearchMoviesVariables } from '@app/data';

// The `SearchMovies` query requires an argument of type `SearchMoviesVariables`:
const searchMoviesVars: SearchMoviesVariables = {
  query: ..., 
};

// Call the `searchMoviesRef()` function to get a reference to the query.
const ref = searchMoviesRef(searchMoviesVars);
// Variables can be defined inline as well.
const ref = searchMoviesRef({ query: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = searchMoviesRef(dataConnect, searchMoviesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

## MoviePage
You can execute the `MoviePage` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
moviePage(vars: MoviePageVariables): QueryPromise<MoviePageData, MoviePageVariables>;

moviePageRef(vars: MoviePageVariables): QueryRef<MoviePageData, MoviePageVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
moviePage(dc: DataConnect, vars: MoviePageVariables): QueryPromise<MoviePageData, MoviePageVariables>;

moviePageRef(dc: DataConnect, vars: MoviePageVariables): QueryRef<MoviePageData, MoviePageVariables>;
```

### Variables
The `MoviePage` query requires an argument of type `MoviePageVariables`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface MoviePageVariables {
  movieId: string;
}
```
### Return Type
Recall that executing the `MoviePage` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `MoviePageData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
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
```
### Using `MoviePage`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, moviePage, MoviePageVariables } from '@app/data';

// The `MoviePage` query requires an argument of type `MoviePageVariables`:
const moviePageVars: MoviePageVariables = {
  movieId: ..., 
};

// Call the `moviePage()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await moviePage(moviePageVars);
// Variables can be defined inline as well.
const { data } = await moviePage({ movieId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await moviePage(dataConnect, moviePageVars);

console.log(data.movie);

// Or, you can use the `Promise` API.
moviePage(moviePageVars).then((response) => {
  const data = response.data;
  console.log(data.movie);
});
```

### Using `MoviePage`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, moviePageRef, MoviePageVariables } from '@app/data';

// The `MoviePage` query requires an argument of type `MoviePageVariables`:
const moviePageVars: MoviePageVariables = {
  movieId: ..., 
};

// Call the `moviePageRef()` function to get a reference to the query.
const ref = moviePageRef(moviePageVars);
// Variables can be defined inline as well.
const ref = moviePageRef({ movieId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = moviePageRef(dataConnect, moviePageVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movie);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movie);
});
```

## WatchHistoryPage
You can execute the `WatchHistoryPage` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
watchHistoryPage(vars?: WatchHistoryPageVariables): QueryPromise<WatchHistoryPageData, WatchHistoryPageVariables>;

watchHistoryPageRef(vars?: WatchHistoryPageVariables): QueryRef<WatchHistoryPageData, WatchHistoryPageVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
watchHistoryPage(dc: DataConnect, vars?: WatchHistoryPageVariables): QueryPromise<WatchHistoryPageData, WatchHistoryPageVariables>;

watchHistoryPageRef(dc: DataConnect, vars?: WatchHistoryPageVariables): QueryRef<WatchHistoryPageData, WatchHistoryPageVariables>;
```

### Variables
The `WatchHistoryPage` query has an optional argument of type `WatchHistoryPageVariables`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface WatchHistoryPageVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `WatchHistoryPage` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `WatchHistoryPageData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
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
```
### Using `WatchHistoryPage`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, watchHistoryPage, WatchHistoryPageVariables } from '@app/data';

// The `WatchHistoryPage` query has an optional argument of type `WatchHistoryPageVariables`:
const watchHistoryPageVars: WatchHistoryPageVariables = {
  limit: ..., // optional
};

// Call the `watchHistoryPage()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await watchHistoryPage(watchHistoryPageVars);
// Variables can be defined inline as well.
const { data } = await watchHistoryPage({ limit: ..., });
// Since all variables are optional for this query, you can omit the `WatchHistoryPageVariables` argument.
const { data } = await watchHistoryPage();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await watchHistoryPage(dataConnect, watchHistoryPageVars);

console.log(data.watches);

// Or, you can use the `Promise` API.
watchHistoryPage(watchHistoryPageVars).then((response) => {
  const data = response.data;
  console.log(data.watches);
});
```

### Using `WatchHistoryPage`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, watchHistoryPageRef, WatchHistoryPageVariables } from '@app/data';

// The `WatchHistoryPage` query has an optional argument of type `WatchHistoryPageVariables`:
const watchHistoryPageVars: WatchHistoryPageVariables = {
  limit: ..., // optional
};

// Call the `watchHistoryPageRef()` function to get a reference to the query.
const ref = watchHistoryPageRef(watchHistoryPageVars);
// Variables can be defined inline as well.
const ref = watchHistoryPageRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `WatchHistoryPageVariables` argument.
const ref = watchHistoryPageRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = watchHistoryPageRef(dataConnect, watchHistoryPageVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.watches);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.watches);
});
```

## BrowseMovies
You can execute the `BrowseMovies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
browseMovies(vars?: BrowseMoviesVariables): QueryPromise<BrowseMoviesData, BrowseMoviesVariables>;

browseMoviesRef(vars?: BrowseMoviesVariables): QueryRef<BrowseMoviesData, BrowseMoviesVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
browseMovies(dc: DataConnect, vars?: BrowseMoviesVariables): QueryPromise<BrowseMoviesData, BrowseMoviesVariables>;

browseMoviesRef(dc: DataConnect, vars?: BrowseMoviesVariables): QueryRef<BrowseMoviesData, BrowseMoviesVariables>;
```

### Variables
The `BrowseMovies` query has an optional argument of type `BrowseMoviesVariables`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface BrowseMoviesVariables {
  partialTitle?: string | null;
  minDate?: DateString | null;
  maxDate?: DateString | null;
  minRating?: number | null;
  ratings?: string[] | null;
  genres?: string[] | null;
}
```
### Return Type
Recall that executing the `BrowseMovies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `BrowseMoviesData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
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
```
### Using `BrowseMovies`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, browseMovies, BrowseMoviesVariables } from '@app/data';

// The `BrowseMovies` query has an optional argument of type `BrowseMoviesVariables`:
const browseMoviesVars: BrowseMoviesVariables = {
  partialTitle: ..., // optional
  minDate: ..., // optional
  maxDate: ..., // optional
  minRating: ..., // optional
  ratings: ..., // optional
  genres: ..., // optional
};

// Call the `browseMovies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await browseMovies(browseMoviesVars);
// Variables can be defined inline as well.
const { data } = await browseMovies({ partialTitle: ..., minDate: ..., maxDate: ..., minRating: ..., ratings: ..., genres: ..., });
// Since all variables are optional for this query, you can omit the `BrowseMoviesVariables` argument.
const { data } = await browseMovies();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await browseMovies(dataConnect, browseMoviesVars);

console.log(data.movies);

// Or, you can use the `Promise` API.
browseMovies(browseMoviesVars).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

### Using `BrowseMovies`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, browseMoviesRef, BrowseMoviesVariables } from '@app/data';

// The `BrowseMovies` query has an optional argument of type `BrowseMoviesVariables`:
const browseMoviesVars: BrowseMoviesVariables = {
  partialTitle: ..., // optional
  minDate: ..., // optional
  maxDate: ..., // optional
  minRating: ..., // optional
  ratings: ..., // optional
  genres: ..., // optional
};

// Call the `browseMoviesRef()` function to get a reference to the query.
const ref = browseMoviesRef(browseMoviesVars);
// Variables can be defined inline as well.
const ref = browseMoviesRef({ partialTitle: ..., minDate: ..., maxDate: ..., minRating: ..., ratings: ..., genres: ..., });
// Since all variables are optional for this query, you can omit the `BrowseMoviesVariables` argument.
const ref = browseMoviesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = browseMoviesRef(dataConnect, browseMoviesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

## GetMovies
You can execute the `GetMovies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
getMovies(vars?: GetMoviesVariables): QueryPromise<GetMoviesData, GetMoviesVariables>;

getMoviesRef(vars?: GetMoviesVariables): QueryRef<GetMoviesData, GetMoviesVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
getMovies(dc: DataConnect, vars?: GetMoviesVariables): QueryPromise<GetMoviesData, GetMoviesVariables>;

getMoviesRef(dc: DataConnect, vars?: GetMoviesVariables): QueryRef<GetMoviesData, GetMoviesVariables>;
```

### Variables
The `GetMovies` query has an optional argument of type `GetMoviesVariables`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface GetMoviesVariables {
  ids?: string[] | null;
}
```
### Return Type
Recall that executing the `GetMovies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMoviesData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
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
```
### Using `GetMovies`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, getMovies, GetMoviesVariables } from '@app/data';

// The `GetMovies` query has an optional argument of type `GetMoviesVariables`:
const getMoviesVars: GetMoviesVariables = {
  ids: ..., // optional
};

// Call the `getMovies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMovies(getMoviesVars);
// Variables can be defined inline as well.
const { data } = await getMovies({ ids: ..., });
// Since all variables are optional for this query, you can omit the `GetMoviesVariables` argument.
const { data } = await getMovies();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMovies(dataConnect, getMoviesVars);

console.log(data.movies);

// Or, you can use the `Promise` API.
getMovies(getMoviesVars).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

### Using `GetMovies`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMoviesRef, GetMoviesVariables } from '@app/data';

// The `GetMovies` query has an optional argument of type `GetMoviesVariables`:
const getMoviesVars: GetMoviesVariables = {
  ids: ..., // optional
};

// Call the `getMoviesRef()` function to get a reference to the query.
const ref = getMoviesRef(getMoviesVars);
// Variables can be defined inline as well.
const ref = getMoviesRef({ ids: ..., });
// Since all variables are optional for this query, you can omit the `GetMoviesVariables` argument.
const ref = getMoviesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMoviesRef(dataConnect, getMoviesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

## DetailedWatchHistory
You can execute the `DetailedWatchHistory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
detailedWatchHistory(): QueryPromise<DetailedWatchHistoryData, undefined>;

detailedWatchHistoryRef(): QueryRef<DetailedWatchHistoryData, undefined>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
detailedWatchHistory(dc: DataConnect): QueryPromise<DetailedWatchHistoryData, undefined>;

detailedWatchHistoryRef(dc: DataConnect): QueryRef<DetailedWatchHistoryData, undefined>;
```

### Variables
The `DetailedWatchHistory` query has no variables.
### Return Type
Recall that executing the `DetailedWatchHistory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DetailedWatchHistoryData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
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
```
### Using `DetailedWatchHistory`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, detailedWatchHistory } from '@app/data';


// Call the `detailedWatchHistory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await detailedWatchHistory();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await detailedWatchHistory(dataConnect);

console.log(data.watches);

// Or, you can use the `Promise` API.
detailedWatchHistory().then((response) => {
  const data = response.data;
  console.log(data.watches);
});
```

### Using `DetailedWatchHistory`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, detailedWatchHistoryRef } from '@app/data';


// Call the `detailedWatchHistoryRef()` function to get a reference to the query.
const ref = detailedWatchHistoryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = detailedWatchHistoryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.watches);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.watches);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `connector` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

updateUserRef(vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

updateUserRef(dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
```

### Variables
The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface UpdateUserVariables {
  displayName?: string | null;
  imageUrl?: string | null;
  username: string;
}
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface UpdateUserData {
  user: User_Key;
}
```
### Using `UpdateUser`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@app/data';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  displayName: ..., // optional
  imageUrl: ..., // optional
  username: ..., 
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ displayName: ..., imageUrl: ..., username: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `UpdateUser`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@app/data';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  displayName: ..., // optional
  imageUrl: ..., // optional
  username: ..., 
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ displayName: ..., imageUrl: ..., username: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## AddWatch
You can execute the `AddWatch` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
addWatch(vars: AddWatchVariables): MutationPromise<AddWatchData, AddWatchVariables>;

addWatchRef(vars: AddWatchVariables): MutationRef<AddWatchData, AddWatchVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
addWatch(dc: DataConnect, vars: AddWatchVariables): MutationPromise<AddWatchData, AddWatchVariables>;

addWatchRef(dc: DataConnect, vars: AddWatchVariables): MutationRef<AddWatchData, AddWatchVariables>;
```

### Variables
The `AddWatch` mutation requires an argument of type `AddWatchVariables`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface AddWatchVariables {
  movieId: string;
  format?: string | null;
  watchDate?: DateString | null;
  reviewId?: UUIDString | null;
}
```
### Return Type
Recall that executing the `AddWatch` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddWatchData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface AddWatchData {
  watch: Watch_Key;
}
```
### Using `AddWatch`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, addWatch, AddWatchVariables } from '@app/data';

// The `AddWatch` mutation requires an argument of type `AddWatchVariables`:
const addWatchVars: AddWatchVariables = {
  movieId: ..., 
  format: ..., // optional
  watchDate: ..., // optional
  reviewId: ..., // optional
};

// Call the `addWatch()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addWatch(addWatchVars);
// Variables can be defined inline as well.
const { data } = await addWatch({ movieId: ..., format: ..., watchDate: ..., reviewId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addWatch(dataConnect, addWatchVars);

console.log(data.watch);

// Or, you can use the `Promise` API.
addWatch(addWatchVars).then((response) => {
  const data = response.data;
  console.log(data.watch);
});
```

### Using `AddWatch`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addWatchRef, AddWatchVariables } from '@app/data';

// The `AddWatch` mutation requires an argument of type `AddWatchVariables`:
const addWatchVars: AddWatchVariables = {
  movieId: ..., 
  format: ..., // optional
  watchDate: ..., // optional
  reviewId: ..., // optional
};

// Call the `addWatchRef()` function to get a reference to the mutation.
const ref = addWatchRef(addWatchVars);
// Variables can be defined inline as well.
const ref = addWatchRef({ movieId: ..., format: ..., watchDate: ..., reviewId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addWatchRef(dataConnect, addWatchVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.watch);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.watch);
});
```

## AddReview
You can execute the `AddReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
addReview(vars: AddReviewVariables): MutationPromise<AddReviewData, AddReviewVariables>;

addReviewRef(vars: AddReviewVariables): MutationRef<AddReviewData, AddReviewVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
addReview(dc: DataConnect, vars: AddReviewVariables): MutationPromise<AddReviewData, AddReviewVariables>;

addReviewRef(dc: DataConnect, vars: AddReviewVariables): MutationRef<AddReviewData, AddReviewVariables>;
```

### Variables
The `AddReview` mutation requires an argument of type `AddReviewVariables`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface AddReviewVariables {
  movieId: string;
  rating: number;
  review?: string | null;
}
```
### Return Type
Recall that executing the `AddReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddReviewData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface AddReviewData {
  review: Review_Key;
}
```
### Using `AddReview`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, addReview, AddReviewVariables } from '@app/data';

// The `AddReview` mutation requires an argument of type `AddReviewVariables`:
const addReviewVars: AddReviewVariables = {
  movieId: ..., 
  rating: ..., 
  review: ..., // optional
};

// Call the `addReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addReview(addReviewVars);
// Variables can be defined inline as well.
const { data } = await addReview({ movieId: ..., rating: ..., review: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addReview(dataConnect, addReviewVars);

console.log(data.review);

// Or, you can use the `Promise` API.
addReview(addReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review);
});
```

### Using `AddReview`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addReviewRef, AddReviewVariables } from '@app/data';

// The `AddReview` mutation requires an argument of type `AddReviewVariables`:
const addReviewVars: AddReviewVariables = {
  movieId: ..., 
  rating: ..., 
  review: ..., // optional
};

// Call the `addReviewRef()` function to get a reference to the mutation.
const ref = addReviewRef(addReviewVars);
// Variables can be defined inline as well.
const ref = addReviewRef({ movieId: ..., rating: ..., review: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addReviewRef(dataConnect, addReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review);
});
```

## DeleteWatch
You can execute the `DeleteWatch` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [data/index.d.ts](./index.d.ts):
```javascript
deleteWatch(vars: DeleteWatchVariables): MutationPromise<DeleteWatchData, DeleteWatchVariables>;

deleteWatchRef(vars: DeleteWatchVariables): MutationRef<DeleteWatchData, DeleteWatchVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
deleteWatch(dc: DataConnect, vars: DeleteWatchVariables): MutationPromise<DeleteWatchData, DeleteWatchVariables>;

deleteWatchRef(dc: DataConnect, vars: DeleteWatchVariables): MutationRef<DeleteWatchData, DeleteWatchVariables>;
```

### Variables
The `DeleteWatch` mutation requires an argument of type `DeleteWatchVariables`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface DeleteWatchVariables {
  watchId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteWatch` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteWatchData`, which is defined in [data/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface DeleteWatchData {
  watch?: Watch_Key | null;
}
```
### Using `DeleteWatch`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteWatch, DeleteWatchVariables } from '@app/data';

// The `DeleteWatch` mutation requires an argument of type `DeleteWatchVariables`:
const deleteWatchVars: DeleteWatchVariables = {
  watchId: ..., 
};

// Call the `deleteWatch()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteWatch(deleteWatchVars);
// Variables can be defined inline as well.
const { data } = await deleteWatch({ watchId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteWatch(dataConnect, deleteWatchVars);

console.log(data.watch);

// Or, you can use the `Promise` API.
deleteWatch(deleteWatchVars).then((response) => {
  const data = response.data;
  console.log(data.watch);
});
```

### Using `DeleteWatch`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteWatchRef, DeleteWatchVariables } from '@app/data';

// The `DeleteWatch` mutation requires an argument of type `DeleteWatchVariables`:
const deleteWatchVars: DeleteWatchVariables = {
  watchId: ..., 
};

// Call the `deleteWatchRef()` function to get a reference to the mutation.
const ref = deleteWatchRef(deleteWatchVars);
// Variables can be defined inline as well.
const ref = deleteWatchRef({ watchId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteWatchRef(dataConnect, deleteWatchVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.watch);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.watch);
});
```

