// Test review! Not my resubmission!
//---------------------------------



// With forms and using the "submit" event listener you must use a event.preventDefault to prevent the page from refreshing. 
//If it refreshes then you won't be able to see the response you get from the back end!

//-----------

// you can also create the body/object you're trying to post/create before the axios request but in the same function
// Function post () {
//     const obj = {
//         
//}
//  then axios.post(URL, obj)
//}


//-----------------
// in email submit you need to push the new object/new subscriber to the database not reassign it. 
// in that same function you can also destructure the values you get from request.body 

//----------------

// When using a route param you can add it onto the URL.
// axios.delete("url" + id) front end
// app .delete(endpoint/:id) back end 
// and make sure you convert the id /param you pass through as a number if you don't want it to be a string. 



//----------------- put request----------
//Puts can take a body just like a post can
// but you can also use a query param or a route param to update the info
// you need some way to identify the certain object you want to update/ weather its an id or name or email
// then loop through your database to compare each object and if they're the same then update that info

// axios.put("url?id=" + param) front end 
// app . put("url", callbackfunction) back end 

//controller function

// function update (req, res) {
//     let {id} = req.query
//     id = +id
//     for (let i = 0; i < database.length; i ++) {
//         if(database[i].id === id) {
//             database[i].email = update
//         }
//     }
// }