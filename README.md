# KrakenFlex Back End Test

Developed all tasks including bonus requirement. Program flow like this:

1. Get all data in paralel via `Promise.all()`.
2. Filter by requirements and attach extra name field to data.
3. Send generated data to via POST request.

> > If '500 Internal Server Error' responed in any API requests, it retryies the request.

- You can achieve API requests from `requests.ts`.
- `Axios` package is used for API requests.
- `Winston` is used for logging operations.
- Program needs to `.env` file to start.

## Usage

### Install dependencies

```sh
npm install
```

### Environment Variables

Program needs to `.env` file for start. `.env` file must be include 3 variables:

- SITE_ID that is `norwich-pear-tree`
- BASE_URL that is `https://api.krakenflex.systems/interview-tests-mock-api/v1/`
- API_KEY that is given by KrakenFlex

### Run the application

```sh
npm run start
```

### Run the unit tests

```sh
npm run test
```
