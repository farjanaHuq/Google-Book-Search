const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googleBooks");

const bookSeed = [
  {
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    description: [`Set in a dark vision of the near future, a terrifying reality TV show is taking place. 
                 Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games.
                 There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps 
                 forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. 
                 For her, survival is second nature.`],
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    date: new Date(Date.now())
   
  },
  {
    title: "Frankenstein",
    authors: "Mary Shelley",
    description:
       "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's. \"We will each write a story,\" Byron announced to his next-door neighbors, Mary Wollstonecraft Godwin and her lover Percy Bysshe Shelley. The friends were summering on the shores of Lake Geneva in Switzerland in 1816, Shelley still unknown as a poet and Byron writing the third canto of Childe Harold. When continued rains kept them confined indoors, all agreed to Byron's proposal. The illustrious poets failed to complete their ghost stories, but Mary Shelley rose supremely to the challenge. With Frankenstein, she succeeded admirably in the task she set for herself: to create a story that, in her own words, \"would speak to the mysterious fears of our nature and awaken thrilling horror -- one to make the reader dread to look round, to curdle the blood, and quicken the beatings of the heart.\"",
    image: "https://books.google.com/books/content?id=t9X9G6iuMaAC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70gP6QiL3g6H_iK0UjDyLcR6R82Uo4OlYMmzi5vqThPlhNX9u9e72kbxG3SqS-tmBYKXABa8sUykcfms3jLBeCOtYrUhGelC-4DcOLm3TqLTLCgUXJEFatkWxZNqvCFDAESPtDO",
    link: "https://books.google.com/books?id=t9X9G6iuMaAC&dq=Frankenstein&source=gbs_navlinks_s"
 },
 {
    title: "The Great Gatsby",
    authors: "F. Scott Fitzgerald",
    description:
       "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
    image: "https://books.google.com/books/content?id=c4LZnQAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72xPhXAKuxfYrAP9NEdgovpU0zyGdyG78z0HvyAb7IKvxkmxWg-3ECEJQ5kqmeLYugOQhN2QYRLUBGUtIh0CVqkvUFruAbProD2lAuodEyDyPlsaeN5FC16pi4n4NKanEnMSDL8",
    link: "https://books.google.com/books?id=c4LZnQAACAAJ&dq=The+Great+Gatsby&hl=en&sa=X&ved=0ahUKEwipi-_3z6XhAhVXsp4KHdWaD4AQ6AEINTAC"
 }
] 

db.Book
  .remove({})
  .then(() => db.Book.collection.insert(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
