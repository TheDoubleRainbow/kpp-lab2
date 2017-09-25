'use strict'

var express = require('express');
var router = express.Router();

var tokens = ["8d0d99c453975d045587b3ef103a98f7"];
var persons = [{ name: "Валерій", sName: "Жмишенко", id: 0 }, { name: "Ілья", sName: "Мендельсон", id: 1 }, { name: "Деніс", sName: "Петров", id: 2 }]
var id = 2;


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/getPerson', function(req, res, next) {
    if (req.query.id) {
    	let didFind = false
        for (let el of persons) {
        	didFind = false
            if (el.id == req.query.id) {
                res.send({ status: "ok", data: el })
                didFind = true
            }
        }
        if(didFind == false){
        	res.send({ status: "error", error: "Відсутній ID у базі" })
        }

    } else {
        res.send({ status: "error", error: "Відсутній ID у запиті" })
    }
});

router.get('getAmount', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('addPerson', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



module.exports = router;