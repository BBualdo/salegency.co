type Opinion = {
  type: "text" | "video";
  image? : string;
  author? : string;
  company? : string;
  content? : string;
  videoURL?: string;
  title?: string;
}

const opinions:Opinion[] = [
  {
    type: "text",
    image: "/img/Charro-Pyl.avif",
    author: "Charro Pyl",
    company: "FitByCharro",
    content:
      "In just 12 months, I went from generating a meager income of a few thousand euros to earning a substantial 750,000 euros in revenue.",
  },
  {
    type: "text",
    image: "/img/Kamil-Kuc.avif",
    author: "Kamil Kuc",
    company: "Orety",
    content:
      "One of the best business decisions I've made in recent years. Together, we created several websites and two digital products, which doubled my company's turnover.",
  },
  {
    type: "text",
    image: "/img/Loran-Simon.avif",
    author: "Loran Simon",
    company: "Somnowell",
    content:
      "In the first month of going live, we increased revenue by 300% compared to the previous month. What can I say? Highly recommended.",
  },
  {
    type: "text",
    image: "/img/Nathan-Huges.avif",
    author: "Nathan Huges",
    company: "Matt Diggity",
    content:
      "We witnessed a dramatic increase in email engagement across multiple email lists, and deliverability improved across the board.",
  },
  {
    type: "text",
    image: "/img/Piotr-Blicharski.avif",
    author: "Piotr Blicharski",
    company: "2S Design",
    content:
      "We smoothly transitioned the strategy into tangible results, leading to impressive sales outcomes in a short time.",
  },
  // {
  //   type: "video",
  //   image: "",
  //   author: "Charro Pyl",
  //   company: "FitByCharro",
  //   content:
  //     "",
  //   videoURL: "https://youtube.com/embed/5VjZnWxhUoc?si=t_PC6tokPodo3YI5",
  //   title:"Charro Pyl Salegency review."
  // },
];

export default opinions