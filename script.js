const collection  =  [ 
    { 
      titre : "Batterie faible" , 
      artist : "Damso" , 
      releaseYear : 2016 , 
      link : "https://music.apple.com/fr/album/batterie-faible/1440877707" ,
      picture: "img/BatterieFaible.jpg", 
      genre : [ "Hip-hop" ,"Rap" ] , 
      languages: "French",
      characteristics : [ 
        "Batterie faible est le premier album studio du rappeur belge Damso, sorti le 8 juillet 2016 sous le label Capitol Music France. Ce premier projet de 12 pistes et 2 bonus lui permet de se faire connaitre du public rap et se faire un nom. damso" , 
        
      ] , 
    } , 
  
    {
      titre : "Melancholia" , 
      artist : "Green Montana" , 
      releaseYear : 2021 , 
      link : "https://music.apple.com/fr/album/melancholia-999/1565557654" , 
      picture: "img/Melancholia.jpg",
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
      picture: "img/1994jpg", 
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
      genre : [ "Hip-hop" ,"Rap" ] ,
      languages: "English", 
      characteristics : [ 
        "ses trois projets précédents avaient déjà positionné Josman comme un cas à part au sein du hip-hop francophone. Connu pour sa technique aiguisée, la richesse de son vocabulaire et son goût pour le multisyllabique, il se distingue aussi par une personnalité décalée." , 
        
      ] , 
    }
    
  ] ;
  
  /*collection.forEach(element => {
     
      console.log(element)});

      for (const grid of collection) {
          console.log(grid.titre);

          const article= document.createElement('article')
          article.className = 'card'
          const title = document.createElement('h2','h3','h5')
          title.innerText= grid.titre

          article.appendChild(titre)
          
      }
  */
 
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
    div2.className = "editionprice"
    
    
    
    const titre = document.createElement ("h1")
    titre.className = "cardname"
    titre.innerText = card.titre
    
    const image = document.createElement ("img")
    image.className = "img"
    image.src = card.picture
    
    const rarity = document.createElement ("p")
    rarity.className = "characteristics"
    rarity.innerText = card.characteristics
    
    const releasYear = document.createElement ("p")
    releasYear.className = "year"
    releasYear.innerText = card.releaseYear
    
    const edition = document.createElement ("p")
    edition.className = "edition"
    edition.innerText = card.edition
    
    const price = document.createElement ("p")
    price.className = "price"
    price.innerText = card.price
    
    
    const drawer = document.createElement ("aside")
    drawer.className = "drawer"
    drawer.innerText = card.drawer
    
    const language = document.createElement ("section")
    language.className = "language"
    language.innerText = card.languages
    
    main.appendChild(article)
    main.appendChild(grid)
    
    article.appendChild(titre)
    article.appendChild(image)
    
    article.appendChild(div1)
    article.appendChild(div2)
    
    div1.appendChild(rarity)
    div1.appendChild(releasYear)
    
    div2.appendChild(edition)
    div2.appendChild(price)

    article.appendChild(drawer)

    article.appendChild(language)

        

   }