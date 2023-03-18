import { atom } from "recoil";
export interface IMovie {
  title_en: string;
  title_ar: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre_en: string;
  genre_ar: string;
  actors: string;
  director: string;
  plot_en: string;
  plot_ar: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  response: string;
  images: string[];
  [key: string]: any;
}
export const moviesState = atom({
  key: "moviesState",
  default: [
    {
      title_en: "avatar",
      title_ar: "افاتار",
      year: "2009",
      rated: "pG-13",
      released: "18 Dec 2009",
      runtime: "162 min",
      genre_en: "action, Adventure, Fantasy",
      genre_ar: "أكشن ، مغامرة ، خيال",
      director: "James Cameron",
      Writer: "James Cameron",
      actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      plot_en:
        "a paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      plot_ar:
        "يتم إرسال أحد جنود البحرية المصاب بشلل نصفي إلى القمر Pandora في مهمة فريدة من نوعها بين اتباع أوامره وحماية العالم الذي يشعر أنه موطنه.",
      language: "English, Spanish",
      country: "USA, UK",
      awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "890,617",
      imdbID: "tt0499549",
      type: "movie",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      ],
    },
    {
      title_en: "300",
      title_ar: "300",
      year: "2006",
      rated: "r",
      released: "09 Mar 2007",
      runtime: "117 min",
      genre_en: "action, Drama, Fantasy",
      genre_ar: "أكشن ، دراما ، فانتازيا",
      director: "Zack Snyder",
      Writer:
        "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
      actors: "gerard Butler, Lena Headey, Dominic West, David Wenham",
      plot_en:
        "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      plot_ar:
        "الملك ليونيداس من سبارتا وقوة من 300 رجل يقاتلون الفرس في تيرموبيلاي في 480 قبل الميلاد",
      language: "English",
      country: "USA",
      awards: "16 wins & 42 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
      Metascore: "52",
      imdbRating: "7.7",
      imdbVotes: "611,046",
      imdbID: "tt0416449",
      type: "movie",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg",
      ],
    },
    {
      title_en: "the Avengers",
      title_ar: "المنتقمون",
      year: "2012",
      rated: "pG-13",
      released: "04 May 2012",
      runtime: "143 min",
      genre_en: "action, Sci-Fi, Thriller",
      genre_ar: "أكشن ، خيال علمي ، إثارة",
      director: "Joss Whedon",
      Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
      actors: "robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      plot_en:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      plot_ar:
        "يجب أن يجتمع أقوى أبطال الأرض معًا وأن يتعلموا القتال كفريق واحد إذا أرادوا إيقاف لوكي المؤذ وجيشه الفضائي من استعباد البشرية",
      language: "English, Russian",
      country: "USA",
      awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
      Metascore: "69",
      imdbRating: "8.1",
      imdbVotes: "1,003,301",
      imdbID: "tt0848228",
      type: "movie",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      ],
    },
    {
      title_en: "the Wolf of Wall Street",
      title_ar: "ذئب وال ستريت",
      year: "2013",
      rated: "r",
      released: "25 Dec 2013",
      runtime: "180 min",
      genre_en: "Biography, Comedy, Crime",
      genre_ar: "سيرة ، كوميديا ​​، جريمة",
      director: "Martin Scorsese",
      Writer: "terence Winter (screenplay), Jordan Belfort (book)",
      actors:
        "leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
      plot_en:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      plot_ar:
        "استنادًا إلى القصة الحقيقية لجوردان بلفور ، من صعوده إلى سمسار أسهم ثري يعيش حياة عالية حتى سقوطه الذي ينطوي على الجريمة والفساد والحكومة الفيدرالية.",
      language: "English, French",
      country: "USA",
      awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      Metascore: "75",
      imdbRating: "8.2",
      imdbVotes: "786,985",
      imdbID: "tt0993846",
      type: "movie",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg",
      ],
    },
    {
      title_en: "interstellar",
      title_ar: "واقع بين النجوم",
      year: "2014",
      rated: "pG-13",
      released: "07 Nov 2014",
      runtime: "169 min",
      genre_en: "adventure, Drama, Sci-Fi",
      genre_ar: "مغامرة ، دراما ، خيال علمي",
      director: "christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      plot_en:
        "a team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      plot_ar:
        "يسافر فريق من المستكشفين عبر ثقب دودي في الفضاء في محاولة لضمان بقاء البشرية",
      language: "English",
      country: "USA, UK",
      awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "937,412",
      imdbID: "tt0816692",
      type: "movie",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      ],
    },
    {
      title_en: "game of Thrones",
      year: "2011–",
      rated: "tV-MA",
      released: "17 Apr 2011",
      runtime: "56 min",
      genre_en: "adventure, Drama, Fantasy",
      director: "N/A",
      Writer: "david Benioff, D.B. Weiss",
      actors: "peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
      plot_en:
        "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
      language: "English",
      country: "USA, UK",
      awards: "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "9.5",
      imdbVotes: "1,046,830",
      imdbID: "tt0944947",
      type: "series",
      totalSeasons: "7",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      ],
      title_ar: "صراع العروش",
      genre_ar: "مغامرة، دراما، خيال",
      plot_ar:
        "فيما تتفجر حرب أهلية بين عدة عائلات نبيلة في ويستروس، يحاول أبناء حكام الأرض السابقين الصعود إلى السلطة. وفي الوقت نفسه، تخطط جنس نسيان للعودة بعد آلاف السنين في الشمال والقضاء على البشرية.",
    },
    {
      title_en: "Vikings",
      year: "2013–",
      rated: "tV-14",
      released: "03 Mar 2013",
      runtime: "44 min",
      genre_en: "action, Drama, History",
      director: "N/A",
      Writer: "Michael Hirst",
      actors:
        "travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
      plot_en:
        "the world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
      language: "English, Old English, Norse, Old, Latin",
      country: "ireland, Canada",
      awards:
        "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "8.6",
      imdbVotes: "198,041",
      imdbID: "tt2306299",
      type: "series",
      totalSeasons: "5",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
      ],
      title_ar: "فايكنج",
      genre_ar: "أكشن، دراما، تاريخ",
      plot_ar:
        "يُعيد عالم الفايكنج إلى الحياة من خلال رحلة راغنار لوثبروك، أول فايكنج يخرج من أساطير النورس ويصل إلى صفحات التاريخ - رجل على حافة الأسطورة.",
    },
    {
      title_en: "gotham",
      year: "2014–",
      rated: "tV-14",
      released: "01 Aug 2014",
      runtime: "42 min",
      genre_en: "action, Crime, Drama",
      director: "N/A",
      Writer: "Bruno Heller",
      actors: "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
      plot_en:
        "the story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
      language: "English",
      country: "USA",
      awards:
        "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "8.0",
      imdbVotes: "133,375",
      imdbID: "tt3749900",
      type: "series",
      totalSeasons: "3",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
      ],
      title_ar: "غوثام",
      genre_ar: "أكشن، جريمة، دراما",
      plot_ar:
        "تدور الأحداث حول صعود المحقق جيمس جوردون إلى الشهرة في مدينة جوثام في السنوات القليلة قبل وصول باتمان.",
    },
    {
      title_en: "power",
      year: "2014–",
      rated: "tV-MA",
      released: "N/A",
      runtime: "50 min",
      genre_en: "crime, Drama",
      director: "N/A",
      Writer: "courtney Kemp Agboh",
      actors: "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
      plot_en:
        'James "ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
      language: "English",
      country: "USA",
      awards: "1 win & 6 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "8.0",
      imdbVotes: "14,770",
      imdbID: "tt3281796",
      type: "series",
      totalSeasons: "3",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
      ],
      title_ar: "الطاقة",
      genre_ar: "جريمة، دراما",
      plot_ar:
        "جيمس الشبح سانت باتريك، صاحب نادي ليلي ثري في نيويورك الذي يمتلك كل شيء ويخدم النخبة في المدينة ويحلم بشيء أكبر، يعيش حياة مزدوجة كملك لتجارة المخدرات.",
    },
    {
      title_en: "Narcos",
      year: "2015–",
      rated: "tV-MA",
      released: "28 Aug 2015",
      runtime: "49 min",
      genre_en: "Biography, Crime, Drama",
      director: "N/A",
      Writer: "carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
      actors: "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
      plot_en:
        "a chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
      language: "English, Spanish",
      country: "USA",
      awards: "Nominated for 2 Golden Globes. Another 4 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "8.9",
      imdbVotes: "118,680",
      imdbID: "tt2707408",
      type: "series",
      totalSeasons: "2",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      ],
      title_ar: "ناركوس",
      genre_ar: "سيرة ذاتية، جريمة، دراما",
      plot_ar:
        "نظرة مستمرة على النشاطات الإجرامية للرئيس التشيلي بابلو إسكوبار.",
    },
    {
      title_en: "Breaking Bad",
      year: "2008–2013",
      rated: "tV-14",
      released: "20 Jan 2008",
      runtime: "49 min",
      genre_en: "crime, Drama, Thriller",
      director: "N/A",
      Writer: "Vince Gilligan",
      actors: "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
      plot_en:
        "a high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
      language: "English, Spanish",
      country: "USA",
      awards: "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "9.5",
      imdbVotes: "889,883",
      imdbID: "tt0903747",
      type: "series",
      totalSeasons: "5",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15BbWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      ],
      title_ar: "بريكينغ باد",
      genre_ar: "جريمة، دراما، إثارة",
      plot_ar:
        "مدرس كيمياء في المدرسة الثانوية يتم تشخيصه بسرطان الرئة الذي لا يمكن علاجه، فيقرر تصنيع وبيع الميثامفيتامين لضمان مستقبل عائلته المالي.",
    },
    {
      comingSoon: true,
      title_en: "doctor Strange",
      year: "2016",
      rated: "N/A",
      released: "04 Nov 2016",
      runtime: "N/A",
      genre_en: "action, Adventure, Fantasy",
      director: "Scott Derrickson",
      Writer:
        "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
      actors:
        "rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
      plot_en:
        "after his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
      language: "English",
      country: "USA",
      awards: "N/A",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt1211837",
      type: "movie",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg",
      ],

      title_ar: "دكتور سترينج",
      genre_ar: "أكشن، مغامرة، فانتازيا",
      plot_ar:
        "بعد تدمير حياته المهنية، يحصل جراح بارع لكنه متغطرس ومغرور على فرصة جديدة عندما تأخذه ساحرة تحت جناحها وتدربه على الدفاع عن العالم ضد الشر.",
    },
    {
      comingSoon: true,
      title_en: "rogue One: A Star Wars Story",
      year: "2016",
      rated: "N/A",
      released: "16 Dec 2016",
      runtime: "N/A",
      genre_en: "action, Adventure, Sci-Fi",
      director: "gareth Edwards",
      Writer:
        "chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
      actors: "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
      plot_en:
        "the Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
      language: "English",
      country: "USA",
      awards: "1 nomination.",
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt3748528",
      type: "movie",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
      ],
      title_ar: "روج وان: قصة حرب النجوم",
      genre_ar: "أكشن، مغامرات، خيال علمي",
      plot_ar:
        "تقوم المتمردون بخطوة جريئة لسرقة خطط النجمة الموت، مما يؤدي إلى بدء الملحمة الشاملة التي تلي ذلك.",
    },
    {
      comingSoon: true,
      title_en: "assassin's Creed",
      year: "2016",
      rated: "N/A",
      released: "21 Dec 2016",
      runtime: "N/A",
      genre_en: "action, Adventure, Fantasy",
      director: "Justin Kurzel",
      Writer:
        "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
      actors:
        "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
      plot_en:
        "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
      language: "English",
      country: "UK, France, USA, Hong Kong",
      awards: "N/A",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt2094766",
      type: "movie",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
      ],
      title_ar: "عقيدة القتلة",
      genre_ar: "أكشن، مغامرة، فانتازيا",
      plot_ar:
        "يستكشف كالوم لينش ذكريات أحد أسلافه، أجيلار، ويكتسب مهارات القاتل الرئيسي، ويكتشف أنه نسل من مجتمع القتلة السري.",
    },
    {
      comingSoon: true,
      title_en: "luke Cage",
      year: "2016–",
      rated: "tV-MA",
      released: "30 Sep 2016",
      runtime: "55 min",
      genre_en: "action, Crime, Drama",
      director: "N/A",
      Writer: "cheo Hodari Coker",
      actors: "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
      plot_en:
        "given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
      language: "English",
      country: "USA",
      awards: "N/A",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
      Metascore: "N/A",
      imdbRating: "N/A",
      imdbVotes: "N/A",
      imdbID: "tt3322314",
      type: "series",
      totalSeasons: "1",
      response: "true",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg",
      ],
      title_ar: "لوك كيج",
      genre_ar: "أكشن، جريمة، دراما",
      plot_ar:
        "يحصل رجل متهم بالزور بتجربة فاشلة على قدرات خارقة، ويهرب من السجن ليصبح بطل خارق يعمل كمحترف.",
    },
  ],
});
