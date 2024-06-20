// Success
fetch('http://httpstat.us/200')
  .then((res) => {
    return res;
  })
  .then(() => console.log('Success'));

// The issue here is that the 'success' shows and
// .catch() does not run for an error status like 404
// or, 500.
// Here in case of error, catch is not working.
// So, we have to customize it. However, this scenario
// will work with axios.
fetch('http://httpstat.us/404')
  .then((res) => {
    return res;
  })
  .then(() => console.log('Success'))
  .catch((err) => console.log(err));

// Catch only runs on a network error (Invalid API or,
// some issue related to API)
fetch('http://hello123.net')
  .then((res) => {
    return res;
  })
  .then(() => console.log('Success'))
  .catch((err) => console.log(err));

// Test with response.ok (Manually)
fetch('http://httpstat.us/404')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Request Failed!');
    }
    return response;
  })
  .then(() => console.log('Success'))
  .catch((err) => console.log(err));

// Check for specific code with response.status
fetch('http://httpstat.us/200')
  .then((res) => {
    if (res.status === 404) {
      throw new Error('Not Found!');
    } else if (res.status === 500) {
      throw new Error('Server Error!');
    } else if (res.status !== 200) {
      throw new Error('Request Failed!');
    }
    return res;
  })
  .then(() => console.log('Success'))
  .catch((err) => console.log(err));
