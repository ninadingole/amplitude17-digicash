var customerController = function(Customer) {
    var get = function(req, res) {
        var data = [];
        data.push(new Customer({
            accountNumber: '1234567890',
            ifsc: 'ABCD12345',
            name: 'Ashish Khandelwal'
        }));
        for (var i = 0; i < data.length; i++) {
            var customer = data[i];
            customer.save(function(err) {
                if (err) {
                    res.status(500).send(err);
                }
            });
        }
        console.log('data Saved');
        res.status(200).send(data);
    };
    var getAll = function(req, res) {
        Customer.find(function(err, customers) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.render('allCustomers', {
                    customerList: customers,
                });
            }
        });
    };

    var getById = function(id, cb) {

        Customer.findById(id, function(err, customer) {
            cb(err, customer);
        });
    };

    return {
        get: get,
        getAll: getAll,
        getById: getById,
    }
}

module.exports = customerController;