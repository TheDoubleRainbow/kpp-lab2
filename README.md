# Лабороторна 2

Тест: https://pacific-wave-24461.herokuapp.com/


---

router.get('/getPerson', function(req, res, next) {
    if (req.query.id) {
    	let didFind = false
        for (let el of persons) {
        	didFind = false
            if (el.id == req.query.id) {
                res.send({ status: "ok", data: el })
                didFind = true
                break;
            }
        }
        if(didFind == false){
        	res.send({ status: "error", error: "Відсутній ID у базі" })
        }

    } else {
        res.send({ status: "error", error: "Відсутній ID у запиті" })
    }
});

router.get('/getAmount', function(req, res, next) {
    res.send({status: "ok", data: persons.length})
});

router.get('/addPerson', function(req, res, next) {
    if(req.query.token){
    	if(req.query.name && req.query.sName){
    		let didFind = false
	        for (let el of persons) {
	        	didFind = false
	            if (el.name == req.query.name && el.sName == req.query.sName) {
	                res.send({ status: "error", error: "Даний запис вже існує" })
	                didFind = true
	                break;
	            }
	        }
	        if(!didFind){
	        	let obj = {name: req.query.name, sName: req.query.sName, id: ++id};
	    		persons.push(obj)
	    		console.log(id)
	    		console.log(persons)
	    		res.send({status: "ok"})
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

---