/*
resolve and reject are just ways to tell the caller that your promise is completed (it's been
resolved or rejected). .then can be used, but I prefer to use await when I can.

Using return new Promise( (resolve, reject) => {}); is a good way to wrap things to make then
asynchrous which is awesome, but most of the time, if something returns a promise (like a lot of
libraries are starting to do), then you can just await it. Same thing as calling .then on a promise
(from a 10,000 foot level)
*/

const myPromise = async () => {
	return new Promise( (resolve, reject) => {
  	setTimeout( () => {
    	resolve('im done!');
    }, 1000);
  })
}

// Use .then to call your promise in a 'callback way'
myPromise().then( text => console.log(text));

async function awaitThePromise() {
// using await to call your promise
	const result = await myPromise();
  console.log(result);
}

awaitThePromise();