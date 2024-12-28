export function printAge(Age){
    console.log(Age)
}

class CustomerDetails {

    printFirstName (firstName) {
        console.log(firstName)
    }

    /**
     * This method will print the last name
     * @param {string} lastName 
     */
    printLastName (lastName) {
        console.log(lastName)
    }
}

export var customerDetails = new CustomerDetails()