export const getSeriesRequest = () => {
  return {
    type: 'GET_SERIES_REQUEST',
  }
}

export const getSeriesSuccess = (data) => {
  return {
    type: 'GET_SERIES_SUCCESS',
    payload: {
      data,
    }
  }
}

export const getSeriesFailure = (error) => {
  return {
    type: 'GET_SERIES_FAILURE',
    payload: {
      error,
    }
  }
}
