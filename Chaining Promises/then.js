const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });

    
   /* 
   The then() function returns the promise, which will be 
   completed with the result of the function passed to it.

   Instead of calling the second then() inside the handler for the first then(), 
   we can return the promise returned by json(), and call the second then() on that 
   return value. This is called promise chaining and means we can avoid ever-increasing 
   levels of indentation when we need to make consecutive asynchronous function calls.
   */ 

   //if the response wasn't able to handle the response.


  