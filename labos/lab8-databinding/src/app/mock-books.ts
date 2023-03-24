import { Book } from "./book";

export const BOOKS: Book[] = [
        {
          title: 'The maze runner',
          author: 'James Dashner',
          genre: 'sciencefiction',
          img: 'TheMazeRunner.jpg',
          price: 9.69,
          summary: `A group of teenagers, who call themselves the "Gladers" are left in a strange place which they call the "Glade".
                    The Glade is surrounded by four doors, leading to the Maze, that close every night at sundown and open in the morning.
                    Beyond the walls of the Glade is the ever-changing Maze, populated by horrifying, biomechanical creatures, called Grievers.
                    Every month, a newcomer, nicknamed "Greenie", joins the Gladers, sent by a lift they call the Box. Each newcomer has all past memories
                    (except language and other common things) wiped out. The only thing that they remember is their name. They are watched by large mechanical beetles,
                    called "beetle blades" which belong to their "creators". Each beetle blade has the word "WICKED" stamped across its back. The ultimate goal of the
                    Gladers is to find a way out of the Maze. To do so, certain Gladers called "Runners" venture into the Maze every day, to map it in an attempt to
                    find a pattern in the Maze that would lead them to find an exit. The main character, Thomas, arrives at the Glade. Shortly thereafter, a girl is
                    sent up through the Box, arriving in a coma, and bringing the message: Everything is going to change. She bears a note saying that she is the last
                    newbie to come through the Box. Thomas becomes an object of reverence, suspicion, and great curiosity to the Gladers due to his ties to all of the
                    strange happenings in the Glade, fueled greatly after he becomes the first to survive a night inside the Maze. Together with new friends, such as
                    Chuck (the second-newest newbie), Newt (second in command of the Gladers), and Minho (Keeper of the Runners), he begins to solve the mystery of the
                    Maze and search for a way out. Thomas leads his group to make it out of the maze and find a way back home and chuck gets shot in the chest saving
                    Thomas\'s life so he can carry the team to defeat wicked.`,
          releaseDate: new Date('2009-10-16')
        },
        {
          title: 'The hunger games',
          author: 'Suzanne Collins',
          genre: 'sciencefiction',
          img: 'TheHungerGames.jpg',
          price: 7.99,
          summary: `The first book in the ground-breaking Hunger Games trilogy. Set in a dark vision of the near future, a terrifying reality TV show is taking place.
                    Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old
                    Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before.
                    For her, survival is second nature. now a major feature film starring Jennifer Lawrence, Josh Hutcherson & Liam Hemsworth OTHER BOOKS IN THE SERIES Catching
                    Fire Mockingjay The Ballad of Songbirds and Snakes`,
          releaseDate: new Date('2011-12-10')
        },
        {
          title: 'Harry Potter and the Order of the Phoenix',
          author: 'J.K.Rowling',
          genre: 'fantasy',
          img: 'HarryPotterPhoenix.jpg',
          price: 8.39,
          summary: `Dark times have come to Hogwarts. After the Dementors attack on his cousin Dudley, Harry Potter knows
                    that Voldemort will stop at nothing to find him. there are many who deny the Dark Lords return, but Harry
                    is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow
                    Professor Snape to teach him how to protect himself from Voldemorts savage assaults on his mind. But they
                    are growing stronger by the day and Harry is running out of time.`,
          releaseDate: new Date('2014-09-01')
        },
        {
          title: 'ng-book: The complete book on Angular',
          author: 'Nate Murray, Felipe Coury, Ari Lerner, Carlos Taborda',
          genre: 'software',
          img: 'ng-book.jpg',
          price: 50,
          summary: `ng-book is an e-book designed to teach you step-by-step how to create serious Angular apps: from empty-folder to deployment. Each chapter covers a topic and we provide
                    full code examples for every project in the book.`,
          releaseDate: new Date('2021-02-01')
        },
        {
          title: 'Don\'t Make Me Think, Revisited',
          author: 'Steve Krug',
          genre: 'software',
          img: 'DontMakeMeThink.jpg',
          price: 29.99,
          summary: `Steve returns with fresh perspective to reexamine the principles that made Dont Make Me Think a
                    classic-with updated examples and a new chapter on mobile usability. And its still short, profusely
                    illustrated. . . and best of all-fun to read. If you've read it before, you'll rediscover what made
                    Don't Make Me Think so essential to Web designers and developers around the world. If you've never read
                    it, you'll see why so many people have said it should be required reading for anyone working on Web sites.`,
          releaseDate: new Date('2014-01-21')
        }
];
