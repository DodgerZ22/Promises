const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });

    
    /* 
    To support error handling, promise objects provide a catch()
    method. This is a lot like then(): you call it and pass an 
    error function. However, while the handler passed to then()
    is called when the asynch operation succeeds, the handler passed
    to catch() is called when the asynch op fails.
    */