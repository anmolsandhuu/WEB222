/********************************************************************************* *
 *  WEB222 – Assignment 02 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source * (including web sites) 
or distributed to other students. * * 
Name: __Anmol Singh Sandhu__ Student ID: _135051175_ Date: _12 October, 2018_ 
* ********************************************************************************/
/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */
     
var CustomerDB = 
    { customers : [],    addresses : [],    stores : [], 
     

    insertData : function (somedata)
     { 
         
        for (var i = 0; i < somedata.length; i++)
        {
            if (somedata[i].type === 'store')
            {
                CustomerDB.addStore(somedata[i]);
            }
            if (somedata[i].type === 'customer')
            {
                 CustomerDB.addCustomer(somedata[i]);
            }
            if (somedata[i].type === 'address')
            {
                 CustomerDB.addAddress(somedata[i]);
            }
        }
    },
   
    addCustomer : function (customerObj)
     {           
            customerObj.data.add_date = new Date();
            CustomerDB.customers.push(customerObj);
         
    },
     
    outputCustomerById : function (customer_id)
     {
       
        var id, fName, lName, email, address, customer, date, fullCustInfo;

        for (var i = 0; i < CustomerDB.customers.length; i++)
        {
            if (customer_id === CustomerDB.customers[i].data.customer_id)
            {
                id = CustomerDB.customers[i].data.customer_id;
                fName = CustomerDB.customers[i].data.first_name;
                lName = CustomerDB.customers[i].data.last_name;
                email  = CustomerDB.customers[i].data.email;
                
                customer = 'Customer ' + id + ': ' + fName + ' ' + lName + ' (' + email + ')';
                address = 'Home Address: ' + CustomerDB.getAddressById(CustomerDB.customers[i].data.address_id);
                date  = 'Joined: ' + CustomerDB.customers[i].data.add_date;

                fullCustInfo = customer + '\n' + address + '\n' + date;
              
                return fullCustInfo;            
            }
        }
     },
     
    outputAllCustomers : function()
     {
        
        console.log('All Customers');
        for (var i = 0; i < CustomerDB.customers.length; i++)
        {
            console.log(CustomerDB.outputCustomerById(CustomerDB.customers[i].data.customer_id));
        }
         
    },
    outputCustomersByStore : function(store_id)
     {
        console.log('Customers in Store: ' + CustomerDB.getStoreById(store_id));
        for (var i = 0; i < CustomerDB.customers.length; i++)
        {
            if (store_id === CustomerDB.customers[i].data.store_id)
            {
                 console.log(CustomerDB.outputCustomerById(CustomerDB.customers[i].data.customer_id));
            }
        }
         
    },
    removeCustomerById : function(customer_id)
     {
        for (var i = 0; i < CustomerDB.customers.length; i++)
        {
            if (customer_id === CustomerDB.customers[i].data.customer_id)
            {
                CustomerDB.customers.splice(i, 1);
                CustomerDB.removeAddressById(CustomerDB.customers[i].data.address_id);
            }
        }
         
    },
    addAddress : function (addressObj)
     {
         CustomerDB.addresses.push(addressObj);
    },

    getAddressById : function (address_id)
     {
        var str, city, prov, p_code, fullAdd;

        for (var i = 0; i < CustomerDB.addresses.length; i++)
        {
            if (address_id === CustomerDB.addresses[i].data.address_id)
            {
                str = CustomerDB.addresses[i].data.address;
                city = CustomerDB.addresses[i].data.city;
                prov = CustomerDB.addresses[i].data.province;
                p_code = CustomerDB.addresses[i].data.postal_code;             
            }
        }
        fullAdd = str + ' ' + city + ', ' + prov + '. ' + p_code; 
        return fullAdd;
    },

    outputAllAddresses : function ()
     {

        console.log('All Addresses');
        for (var i = 0; i < CustomerDB.addresses.length; i++)
        {
            console.log('Address ' + CustomerDB.addresses[i].data.address_id + ': ' +
                        CustomerDB.getAddressById(CustomerDB.addresses[i].data.address_id));
        }
    },
   
    removeAddressById: function (address_id)
     {  var xyz = 0;
 
        for (var i = 0; i < CustomerDB.customers.length; i++)
        {
            if (address_id === CustomerDB.customers[i].data.address_id)
            {
                xyz++;
            }
        }
       
        for ( i = 0; i < CustomerDB.stores.legth; i++)
        {
            if (address_id === CustomerDB.stores[i].data.address_id)
            {
                xyz++;
            }
        }
        
        if (xyz === 1)
        {
            for ( i = 0; i < CustomerDB.addresses.length; i++)
            {
                if (address_id === CustomerDB.addresses[i].data.address_id)
                {
                    CustomerDB.addresses.splice(i, 1);
                }
            }
        }

        
    },
 
    addStore : function (storeObj)
     {
         CustomerDB.stores.push(storeObj);
    },
     

    getStoreById : function (store_id)
     {
        for (var i = 0; i < CustomerDB.stores.length; i++)
        {
            if (store_id === CustomerDB.stores[i].data.store_id)
            {
                return CustomerDB.stores[i].data.name;
            }
        }
    },
     
     
    outputAllStores : function ()
     {
        var fullStoreAdd, id, name, address;

        console.log('All stores');
        for ( var i = 0; i < CustomerDB.stores.length; i++)
        {

            id = CustomerDB.stores[i].data.store_id;
            name = CustomerDB.stores[i].data.name;
            address = CustomerDB.getAddressById(CustomerDB.stores[i].data.address_id);
         
            fullStoreAdd = 'Store' + id + ': ' + name + '\n' + 'Location: ' + address;
          
            console.log(fullStoreAdd);
        }
    }
};




/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 
