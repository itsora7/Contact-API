//create UI
//call api to fetch 20 users
const apiUrl = "https://randomuser.me/api/?results=50&";
let userList = []

const fetchUsers = () => {
    fetch (apiUrl)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data.results)
    })
}

fetchUsers()
//loop through he user array and display on the screen
const display = (users) => {
console.log(users)
}

//have search functionality to search user by their name

//have the filter to fectch users based on the gender.
