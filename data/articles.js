const articles = [
  {
    id: 1,
    img: "https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png",
    img_description: "Tiny kitten",
    title: "A super important article title about Kittens.",
    abstract:
      "Lorem ipsum dolor sit amet. Quibusdam magnam dicta, sit ex explicabo, suscipit perferendis porro eveniet cumque nostrum sapiente dolorem exercitationem eius fuga inventore a alias, temporibus pariatur.",
    main_article: "",
    tags: ["search test", "cats", "dog"],
  },
  {
    id: 2,
    img: "https://images.ctfassets.net/j4x7ugudy4uu/14fHrENjRw66EORUnqHNEI/0c74e3239fe3cd1d9a704de26b30b0be/09.01.20_Testimonial_Images_HP668X668_01.jpg",
    img_description: "Dog playing with toys",
    title: "A super important article title about Dogs.",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam dicta, sit ex explicabo, suscipit perferendis porro eveniet cumque nostrum sapiente dolorem exercitationem eius fuga inventore a alias, temporibus pariatur.",
    main_article: "",
    tags: ["dog"],
  },
  {
    id: 3,
    img: "https://media.npr.org/assets/img/2022/11/23/russian-toy-2-3-_custom-fd300880a9643efca73031d33f38ca7f4054b710.jpg",
    img_description: "Brown chihuahua",
    title: "A super important article title about Dogs.",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam dicta, suscipit perferendis porro eveniet exercitationem eius fuga inventore a alias, temporibus pariatur.",
    main_article: "",
    tags: [],
  },
  {
    id: 4,
    img: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
    img_description: "Happy dog",
    title: "Most popular dog breeds this 2023.",
    abstract:
      "These are the dog breeds that will be most popular with new and old adopters, this year 2023.",
    main_article: "<strong> 1. Labrador Retriever </strong> <br> He is loyal, protective, understanding and loves his loved ones with all his heart. <br> <br><strong> 2. German Shepherd </strong> <br> Although it is a relatively new breed, dogs of this breed are incredible specimens, they are brave, obedient and very loyal. They are also very intelligent and that is why they are commonly service dogs or police dogs. <br> <br><strong> 3. Newfoundland </strong> <br> These dogs are the sweetest dogs we will come across, they are gentle and loyal. For this reason they are excellent for families with children. <br> <br><strong> 4. Maltese </strong> <br> These dogs were bred to be loving and adore their owners. In ancient Greece it was believed that they relieved pain and could cure diseases. <br> <br><strong> 5. Golden Retriever </strong> <br> This is a very popular breed of dog for being sweet and loyal, they will never leave your side and have a lot of energy.",
    tags: ['2023', 'dog breeds', 'popular', 'adopt'],
  },
  {
    id: 5,
    img: "https://media.allure.com/photos/62b333877389827cf6e080f9/16:9/w_2499,h_1405,c_limit/Is%20it%20ever%20ok%20to%20dye%20your%20dog's%20fur",
    img_description: "White dog with pink hair ends",
    title: "Is your dog just like you?",
    abstract:
      "Some recent studies have managed to show that our personality is directly reflected in our pets. Is this your case too?",
    main_article: "Recent research indicates that there are shared traits between owners and their respective dogs. But how does it work? The study was conducted by William J.Chopik, a social psychologist at Michigan State University. <br><br> 1681 people were asked to rate their dogs' personalities and their own, and the results showed the obvious similarity between the two.<br><br>First of all, part of this similarity is that owners unintentionally choose dogs similar to themselves, as they feel more connected to those who resemble them both in personality and physique. On the other hand, socializing and living together makes both personalities mix so to speak, taking both things from the other and thus ending up having similar personalities. <br><br> And finally, part of the similarity is also due to the fact that the owners project themselves onto their pets, so when they self-assessed themselves and their pets, the similarities were highlighted.",
    tags: ['owners', 'dogs', 'personality', 'similar'],
  },
  {
    id: 6,
    img: "https://as1.ftcdn.net/v2/jpg/02/56/25/56/1000_F_256255660_jGDw9XV8MB8AXfcDRjvi0dXRyf7CbWdB.jpg",
    img_description: "Cat after shower",
    title: "5 tricks to bathe your cat (and not die trying).",
    abstract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam dicta, sit ex explicabo, suscipit perferendis porro eveniet cumque nostrum sapiente dolorem exercitationem eius fuga inventore a alias, temporibus pariatur.",
    main_article: "",
    tags: [],
  },
  {
    id: 7,
    img: "https://gregrichdvm.com/wp-content/uploads/2022/09/hedgehog.jpg",
    img_description: "Hedgehog",
    title: "All you need to know before getting a Hedgehog.",
    abstract:
      "This is one of the cutest pets we will probably see in some time, but do you know everything needed to raise them? We tell you.",
    main_article: "",
    tags: [],
  },
  {
    id: 8,
    img: "https://www.rd.com/wp-content/uploads/2022/10/US2211_01_KS_409-SQ.jpg",
    img_description: "Superhero dog",
    title: "Stories of our pets being our superheroes.",
    abstract:
      "Today we are going to tell the story of Chiquito, the dog that rescued his owner from a fire.",
    main_article: "Its owner was peacefully sleeping while a short circuit generated began to make ashes in his home. Between the exhaustion and the toxic fumes from the fire, the man was sleeping in his bed.<br><br>Luckily, Chiquito somehow knew the danger they were running, so he forced his way into the room to wake up its owner.<br><br><strong>'He was outside, I don't know how he managed to break the window and get in, but he passed by and made me fall out of bed'</strong><br><br>Small achievement he dragged his owner to the dining room and made him wake up with blows and licks, when his owner became conscious, he was able to ask the neighbors for help to get out of the house, since he could not open the door.<br><br> Little after that, not enough to have managed to get out of the fire with its owner, he went back in to rescue the cat that also lived with the two of them, he took it in his mouth and ran outside.<br><br> Now the three meet safe thanks to Chiquito.",
    tags: ['hero', 'dog', 'fire', 'superhero', 'save', 'owner'],
  },
  {
    id: 9,
    img: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_17/2836796/190426-dog-park-ew-251p.jpg",
    img_description: "Dogs at the park playing",
    title: "Are you making one of these mistakes at the dog park?",
    abstract:
      "Going to the dog park is one of the favorite activities for these little ones, but it can become a nightmare if not done correctly.",
    main_article:
      "There are more and more parks dedicated to our dogs, areas designed 100% for them and their enjoyment, but are they for all dogs? We tell you the most common mistakes that owners make. <br> <br> <strong>1. Release the dog as soon as they enter.</strong> <br> Our pet can get too excited when we start to approach the park, an overly excited dog gets nervous and can end up fighting with the other dogs in the place. <br> <br> What should I do then? We must try to change the paths we take so that it does not identify our routine, and when we arrive at the park we will take a few minutes to reassure our pet. <br> <br> <strong>2. Bring our dog in heat.</strong> <br> It seems obvious but it is not for many, some certain phases of our pet's heat can end in aggressive behavior towards the rest of the dogs in the park, or generate disputes between the other dogs because they will fight for it. <br> <br> We can go during the last stage of our pet's heat since neither she is aggressive nor are the other dogs interested in her, but we must always take into account the supervision and care of everyone for this.<br> <br> <strong> 3. Bringing toys or food to the park </strong> <br> It is quite common to see owners bring treats to their beloved puppies or even their favorite toys. The problem with this is that some dogs can be selfish with their things, protecting their food or their toys. <br> <br> This again can lead to conflicts with other dogs. <br> For this reason we have to avoid bringing toys and when we want to give him some food, separate him and feed him in private. <br> Also, we should never feed a dog that is not our own, much less without asking beforehand. <br> <br>",
    tags: ['mistakes', 'dog parks', 'dog', 'owners'],
  },
];
