const endPoint = `http://localhost:3000/api/people`

class StaticModels {
	static all = () => {
		return fetch(endPoint)
			.then(response => response.json())
			.catch(error => console.log('Could not GET all people \n', error));
	};

	static create = (name) => {
		return fetch(endPoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(name)
		})
		.then(response => response.json())
		.catch(error => console.log('Could not POST person \n', error))
	};
};

export default StaticModels;