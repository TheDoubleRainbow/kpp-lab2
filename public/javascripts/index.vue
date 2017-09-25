new Vue({
	el: "#main",
	data: {
		tests: []
	},

	created: function(){
		let that = this;
		fetch('/getPerson?id=0')
		.then(function(response) {
			response.json().then(function(data) {
				that.tests.push({link: "/getPerson?id=0", answer: data.data.name + " " + data.data.sName})
			});
		});
		fetch('/getPerson?id=1337')
		.then(function(response) {
			response.json().then(function(data) {
				that.tests.push({link: "/getPerson?id=1337", answer: data.error})
			});
		});
		fetch('/getPerson')
		.then(function(response) {
			response.json().then(function(data) {
				that.tests.push({link: "/getPerson", answer: data.error})
			});
		});
		fetch('/getAmount')
		.then(function(response) {
			response.json().then(function(data) {
				that.tests.push({link: "/getAmount", answer: data.data})
			});
		});
		fetch('/addPerson?token=8d0d99c453975d045587b3ef103a98f7&name=Іван&sName=Гамаз')
		.then(function(response) {
			response.json().then(function(data) {
				that.tests.push({link: "/addPerson?token=8d0d99c453975d045587b3ef103a98f7&name=Іван&sName=Гамаз", answer: data.error})
			});
		});
		fetch('/getAmount')
		.then(function(response) {
			response.json().then(function(data) {
				that.tests.push({link: "/getAmount", answer: data.data})
			});
		});
		fetch('/addPerson?name=Іван&sName=Гамаз')
		.then(function(response) {
			response.json().then(function(data) {
				that.tests.push({link: "/addPerson?name=Іван&sName=Гамаз", answer: data.error})
			});
		});
		fetch('/addPerson?token=8d0d99c453975d045587b3ef103a98f7')
		.then(function(response) {
			response.json().then(function(data) {
				that.tests.push({link: "/addPerson?token=8d0d99c453975d045587b3ef103a98f7", answer: data.error})
			});
		});
	}
})