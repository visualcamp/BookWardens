export interface Book {
    id: string;
    title: string;
    author: string;
    level: number; // 1-10 scale
    lexile: string; // e.g. "900L"
    coverUrl: string;
    summary: string;
    keywords: { word: string; definition: string }[];
    quiz: { question: string; options: string[]; answer: number }[];
}

export const BOOKS: Book[] = [
    {
        id: "alice-adventures",
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        level: 3,
        lexile: "890L",
        coverUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&auto=format&fit=crop",
        summary: "A young girl named Alice falls through a rabbit hole into a fantasy world called Wonderland.",
        keywords: [
            { word: "curious", definition: "Eager to know or learn something." },
            { word: "venture", definition: "A risky or daring journey or undertaking." },
            { word: "wander", definition: "To walk or move in a leisurely, casual, or aimless way." },
            { word: "peculiar", definition: "Strange or odd; unusual." },
            { word: "nonsense", definition: "Spoken or written words that have no meaning or make no sense." }
        ],
        quiz: [
            {
                question: "Who did Alice follow down the rabbit hole?",
                options: ["A White Rabbit", "A Cheshire Cat", "A Mad Hatter", "A Queen of Hearts"],
                answer: 0
            },
            {
                question: "What happened when Alice drank from the bottle labeled 'DRINK ME'?",
                options: ["She grew larger", "She shrank", "She became invisible", "She fell asleep"],
                answer: 1
            },
            {
                question: "Which creature gave Alice advice about her size?",
                options: ["The Caterpillar", "The Dormouse", "The Mock Turtle", "The Gryphon"],
                answer: 0
            }
        ]
    },
    {
        id: "sherlock-holmes",
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        level: 6,
        lexile: "1080L",
        coverUrl: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?q=80&w=400&auto=format&fit=crop",
        summary: "A collection of twelve short stories featuring the famous detective Sherlock Holmes and his friend Dr. John Watson.",
        keywords: [
            { word: "deduction", definition: "The inference of particular instances from a general law." },
            { word: "observation", definition: "The action or process of observing something or someone carefully." },
            { word: "elementary", definition: "Relating to the basic elements or first principles of a subject." },
            { word: "clue", definition: "A piece of evidence or information used in the detection of a crime." },
            { word: "mystery", definition: "Something that is difficult or impossible to understand or explain." }
        ],
        quiz: [
            {
                question: "Where do Sherlock Holmes and Dr. Watson live?",
                options: ["221B Baker Street", "10 Downing Street", "Buckingham Palace", "Scotland Yard"],
                answer: 0
            },
            {
                question: "What is Holmes famous for using to solve crimes?",
                options: ["Magic", "Deductive reasoning", "Time travel", "Brute force"],
                answer: 1
            },
            {
                question: "Who is the narrator of the stories?",
                options: ["Sherlock Holmes", "Dr. John Watson", "Mrs. Hudson", "Moriarty"],
                answer: 1
            }
        ]
    },
    {
        id: "pride-prejudice",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        level: 7,
        lexile: "1190L",
        coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop",
        summary: "The story charts the emotional development of the protagonist Elizabeth Bennet, who learns the error of making hasty judgments.",
        keywords: [
            { word: "prejudice", definition: "Preconceived opinion that is not based on reason or actual experience." },
            { word: "pride", definition: "A feeling or deep pleasure or satisfaction derived from one's own achievements." },
            { word: "marriage", definition: "The legally or formally recognized union of two people as partners in a personal relationship." },
            { word: "society", definition: "The aggregate of people living together in a more or less ordered community." },
            { word: "class", definition: "The system of ordering a society in which people are divided into sets based on perceived social or economic status." }
        ],
        quiz: [
            {
                question: "Who is the main female protagonist?",
                options: ["Jane Bennet", "Elizabeth Bennet", "Lydia Bennet", "Mary Bennet"],
                answer: 1
            },
            {
                question: "Who is the wealthy gentleman that Elizabeth initially dislikes?",
                options: ["Mr. Bingley", "Mr. Darcy", "Mr. Wickham", "Mr. Collins"],
                answer: 1
            },
            {
                question: "How many Bennet sisters are there?",
                options: ["Three", "Four", "Five", "Six"],
                answer: 2
            }
        ]
    },
    {
        id: "dracula",
        title: "Dracula",
        author: "Bram Stoker",
        level: 6,
        lexile: "1060L",
        coverUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop",
        summary: "The story of Count Dracula's attempt to move from Transylvania to England to spread the undead curse.",
        keywords: [
            { word: "vampire", definition: "A corpse supposed to leave its grave at night to drink the blood of the living." },
            { word: "immortal", definition: "Living forever; never dying or decaying." },
            { word: "castle", definition: "A large building, typically of the medieval period, fortified against attack." },
            { word: "fear", definition: "An unpleasant emotion caused by the belief that someone or something is dangerous, likely to cause pain, or a threat." },
            { word: "blood", definition: "The red liquid that circulates in the arteries and veins of humans and other vertebrate animals." }
        ],
        quiz: [
            {
                question: "Where does Count Dracula live?",
                options: ["London", "Paris", "Transylvania", "Berlin"],
                answer: 2
            },
            {
                question: "What is the name of the vampire hunter?",
                options: ["Van Helsing", "Sherlock Holmes", "Dr. Frankenstein", "Jonathan Harker"],
                answer: 0
            },
            {
                question: "How does Dracula travel to England?",
                options: ["By train", "By ship", "By carriage", "By plane"],
                answer: 1
            }
        ]
    },
    {
        id: "frankenstein",
        title: "Frankenstein",
        author: "Mary Shelley",
        level: 8,
        lexile: "1230L",
        coverUrl: "https://images.unsplash.com/photo-1509564324749-454d764d6327?q=80&w=400&auto=format&fit=crop",
        summary: "The story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment.",
        keywords: [
            { word: "monster", definition: "An imaginary creature that is typically large, ugly, and frightening." },
            { word: "creation", definition: "The action or process of bringing something into existence." },
            { word: "science", definition: "The intellectual and practical activity encompassing the systematic study of the structure and behaviour of the physical and natural world." },
            { word: "life", definition: "The condition that distinguishes animals and plants from inorganic matter." },
            { word: "regret", definition: "A feeling of sadness, repentance, or disappointment over something that has happened or been done." }
        ],
        quiz: [
            {
                question: "Who created the monster?",
                options: ["Igor", "Victor Frankenstein", "Henry Clerval", "Robert Walton"],
                answer: 1
            },
            {
                question: "What does the monster want from Victor?",
                options: ["Money", "A mate", "Revenge", "Immortality"],
                answer: 1
            },
            {
                question: "How is the monster brought to life? (In pop culture often represented as...)",
                options: ["Magic potion", "Lightning/Electricity", "Sunlight", "Music"],
                answer: 1
            }
        ]
    },
    {
        id: "great-gatsby",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        level: 6,
        lexile: "1010L",
        coverUrl: "https://images.unsplash.com/photo-1550246140-5119980d9088?q=80&w=400&auto=format&fit=crop",
        summary: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
        keywords: [
            { word: "wealth", definition: "An abundance of valuable possessions or money." },
            { word: "dream", definition: "A cherished aspiration, ambition, or ideal." },
            { word: "party", definition: "A social gathering of invited guests, typically involving eating, drinking, and entertainment." },
            { word: "past", definition: "Gone by in time and no longer existing." },
            { word: "illusion", definition: "A deceptive appearance or impression." }
        ],
        quiz: [
            {
                question: "Who narrates the story?",
                options: ["Jay Gatsby", "Daisy Buchanan", "Nick Carraway", "Tom Buchanan"],
                answer: 2
            },
            {
                question: "What color is the light at the end of Daisy's dock?",
                options: ["Red", "Green", "Blue", "White"],
                answer: 1
            },
            {
                question: "Which era is the setting of the book?",
                options: ["The Roaring Twenties", "The Victorian Era", "The Great Depression", "The Civil War"],
                answer: 0
            }
        ]
    },
    {
        id: "moby-dick",
        title: "Moby Dick",
        author: "Herman Melville",
        level: 9,
        lexile: "1280L",
        coverUrl: "https://images.unsplash.com/photo-1549646624-94c65538afcc?q=80&w=400&auto=format&fit=crop",
        summary: "The narrative of the sailor Ishmael and the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale.",
        keywords: [
            { word: "obsession", definition: "The state of being obsessed with someone or something." },
            { word: "whale", definition: "A very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing." },
            { word: "revenge", definition: "The action of inflicting hurt or harm on someone for an injury or wrong suffered at their hands." },
            { word: "ocean", definition: "A very large expanse of sea, in particular each of the main areas into which the sea is divided geographically." },
            { word: "voyage", definition: "A long journey involving travel by sea or in space." }
        ],
        quiz: [
            {
                question: "What is the name of the ship?",
                options: ["The Titanic", "The Pequod", "The Black Pearl", "The Nautilus"],
                answer: 1
            },
            {
                question: "What specifically is Moby Dick?",
                options: ["A white shark", "A white whale", "A giant octopus", "A sea serpent"],
                answer: 1
            },
            {
                question: "Who is the captain seeking revenge?",
                options: ["Captain Hook", "Captain Ahab", "Captain Sparrow", "Captain Nemo"],
                answer: 1
            }
        ]
    },
    {
        id: "call-wild",
        title: "The Call of the Wild",
        author: "Jack London",
        level: 5,
        lexile: "990L",
        coverUrl: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=400&auto=format&fit=crop",
        summary: "The story of Buck, a domestic dog, stolen from his home and sold into service as a sled dog in the harsh conditions of the Yukon Gold Rush.",
        keywords: [
            { word: "wild", definition: "Living or growing in the natural environment; not domesticated or cultivated." },
            { word: "instinct", definition: "An innate, typically fixed pattern of behavior in animals in response to certain stimuli." },
            { word: "survival", definition: "The state or fact of continuing to live or exist, typically in spite of an accident, ordeal, or difficult circumstances." },
            { word: "nature", definition: "The phenomena of the physical world collectively, including plants, animals, the landscape, and other features and products of the earth." },
            { word: "leader", definition: "The person who leads or commands a group, organization, or country." }
        ],
        quiz: [
            {
                question: "What kind of animal is the protagonist, Buck?",
                options: ["A Wolf", "A Dog", "A Bear", "A Fox"],
                answer: 1
            },
            {
                question: "Where is the story set?",
                options: ["The Amazon Jungle", "The Sahara Desert", "The Yukon (Alaska/Canada)", "The Australian Outback"],
                answer: 2
            },
            {
                question: "What job is Buck forced to do?",
                options: ["Herding sheep", "Pulling a sled", "Hunting bears", "Guarding a house"],
                answer: 1
            }
        ]
    },
    {
        id: "treasure-island",
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        level: 4,
        lexile: "760L",
        coverUrl: "https://images.unsplash.com/photo-1629156686369-07bc40467b7e?q=80&w=400&auto=format&fit=crop",
        summary: "An adventure novel narrating a tale of 'buccaneers and buried gold'.",
        keywords: [
            { word: "pirate", definition: "A person who attacks and robs ships at sea." },
            { word: "treasure", definition: "A quantity of precious metals, gems, or other valuable objects." },
            { word: "map", definition: "A diagrammatic representation of an area of land or sea showing physical features, cities, roads, etc." },
            { word: "adventure", definition: "An unusual and exciting, typically hazardous, experience or activity." },
            { word: "island", definition: "A piece of land surrounded by water." }
        ],
        quiz: [
            {
                question: "What is the name of the one-legged pirate cook?",
                options: ["Captain Hook", "Long John Silver", "Blackbeard", "Jack Sparrow"],
                answer: 1
            },
            {
                question: "What are they looking for?",
                options: ["A lost city", "Buried treasure", "The Fountain of Youth", "A magical sword"],
                answer: 1
            },
            {
                question: "What marks the spot on the map?",
                options: ["An X", "A skull", "A circle", "An arrow"],
                answer: 0
            }
        ]
    },
    {
        id: "peter-pan",
        title: "Peter Pan",
        author: "J.M. Barrie",
        level: 4,
        lexile: "920L",
        coverUrl: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?q=80&w=400&auto=format&fit=crop",
        summary: "The story of a mischievous young boy who can fly and never grows up, spending his unending childhood on the small island of Neverland.",
        keywords: [
            { word: "fly", definition: "Move through the air using wings." },
            { word: "shadow", definition: "A dark area or shape produced by a body coming between rays of light and a surface." },
            { word: "fairy", definition: "A small imaginary being of human form that has magical powers, especially a female one." },
            { word: "believe", definition: "Accept (something) as true; feel sure of the truth of." },
            { word: "grow", definition: "Become larger or greater over a period of time; increase." }
        ],
        quiz: [
            {
                question: "Where does Peter Pan live?",
                options: ["Wonderland", "Neverland", "Narnia", "Oz"],
                answer: 1
            },
            {
                question: "Who is Peter's enemy?",
                options: ["The Crocodile", "Captain Hook", "Mr. Smee", "Tiger Lily"],
                answer: 1
            },
            {
                question: "What does Peter Pan refuse to do?",
                options: ["Eat", "Sleep", "Grow up", "Fly"],
                answer: 2
            }
        ]
    }
];
