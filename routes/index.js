'use strict'

var express = require('express');
var router = express.Router();

var tokens = ["8d0d99c453975d045587b3ef103a98f7"];
var persons = [{ name: "Валерій", sName: "Жмишенко", id: 0 }, { name: "Ілья", sName: "Мендельсон", id: 1 }, { name: "Деніс", sName: "Петров", id: 2 }]
var id = 2;


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/editPerson', function(req, res, next) {
    	let didFind = false;
        for (let el of persons) {
        	didFind = false;
            if (el.id == req.body.id) {
                el.name = req.body.name;
                el.sName = req.body.sName;
                res.send({ status: "ok", data: persons })
                didFind = true;
                break;
            }
        }
        if(didFind == false){
        	res.send({ status: "error", error: "Відсутній ID у базі" })
        }
});

router.get('/getPersons', function(req, res, next) {
    res.send({status: "ok", data: persons})
});

router.post('/addPerson', function(req, res) {
	if(req.body.token){
	    	if(req.body.name && req.body.sName){
	    		let didFind = false
		        for (let el of persons) {
		        	didFind = false
		            if (el.name == req.body.name && el.sName == req.body.sName) {
		                res.send({ status: "error", error: "Даний запис вже існує" })
		                didFind = true
		                break;
		            }
		        }
		        if(!didFind){
		        	let obj = {name: req.body.name, sName: req.body.sName, id: ++id};
		    		persons.push(obj)
		    		console.log(id)
		    		console.log(persons)
		    		res.send({status: "ok", data: persons})
		        }
	    	}
	    	else{
	    		res.send({ status: "error", error: "Відсутні ім'я чи прізвище" })
	    	}
	    }
	    else{
	    	res.send({ status: "error", error: "Відсутній токен" })
	    }
	});

router.post('/deletePerson', function(req, res, next) {
    	let didFind = false;
        for (let el of persons) {
        	didFind = false;
            if (el.id == req.body.id) {
            	console.log(el)
            	persons.splice(persons.indexOf(el), 1);
                res.send({ status: "ok", data: persons })
                didFind = true;
                break;
            }
        }
        if(didFind == false){
        	res.send({ status: "error", error: "Відсутній ID у базі" })
        }
});




module.exports = router;