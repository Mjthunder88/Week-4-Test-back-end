let subscribers = [
    { email: 'gary@123.com', firstname: 'gary', lastname: 'john' }
]
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A fresh start will put you on your way", "A lifetime friend shall soon be made", "A pleasent surprise is waiting for you", "All your hard work will soon pay off.", "Any day above ground is a good day."]
        // my array of fotrunes

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        //we then grab a random index of the fortunes array between 1-5
        let randomFortune = fortunes[randomIndex]
        // then we assign that random index to a varaible and use it to select a random fortune in the fortunes array.
        
        res.status(200).send(randomFortune)
        //then we have to send a response since our get is waiting for a promise to get back. 
    },
    emailSubmit: (req, res) => {
        let subsData = req.body
        // console.log(subsData)  
        let subscriber = {
            email: subsData.email,
            firstname: subsData.firstname,
            lastname: subsData.lastname,
        }    
        subscribers = subscriber
        // console.log(subscribers)
        res.status(200).send("Thank you for subscribing!")
        return
    },
    updateSubs: (req, res) => {
        let oldUser = req.param
        console.log(oldUser)
        if (subscribers[i].email === oldUser.oldEmail) {
            subscribers[i].email = oldUser.email
            res.status(200).send('Your information has been updated!')
        }

    },
    deletesub: (req,res) => {
        let sub = req.param.email
        if (subscribers[1] === sub.email) {
            subscribers.splice(index, 1)
        }
    }


}

console.log(subscribers)