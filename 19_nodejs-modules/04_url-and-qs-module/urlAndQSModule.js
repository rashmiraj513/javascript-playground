const url = require('url');
const querystring = require('querystring');

// url.parse() - Breaks the URL in components. See the output for more information.
const myUrl = url.parse('https://example.com/listing?id=1000&premium=true');
console.log(myUrl);

// url.format() - Creates a URL from the provided components. See the output for more information.
const myUrl2 = url.format({
  protocol: 'https',
  host: 'www.example.com',
  pathname: 'listing',
  query: {
    id: 1000,
    premium: true,
  },
});

console.log(myUrl2);

// querystring.parse() - Extracts the components from the provided query string.
const myQs = 'year=2023&month=january&day=20';

const q = querystring.parse(myQs);
console.log(q);
console.log(q.month);

// querystring.stringify() - Creates a QueryString from the provided data.
const myQs2 = querystring.stringify({
  year: 2023,
  month: 'january',
  day: 20,
});

console.log(myQs2);
