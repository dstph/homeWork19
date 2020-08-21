async function getPromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(
    	() => resolve(Math.floor(Math.random()*100)),
    	3000)
  });
  let result = await promise; 
  return result; 
}

function afterFirstPromise(data){
	data += 100;
	return data;
}
function afterSecondPromise(data){
	data += 100;
	return data;
}
function afterThirdPromise(data){
	data += 100;
	return data;
}
function  runAfter(data){
	
	console.log(data);

	return data.reduce(
		(sum, curent) =>{ 
			let all = sum+curent;
			return all;  

	
	
}

Promise
	.all([
		getPromise()
			.then(
				data =>  afterFirstPromise(data)
			),
		getPromise()
			.then(
				data =>  afterSecondPromise(data)
			),
		getPromise()
			.then(
				data =>  afterThirdPromise(data)
			)
	])
	.then(
		data => runAfter(data)
	)
	.then(
		data => console.log(data)
	)

