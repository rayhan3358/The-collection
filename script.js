const collection  =  [ 
  {
    titre : "Trinity" , 
    artist : "Laylow" , 
    releaseYear : 2020 , 
    picture: "img/Trinity.jpg",
    genre: [ "Hip-hop" ,"Rap" ] ,
    languages: "French", 
    characteristics : [ 
      "Trinity est le premier album studio de Laylow, sorti le 28 février 2020. Il est composé de 22 pistes, cette tracklist se présente avec des orthographes plutôt particulières. Parmi les 22 titres, 7 sont des interludes servant de transitions avec les voix de Laylow, le logiciel Trinity ou d'autres personnages." , 
      
    ] , 
    
     
  },
  {
    titre : "Jackboys" , 
    artist : "Jackboys & Travis Scott" , 
    releaseYear : 2019 , 
    picture: "img/Jackboys.jpg",
    genre: [ "Hip-hop" ,"Rap" ] ,
    languages: "English", 
    characteristics : [ 
      "Reunissant les signatures du label cactus Jack Recods de Travis Scott, le collectif americain Jackboys est cree en 2019, reunissant Scott,Don Toliver,Sheck wes, Luxurry Tax et Chase B le temps d'une compilation eponyme publiee au mois de novembre." , 
      
    ] , 
    
     
  },

  {
    titre : "AstroWorld" , 
    artist : "Travis Scott" , 
    releaseYear : 2017 , 
    picture: "img/Astroworld.jpg",
    genre: [ "Hip-hop" ,"Rap" ] ,
    languages: "English", 
    characteristics : [ 
      "Le titre de l'album est annoncé en mai 2016, et initialement teasé pour 2017. Le nom de l'album est inspiré du parc à thème désormais fermé Six Flags AstroWorld, situé à Houston. En 2017, durant une interview, Scott confie que le but de l'album est de faire rouvrir ce parc d'Houston où les enfants jouaient. ''It took the fun out of the city.”.Scott décrit aussi cet album comme une continuité à son premier album Rodeo sorti en 2015." , 
      
    ] , 
    
     
  },
  { 
    titre : "Batterie faible" , 
    artist : "Damso" , 
    releaseYear : 2016 , 
    picture: "img/BatterieFaible.jpg", 
    genre : [ "Hip-hop" ,"Rap" ] , 
    languages: "French",
    characteristics : [ 
      "Batterie faible est le premier album studio du rappeur belge Damso, sorti le 8 juillet 2016 sous le label Capitol Music France. Ce premier projet de 12 pistes et 2 bonus lui permet de se faire connaitre du public rap et se faire un nom." , 
      
    ] , 
  } , 

  {
    titre : "Melancholia" , 
    artist : "Green Montana" , 
    releaseYear : 2021 , 
    picture: "img/Melancholia999.jpg",
    genre : [ "Hip-hop" ,"Rap" ] ,
    languages: "French", 
    characteristics : [ 
      "Mélodie et textes, le rappeur allie les deux et produit des sons aux ambiances singulières. Son prochain projet intitulé Melancholia 999 sortira le 21 mai. Le Belge a révélé un titre intitulé « Tomber pour elle » lors du Planète Rap de SDM." , 
      
    ] , 
  },
  {
    titre : "1994" , 
    artist : "Hamza" , 
    releaseYear : 2017 , 
    picture: "img/1994.jpg", 
    genre : [ "Hip-hop" ,"Rap" ] ,
    languages: "French", 
    characteristics : [ 
      "Jouant à volonté avec les codes de la trap et du son West Coast, Hamza s’affirme avec une cinquième mixtape à l’atmosphère urbaine et hypnotique. Avec un flow détendu et imprégné d’influences R&B, le rappeur belge profère un rap cru et confessionnel baigné de spleen." , 
      
    ] , 
  },
  {
    titre : "ERRR" , 
    artist : "La Féve" , 
    releaseYear : 2021 ,  
    picture: "img/ERRR.jpg",
    genre : [ "Hip-hop" ,"Rap" ] , 
    languages: "French",
    characteristics : [ 
      "La tape elle s’appelle comme un vomi “. ERRR, c’est un La Fève qui recrache, étale son talent et ses influences musicales. Des influences qu’on ressent notamment avec le choix des prods. 19 beatmakers ont travaillé à créer les sonorités de ERRR." , 
      
    ] , 
  },
  {
      titre : "Certified Lover Boy" , 
      artist : "Drake" , 
      releaseYear : 2021 ,  
      picture: "img/CertifiedLoverBoy.jpg",
      genre : [ "Hip-hop" ,"Rap" ] ,
      languages: "English",
      characteristics : [ 
        "A combination of toxic masculinity and acceptance of truth which is inevitably heartbreaking. Executive produced by me, Noah “40” Shebib, Oliver El-Khatib, and Noel Cadastre. Dedicated to Nadia Ntuli and Mercedes Morr. RIP—Drake" , 
        
      ] , 
  },
  
  {
    titre : "J.O.$" , 
    artist : "Josman" , 
    releaseYear : 2017 , 
    picture: "img/Josman.jpg",
    genre: [ "Hip-hop" ,"Rap" ] ,
    languages: "French", 
    characteristics : [ 
      "ses trois projets précédents avaient déjà positionné Josman comme un cas à part au sein du hip-hop francophone. Connu pour sa technique aiguisée, la richesse de son vocabulaire et son goût pour le multisyllabique, il se distingue aussi par une personnalité décalée." , 
      
    ] , 
    
     
  }
  
  
] ;

const main = document.querySelector("main")

for (const card of collection) {
 

  console.log(card.titre);
  console.log(card.picture);
  console.log(card.artist);
  
  const grid = document.createElement('div')
  grid.className = 'grid'

  
  
  const article = document.createElement("article")
  article.className = "cards"
  
  const div1 = document.createElement("div")
  div1.className = "year"
  
  const div2 = document.createElement("div")
  div2.className = "genre"
  
  
  
  const titre = document.createElement ("h1")
  titre.className = "cardname"
  titre.innerText = card.titre

  
  const image = document.createElement ("img")
  image.className = "img"
  image.src = card.picture

  
  const rarity = document.createElement ("p")
  rarity.className = "characteristics"
  rarity.innerText = card.characteristics

  const artist= document.createElement ("h3")
  artist.className = "artist"
  artist.innerText = card.artist

  const releasYear = document.createElement ("h4")
  releasYear.className = "year"
  releasYear.innerText = card.releaseYear
  
  const genre = document.createElement ("p")
  genre.className = "genre"
  genre.innerText = card.genre
  
  
  const language = document.createElement ("section")
  language.className = "language"
  language.innerText = card.languages
  
  main.appendChild(article)
  main.appendChild(grid)
  
  article.appendChild(titre)
  article.appendChild(image)
  
  article.appendChild(div1)
  article.appendChild(div2)

  div1.appendChild(artist)
  div1.appendChild(releasYear)
  div1.appendChild(rarity)
 
  
  div2.appendChild(genre)
  

  
 
  article.appendChild(language) 

 }

function pickN(inputArray,n) {
  if (n>inputArray.length)
  return inputArray
  const inputcopy = [...inputArray]
  const selectElement=[]

  for(let i=0;i<n;i++){
    const randomIndex = Math.floor(Math.random()*inputcopy.length)

  selectElement.push(inputcopy[randomIndex])
  inputcopy.slice(randomIndex,1)
  }
return selectElement
}
function render(list){
  const main =document.querySelector('main')

  while(main.children.length>0){
    main.children[0].remove()
  }
  for (const element of list){
    collection(element)
  }
}
function buttonPressed(){
const n = Number(document.querySelector('#n_select').value)
const selectedCollection = pickN(collection,n)

collection(selectedCollection)
}
document.querySelector('#get_list').addEventListener('click', buttonPressed)