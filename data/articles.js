// ARTICLES DATA
const articles = [
  {
    // Article id (Integer)
    id: 1,
    // Article image (String) as a link
    img: "https://www.humanesociety.org/sites/default/files/2022-08/hl-yp-cats-579652.jpg",
    // Article image description (String) for image alt
    img_description: "Two cats on a bed",
    // Article title (String)
    title: "Why you should own a cat.",
    // Article short abstract (String)
    abstract: "Learn some of the reasons why a cat is a great pet to have!",
    // Main article content (String)
    main_article:
      "Cats have been with humanity for a long time. The Egyptians worshipped them as gods thousands of year ago. However, there’s a lot of people that don’t know much about how this household pets.<br><br><strong>Low maintenance</strong><br>Anyone who own a cat will agree that they almost take care of themselves. They clean, exercise and entertain themselves, relaying on you mostly for food. Comparing to their counterparts, dogs, who need walking, training, grooming and attention every day, cats are perfect if you spend a lot of time outside your house during the day.<br><br><strong>They’re quiet</strong><br>Cats meow only when they need something from you, which happen a couple of times a day at most and are easily resolved, mainly food or attention. Other than that, they are extremely stealthy, walking around the house without making a sound. So if you work from home, or have kids napping, they won’t bother you at all.<br><br><strong>They clean the house</strong><br>Cats love hunting. They will spend half an hour looking at a prey moving as slow as possible to approach them. This will keep the house clean of any pest you might have, be it mouse or bugs.<br><br><strong>They live long</strong><br>Cats live up to 20 years of age, so they will be a really long life partner.",
    // Article tags for search (Array of String)
    tags: ["cats", "own", "reasons"],
  },
  {
    // Article id (Integer)
    id: 2,
    // Article image (String) as a link
    img: "https://www.reuters.com/resizer/bGvWXBWZSShEBRH3ICYav50HJP4=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q3EB2FZEMRKENGSLNVCMNLBPLQ.jpg",
    // Article image description (String) for image alt
    img_description: "Cangsta being hold by a man.",
    // Article title (String)
    title: "A gangsta cat (cangsta).",
    // Article short abstract (String)
    abstract:
      "Get to know the story of a tattooed Mexican cat that is looking for a home after life inside prison.",
    // Main article content (String)
    main_article:
      "A Sphynx cat, that (sadly) hasn’t been named yet, has spent the last weeks in the animal rescue center after the police found him in prison, where it was mistreated by a criminal gang. The cat is about 1 year old, and the gang has tattooed his furless skin.<br><br>The cat is tattooed in both side of its body. Among the tattoos, one reads “Made in Mexico”. Authorities are looking for a new family to adopt the cat that will provide the care and love it deserves. “The cat is very sociable, and is in great shape, with no infections” said Cesar Rene Díaz, ecology director of the city of Suarez.",
    // Article tags for search (Array of String)
    tags: ["sphynx", "cats", "prison", "tatoo"],
  },
  {
    // Article id (Integer)
    id: 3,
    // Article image (String) as a link
    img: "https://reptilejam.com/wp-content/uploads/2021/03/holding-corn-snake.jpg",
    // Article image description (String) for image alt
    img_description: "A snake getting on top of a hand.",
    // Article title (String)
    title: "And what about snakes?",
    // Article short abstract (String)
    abstract: "Learn the pros and cons of having a snake as a pet",
    // Main article content (String)
    main_article:
      "Snakes are some of the most exotic pets you can have. Not many people own them, and far less know anything about how they behave and what to expect from a pet snake. So here is a quick pro and con list.<br><br><strong> Pros </strong><br><strong>Low maintenance:</strong> Compared to a dog or cat, they are a really easy pet. They keep mostly their cage and don’t require much attention. They are the ideal apartment pet, or for people who don’t really have a schedule. <br><strong>Docile pets:</strong> despite their threatening look, snakes are pretty docile. The most popular snakes breads are usually relaxed as pets. They don’t require any training, apart from teaching them to be handled since they are young. <br><strong>Easy to house:</strong> snakes need a cozy place to digest, shed and sleep. Once you provide that, they are easy to keep happy. Keep in mind snakes are cold-blooded, so a heat source like a UV lamp is necessary to keep them happy and healthy.<br><br><strong>Cons</strong><br><strong>Need vary from breeds:</strong> as expected, each breed of snake have their own needs. They have different habitat conditions, they are susceptible to different parasites and have different diets. <br><strong>They eat meat:</strong> snakes are carnivores, and they usually eat their prey whole and alive. So if you don’t like the idea of animals eating other animals, then you shouldn’t own a snake.<br><strong>Houdini fans:</strong> snakes are known to be escape artists. Be sure to have your terrarium secure, since the snake will escape from any cracks or spaces it might have.",
    // Article tags for search (Array of String)
    tags: ["snakes", "pros", "cons", "exotic"],
  },
  {
    // Article id (Integer)
    id: 4,
    // Article image (String) as a link
    img: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
    // Article image description (String) for image alt
    img_description: "Happy dog",
    // Article title (String)
    title: "Most popular dog breeds this 2023.",
    // Article short abstract (String)
    abstract:
      "These are the dog breeds that will be most popular with new and old adopters, this year 2023.",
    // Main article content (String)
    main_article:
      "<strong> 1. Labrador Retriever </strong> <br> He is loyal, protective, understanding and loves his loved ones with all his heart. <br> <br><strong> 2. German Shepherd </strong> <br> Although it is a relatively new breed, dogs of this breed are incredible specimens, they are brave, obedient and very loyal. They are also very intelligent and that is why they are commonly service dogs or police dogs. <br> <br><strong> 3. Newfoundland </strong> <br> These dogs are the sweetest dogs we will come across, they are gentle and loyal. For this reason they are excellent for families with children. <br> <br><strong> 4. Maltese </strong> <br> These dogs were bred to be loving and adore their owners. In ancient Greece it was believed that they relieved pain and could cure diseases. <br> <br><strong> 5. Golden Retriever </strong> <br> This is a very popular breed of dog for being sweet and loyal, they will never leave your side and have a lot of energy.",
    // Article tags for search (Array of String)
    tags: ["2023", "breeds", "popular", "adopt", "dogs"],
  },
  {
    // Article id (Integer)
    id: 5,
    // Article image (String) as a link
    img: "https://media.allure.com/photos/62b333877389827cf6e080f9/16:9/w_2499,h_1405,c_limit/Is%20it%20ever%20ok%20to%20dye%20your%20dog's%20fur",
    // Article image description (String) for image alt
    img_description: "White dog with pink hair ends",
    // Article title (String)
    title: "Is your dog just like you?",
    // Article short abstract (String)
    abstract:
      "Some recent studies have managed to show that our personality is directly reflected in our pets. Is this your case too?",
    // Main article content (String)
    main_article:
      "Recent research indicates that there are shared traits between owners and their respective dogs. But how does it work? The study was conducted by William J.Chopik, a social psychologist at Michigan State University. <br><br> 1681 people were asked to rate their dogs' personalities and their own, and the results showed the obvious similarity between the two.<br><br>First of all, part of this similarity is that owners unintentionally choose dogs similar to themselves, as they feel more connected to those who resemble them both in personality and physique. On the other hand, socializing and living together makes both personalities mix so to speak, taking both things from the other and thus ending up having similar personalities. <br><br> And finally, part of the similarity is also due to the fact that the owners project themselves onto their pets, so when they self-assessed themselves and their pets, the similarities were highlighted.",
    // Article tags for search (Array of String)
    tags: ["owners", "dogs", "personality", "similar"],
  },
  {
    // Article id (Integer)
    id: 6,
    // Article image (String) as a link
    img: "https://as1.ftcdn.net/v2/jpg/02/56/25/56/1000_F_256255660_jGDw9XV8MB8AXfcDRjvi0dXRyf7CbWdB.jpg",
    // Article image description (String) for image alt
    img_description: "Cat after shower",
    // Article title (String)
    title: "5 tricks to bathe your cat (and not die trying).",
    // Article short abstract (String)
    abstract:
      "Bathing a cat can be a complicated task, but with these tricks you will see how easy it can be.",
    // Main article content (String)
    main_article:
      "<strong>1. Prepare the bathroom.</strong><br>It is important that there is enough space so that both you and the cat are comfortable, it is also important that you have everything you need for this task at hand.<br><br><strong>2. Prepare to be patient</strong><br>Bathing a cat is not easy if you are not used to it (or neither is he), but you must transmit calm and security to your cat, so try to be patient and calm with him.<br> <br><strong>3. Brush him before bathing.</strong><br>This helps remove both knots and excess hair. You can also do this the day before to avoid stressing your cat too much.<br><br><strong>4. Protect his ears.</strong><br>Before taking him into the water, cover his ears with cotton to prevent liquid from entering him, use warm water and never submerge him.<br><br><strong>5. Choose the day wisely.</strong><br>It is important that the cat is not nervous from before, since the bath will be enough stress. So if your cat is not calm or is emotionally sensitive, we recommend postponing the bath. It is also important that you comfort your cat for this.<br><br>We promise that by implementing these 5 tricks, the bathing day will be much more enjoyable.",
    // Article tags for search (Array of String)
    tags: ["shower", "cats", "bath"],
  },
  {
    // Article id (Integer)
    id: 7,
    // Article image (String) as a link
    img: "https://gregrichdvm.com/wp-content/uploads/2022/09/hedgehog.jpg",
    // Article image description (String) for image alt
    img_description: "Hedgehog",
    // Article title (String)
    title: "All you need to know before getting a Hedgehog.",
    // Article short abstract (String)
    abstract:
      "This is one of the cutest pets we will probably see in some time, but do you know everything needed to raise them? We tell you.",
    // Main article content (String)
    main_article:
      "Hedgehogs have recently grown extremely popular. You have probably come across a lot of short videos on social media of them being cute and funny. You might have even consider getting one. So, what should you know before adopting a hedgehog?<br><br><strong>They are spiky!</strong><br>Hedgehogs are known for their spiky back, that they use as a defense mechanism. So naturally, if you are not careful or they feel nervous for whatever reason you’ll spiked. That’s why, at first, it’s recommended to handle them with a towel or a pair of mittens, until they become confortable getting held. After that, you can cuddle them as much as you want, but remember to be gentle!<br><br><strong>Wash you hands!</strong><br>It have been shown that hedgehogs harbor the salmonella bacteria, so it important to wash your hands thoroughly	 after handling a hedgehog, its cage, and any other item they use regularly. Until you wash your hands, keep them far from our mouth and eyes. Remember to supervise the hedgehog around young children or other animals.<br><br><strong>Keep them moving</strong><br>Hedgehogs will never say no to food. And they’ll likely be in their cage most of the time. This will lead to them becoming overweight, so it is important to let them outside to exercise. It’s also recommended to add a solid plastic running wheel (the hamster wheel), as wire wheels can injure them.<br><br><strong>They are nocturnal</strong><br>Hedgehogs are nocturnal animal, so you may hear them running around or eating at night. If you are easily waken up at night by noises, a hedgehog might not be the best choice for you. On the plus side, since they are nocturnal, they will sleep through the day, so they don’t really need a caretaker while you are at work / school.",
    // Article tags for search (Array of String)
    tags: ["hedgehog", "all you need to know", "exotic"],
  },
  {
    // Article id (Integer)
    id: 8,
    // Article image (String) as a link
    img: "https://www.rd.com/wp-content/uploads/2022/10/US2211_01_KS_409-SQ.jpg",
    // Article image description (String) for image alt
    img_description: "Superhero dog",
    // Article title (String)
    title: "Stories of our pets being our superheroes.",
    // Article short abstract (String)
    abstract:
      "Today we are going to tell the story of Chiquito, the dog that rescued his owner from a fire.",
    // Main article content (String)
    main_article:
      "Its owner was peacefully sleeping while a short circuit generated began to make ashes in his home. Between the exhaustion and the toxic fumes from the fire, the man was sleeping in his bed.<br><br>Luckily, Chiquito somehow knew the danger they were running, so he forced his way into the room to wake up its owner.<br><br><strong>'He was outside, I don't know how he managed to break the window and get in, but he passed by and made me fall out of bed'</strong><br><br>Small achievement he dragged his owner to the dining room and made him wake up with blows and licks, when his owner became conscious, he was able to ask the neighbors for help to get out of the house, since he could not open the door.<br><br> Little after that, not enough to have managed to get out of the fire with its owner, he went back in to rescue the cat that also lived with the two of them, he took it in his mouth and ran outside.<br><br> Now the three meet safe thanks to Chiquito.",
    // Article tags for search (Array of String)
    tags: ["hero", "dogs", "fire", "superhero", "save", "owner"],
  },
  {
    // Article id (Integer)
    id: 9,
    // Article image (String) as a link
    img: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_17/2836796/190426-dog-park-ew-251p.jpg",
    // Article image description (String) for image alt
    img_description: "Dogs at the park playing",
    // Article title (String)
    title: "Are you making one of these mistakes at the dog park?",
    // Article short abstract (String)
    abstract:
      "Going to the dog park is one of the favorite activities for these little ones, but it can become a nightmare if not done correctly.",
    // Main article content (String)
    main_article:
      "There are more and more parks dedicated to our dogs, areas designed 100% for them and their enjoyment, but are they for all dogs? We tell you the most common mistakes that owners make. <br> <br> <strong>1. Release the dog as soon as they enter.</strong> <br> Our pet can get too excited when we start to approach the park, an overly excited dog gets nervous and can end up fighting with the other dogs in the place. <br> <br> What should I do then? We must try to change the paths we take so that it does not identify our routine, and when we arrive at the park we will take a few minutes to reassure our pet. <br> <br> <strong>2. Bring our dog in heat.</strong> <br> It seems obvious but it is not for many, some certain phases of our pet's heat can end in aggressive behavior towards the rest of the dogs in the park, or generate disputes between the other dogs because they will fight for it. <br> <br> We can go during the last stage of our pet's heat since neither she is aggressive nor are the other dogs interested in her, but we must always take into account the supervision and care of everyone for this.<br> <br> <strong> 3. Bringing toys or food to the park </strong> <br> It is quite common to see owners bring treats to their beloved puppies or even their favorite toys. The problem with this is that some dogs can be selfish with their things, protecting their food or their toys. <br> <br> This again can lead to conflicts with other dogs. <br> For this reason we have to avoid bringing toys and when we want to give him some food, separate him and feed him in private. <br> Also, we should never feed a dog that is not our own, much less without asking beforehand. <br> <br>",
    // Article tags for search (Array of String)
    tags: ["mistakes", "dog parks", "dogs", "owners"],
  },
];
