const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].name);
    });
  });

  
 /*
 With the fetch() API, once you get a Response object, 
 you need to call another function to get the response data. 
 In this case, we want to get the response data as JSON, so we would call the json() 
 method of the Response object. It turns out that json() is also asynchronous. 
 So this is a case where we have to call two successive asynchronous functions.
 
 */ 