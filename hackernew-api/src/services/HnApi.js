export function HnApi() {
   fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
       .then(response => response.json())
       .then(data =>  data);
}

