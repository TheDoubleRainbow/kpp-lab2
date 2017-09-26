new Vue({
    el: "#main",
    data: {
        persons: []
    },

    methods: {
        addPerson: function(value) {
            let that = this;
        	let newValue = prompt("Нове ім'я", '');
        	let nameArray = newValue.split(' ');
            axios.post('/addPerson', {
                    token: '8d0d99c453975d045587b3ef103a98f7',
                    name: nameArray[0],
                    sName: nameArray[1]
                })
                .then(function(response) {
                    if (response.data.status == "error"){
                    	alert("Error")
                    }
                    else{
                    	that.persons = response.data.data
                    }
                })
        },
        editPerson: function(person) {
        	let that = this;
        	let newValue = prompt("Нове ім'я", person.name + ' ' + person.sName);
        	let nameArray = newValue.split(' ');
            axios.post('/editPerson', {
                   	name: nameArray[0],
                	sName: nameArray[1],
                    id: person.id
                })
                .then(function(response) {
                	console.log(response)
                    if (response.data.status == "error"){
                    	alert("Error")
                    }
                    else{
                    	that.persons = response.data.data
                    }
                })
        },
        deletePerson: function(id){
        	let that = this;
        	axios.post('/deletePerson', {
                    id: id
                })
                .then(function(response) {
                    if (response.data.status == "error"){
                    	alert("Error")
                    }
                    else{
                    	that.persons = response.data.data
                    }
                })
        }
    },

    created: function() {
        let that = this;
        axios.get('/getPersons')
            .then(function(response) {
                that.persons = response.data.data
            })
    }
})