var tweeters = [
    {
        tweet:  'COVID just keeps on going',
        username: "Jason Kenny",
        created_at: "11-17-2020",
        age: 12
    },

    {
        tweet: 'Trump is still acting up, what did you expect',
        username: "Joe Biden",
        created_at: "11-12-2020",
        age: 65
    },

    {
        tweet: 'Will we be abandoning the Keystone Pipe Line now',
        username: "Justin Trudeau",
        created_at: "11-14-2020",
        age: 47
    },

    {
        tweet: 'Still not use to Alberta cold',
        username: "Howard Jer",
        created_at: "10-31-2020",
        age: 15
    },

    {
        tweet: 'Next 6 months; shovel sidewalk, shovel sidewalk, shovel sidewalk',
        username:   "Snow Blower Fairy",
        created_at: "11-01-2020",
        age: 120
    },

    {
        tweet: 'Why do they put braille on drive-thru atm keypads',
        username: "Steve Martin",
        created_at: "03-15-2020",
        age: 78
    },

    {
        tweet: "My feet hurt, buy right sized shoes",
        username: "Bobo Clown",
        created_at: "05-23-2020",
        age:    17
    },

    {
        tweet: "Rode a bull named Bodacious for 8 seconds",
        username: "Tim Mcgraw",
        created_at: "06-06-2020",
        age: 56
    },

    {
        tweet:  "Empty and dark shall I raise my lantern",
        username: "Kahlil Gibran",
        created_at: "08-16-1942",
        age: 36
    },

    {
        tweet: "Let he whohath steerage of my course, direct my sails",
        username: "William Shakespeare",
        created_at: "07-14-1867",
        age: 58
    },

    {
        tweet: "With great power comes great responsibility",
        username: "Ben Parker",
        created_at: "09-30-2013",
        age: 72
    }


];


function is18Plus(tweets){
  return tweets.age >=18;
}


var tweetList = tweeters.filter(is18Plus);




console.log(tweetList)












