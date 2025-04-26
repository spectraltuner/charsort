dataSetVersion = "2025-03-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Setting",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Agentcross", tooltip: "Starcross, Heavencross, and Fatecross", key: "SC" },
      { name: "Backwoods Bestiary", tooltip: "The Monster Hunter Diaries", key: "BB" },
      { name: "Strays", tooltip: "When It Comes To Pet...", key: "STR" },
      { name: "Suicide Kings", tooltip: "Local Tomboy Forced to Gamble Soul", key: "SK" },
      { name: "Sweet Malus", tooltip: "Gods Go on Road Trip, Catastrophe Ensues", key: "SM" },
      { name: "Waspworld", tooltip: "I'm Crazy About Yellowjackets", key: "WW" },
      { name: "Fan Characters", tooltip: "Characters made for other settings, not my own.", key: "FAN" },
      { name: "Other Settings", tooltip: "Characters from other settings, be they minor or deprecated.", key: "OS" },
      { name: "Nightmare Creatures", tooltip: "Things I saw in my dreams.", key: "NC" }
    ]
  },
 {
    name: "Filter Agentcross Characters",
    key: "agency",
    tooltip: "Check this to restrict to certain Agentcross installments. Cuts out all non-Agentcross characters.",
    checked: false,
    sub: [
      { name: "Starcross", tooltip: "Earthling Saga; Ghost Girl Beats Wife, Instantly Regrets It", key: "SC" },
      { name: "Heavencross", tooltip: "Seraphic Saga; Introduction to Determinism", key: "HC" },
      { name: "Fatecross", tooltip: "Seraphic Saga; But What If the Ship of Theseus Was A Person?", key: "FC" },
      { name: "Earthcross", tooltip: "Earthling Saga; Zeeky Boogy Doog", key: "EC" },      
      { name: "Killer Asp", tooltip: "Earthling Saga; Ghost Experiences Physical Contact For First Time in 10 Years (HEARTWARMING)", key: "KA" },    
      { name: "Natural Sin", tooltip: "Seraphic Saga; Confessions of a Mask", key: "NS" },
      { name: "Earthling Saga", tooltip: "Earthcross, Killer Asp, and Starcross; Stories from a Pale Blue Dot", key: "ES" },
      { name: "Seraphic Saga", tooltip: "Natural Sin, Heavencross, and Fatecross; The Bible Gets Butchered", key: "SeS" },      
      { name: "Bonus Round", tooltip: "Extra characters that don't really fit anywhere else here I guess.", key: "BR" }
    ]
  },
 {
  name: 'Remove Minor Characters',
  key: 'extra',
  tooltip: 'Check this to get the minor characters out of there.',
  checked: true
  },  
 {
  name: 'Remove Tertiary Characters',
  key: 'tri',
  tooltip: 'Check this to get the tertiary characters out of there.',
  checked: true
  },  
 {
  name: 'Remove Secondary Characters',
  key: 'sec',
  tooltip: 'Check this to get the secondary characters out of there.',
  checked: false
  },
 {
  name: 'Remove Boys',
  key: 'boy',
  tooltip: 'Check this to get the boys out of there.',
  checked: false
  },
 {
  name: 'Remove Girls',
  key: 'girl',
  tooltip: 'Check this to get the girls out of there for some reason.',
  checked: false
  },
 {
  name: 'Remove Misc.',
  key: 'nb',
  tooltip: 'Check this to get the miscellaneously gendered characters out of there.',
  checked: false
  },
 {
  name: 'Remove Collaborative Characters',
  key: 'collab',
  tooltip: 'Check this to get collaboratively created characters out of there.',
  checked: true
  },
 {
  name: 'Remove Special Characters',
  key: 'spec',
  tooltip: 'Check this to get certain special characters out of there.',
  checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  // AGENCY - EARTHLING SAGA
  { 
    name: "Minna Yamane",
    img: "jhC37Nv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      girl: true
    }
  },
  {
    name: "EQUINOX",
    img: "3dMj2fz.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC", "KA" ],      
      girl: true
    }
  },
  {
    name: "Kyarne",
    img: "pWaltKA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],     
      girl: true
    }
  },
  {
    name: "Alice Kang (SOLSTICE)",
    img: "Ew7NIph.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC", "KA", "EC" ],      
      girl: true
    }
  },
  {
    name: "Venus Kang",
    img: "ZtrMqQn.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC", "KA" ],     
      girl: true
    }
  },
  {
    name: "Sabrina Trenchard (Ceres)",
    img: "jBR0e0M.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SeS", "SC", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Hanael (Observer)",
    img: "6kDhDJp.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SeS", "SC", "HC", "FC" ],      
      girl: true
    }
  },   
  {
    name: "Ángeles Reyes",
    img: "rIQcHie.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA", "EC" ],      
      girl: true
    }
  },
  {
    name: "Anya Kimura",
    img: "JUXjtJI.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA" ],      
      girl: true
    }
  },
   // EARTHLING SAGA - SUPPORTING PROTAGS
  {
    name: "Enkh Khenbishiin",
    img: "pQg4l7O.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA" ],      
      sec: true,
      girl: true
    }
  },  
  {
    name: "Neptune",
    img: "xyhvrWx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC", "KA", "EC" ],
      girl: true
    }
  },  
  {
    name: "Maple Kuna",
    img: "MZJ4zIM.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Margaret Duquette",
    img: "3zCYc8w.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Marianne Tunstall",
    img: "TyewYxv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC", "EC" ],
      sec: true,
      girl: true
    }
  }, 
  {
    name: "Mariposa",
    img: "Gv6h9D9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Milky Way (Wren)",
    img: "gr3aDix.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      sec: true,
      girl: true
    }
  },
   // EARTHLING SAGA - SUPPORTING ANTAGS
   {
    name: "Deleter",
    img: "WkvWAa5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Fuse",
    img: "Nmyzh0l.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Instant",
    img: "7YstrLM.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Kalaziel (Terror)",
    img: "HYMYyZs.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Maite Carrasco",
    img: "4utOP1o.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC", "KA", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "MARIA (Miracle)",
    img: "klKLuqr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC", "KA" ],
      sec: true,
      nb: true
    }
  },
  {
    name: "Mihr (Heat Death)",
    img: "5FmMyAh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      sec: true,
      girl: true
    }
  },   
  {
    name: "Satariel (Warden)",
    img: "kAVhTjq.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SeS", "SC", "HC", "FC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Toya Pastore (Trance)",
    img: "VuJcZVr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Verusha Matveyeva",
    img: "9cSQ2Du.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA", "EC" ],      
      sec: true,
      girl: true
    }
  },  
   // EARTHLING SAGA - EARTHCROSS CORE
  {
    name: "Rose Caspian",
    img: "st3iZb4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      girl: true
    }
  }, 
  {
    name: "Susanne Kay",
    img: "iDE71po.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA", "EC" ],      
      girl: true
    }
  },
  {
    name: "Frankie Flick",
    img: "hVe9GWW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Maisie Hatchett",
    img: "qjhAJOR.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      girl: true
    }
  },  
  {
    name: "Blackbird",
    img: "uUuvVDj.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      nb: true
    }
  },  
  {
    name: "Karin Rosander",
    img: "IohRdrL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,
      girl: true
    }
  },      
  {
    name: "Lucia Tofte",
    img: "iWd9erL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],      
      collab: true,      
      girl: true
    }
  },
  {
    name: "Ronja",
    img: "scN3Qzq.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],      
      collab: true,      
      girl: true
    }
  },  
  {
    name: "Dawn (Clear)",
    img: "PalNJXW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,       
      girl: true
    }
  },
  {
    name: "Teddy Worth (Sense)",
    img: "KKUktsT.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,   
      boy: true
    }
  },  
  {
    name: "Nina Ruck (Big Sister)",
    img: "YnAgljf.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,
      girl: true
    }
  },  
  {
    name: "Belle Bufford (Barrier)",
    img: "qDiF1vt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,
      girl: true
    }
  },
  {
    name: "Bailey Bufford (Bullet)",
    img: "9Sl4bCW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,
      girl: true
    }
  },
  {
    name: "Blank",
    img: "G5tyLuT.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,
      girl: true
    }
  },
  {
    name: "Llyn Rhon",
    img: "bQfBgvi.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      girl: true
    }
  },
  {
    name: "Zaleska VI",
    img: "s8lJS7N.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      girl: true
    }
  },  
  {
    name: "Trașcă",
    img: "qKQlkV9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      boy: true
    }
  },  
  {
    name: "Lup",
    img: "S05HIhl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      boy: true
    }
  },
  {
    name: "Al Azif",
    img: "otKjqTA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      girl: true
    }
  },
  {
    name: "Alhazred",
    img: "BYaL9LE.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      nb: true
    }
  },
  {
    name: "Majin",
    img: "ve2hkqv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  

// EARTHLING SAGA - EARTHCROSS SUPPORT
  {
    name: "Annis Doyle",
    img: "OzweKXy.png",
    opts: {
      series: [ "SC", "OS" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  }, 
  {
    name: "Aradia di Toscano",
    img: "jRKnpTT.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },    
  {
    name: "Audrey Hilt",
    img: "Zic8puo.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,
      tri: true,
      girl: true
    }
  },
  {
    name: "Báiyǔ",
    img: "i1Uls2S.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Belle Hawthorne",
    img: "31UQBjZ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Blue Hat",
    img: "Fq0G8r9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Chaaya Yen",
    img: "br2PEX7.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },      
  {
    name: "Cheat Noguera",
    img: "QIiYLyg.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Corelli Carnarvon",
    img: "lyv2qsj.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Countess Gǔn",
    img: "tFcreDC.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },      
  {
    name: "Danika Crnčević Đavola",
    img: "lE0Hovd.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Doris Austen",
    img: "Sa2yjQI.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Emileigh Ruck",
    img: "Znk5DYL.png",
    opts: {
      series: [ "SC", "FAN" ],
      agency: [ "ES", "EC" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Ethel Hahn",
    img: "ZuIk6mb.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Galvani Zima",
    img: "pqltnSS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      boy: true
    }
  },  
  {
    name: "The Grimm",
    img: "zX6U77e.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Hanami Yako",
    img: "jNbc93I.png",
    opts: {
      series: [ "SC", "OS" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Hanna Graeber",
    img: "BERl8sJ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,
      sec: true,
      girl: true
    }
  },  
  {
    name: "Hasu-douji",
    img: "PxVhtBL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      nb: true
    }
  },  
    {
    name: "The Houndsman (Gwyn)",
    img: "ZW8ovpx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Iris Widow",
    img: "q5TEh9b.png",
    opts: {
      series: [ "SC", "OS" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Ivy Branwen (Mordred)",
    img: "aXToi7R.png",
    opts: {
      series: [ "SC", "OS" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Jack Grue",
    img: "jtYxC8L.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      boy: true
    }
  },    
  {
    name: "The Jack Rabbit",
    img: "Jy0ZcGu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },    
  {
    name: "Jade Huo",
    img: "jNntNRv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Jarpa",
    img: "bum16SA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      nb: true
    }
  },  
  {
    name: "Jiālù Móu",
    img: "JKiU7x9.png",
    opts: {
      series: [ "SC", "FAN" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Johann von Würzoff",
    img: "A8mPsm1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,
      sec: true,
      boy: true
    }
  },
  {
    name: "The Kathardi Butcher (Harper Lorey)",
    img: "KUiLKJg.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      boy: true
    }
  },      
  {
    name: "Kuuko",
    img: "k9Z51QR.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "LAM",
    img: "GwVsR8C.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      nb: true
    }
  },    
  {
    name: "Lancaster Rye",
    img: "S6uV0g3.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      nb: true
    }
  },    
  {
    name: "Licurici",
    img: "aief3Xt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Lorraine Cofer",
    img: "Yu2Imnz.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA", "EC" ],      
      sec: true,
      girl: true
    }
  },  
  {
    name: "Luka Hütchen",
    img: "bU0gFpI.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  }, 
  {
    name: "Marina Petrou",
    img: "VIeIA7t.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Mary Dawson",
    img: "uF01pQp.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },    
  {
    name: "Měijìng Shěn",
    img: "LYWzowA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],      
      sec: true,
      girl: true
    }
  },    
  {
    name: "The Once and Future King",
    img: "dRQmZmY.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },      
  {
    name: "The Phouka",
    img: "SLUQKFr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Set",
    img: "4JVG73B.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      boy: true
    }
  },    
  {
    name: "The Storyteller",
    img: "bjec6TX.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },    
  {
    name: "Ume Maeda",
    img: "6RHV2hx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Voahangy",
    img: "6kdEBa0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Vorpal",
    img: "aglviXx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },    
  {
    name: "The Watcher",
    img: "xUQqpuo.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "The White Rabbit",
    img: "z1nsC7f.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "The Witch of Ways",
    img: "yGAiSpw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Ysabel Donnadieu",
    img: "lDJXfb5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },    
  {
    name: "Yumi Akechi",
    img: "a9gSEB3.png",
    opts: {
      series: [ "SC", "FAN" ],
      agency: [ "ES", "EC" ],
      girl: true
    }
  },  
  {
    name: "Yvette Takács",
    img: "7q1k50q.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      sec: true,
      girl: true
    }
  },    
   // EARTHLING SAGA - EARTHCROSS MISCELLANY
  {
    name: "Agnes Hatchett",
    img: "PYmPvTL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Blair Spall",
    img: "yPpR2yh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Condor",
    img: "U0wyFad.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],      
      extra: true,
      nb: true
    }
  }, 
  {
    name: "Eun-jae Baek",
    img: "z88CW5h.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Free",
    img: "TFuBcSe.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "The Headhunter",
    img: "p7SZ4mx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      boy: true
    }
  },  
  {
    name: "Jinjiao",
    img: "qIqwMpQ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Lita Ignacia",
    img: "Km46cYi.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Lucy Cardoza",
    img: "B3GX96e.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Mahine Avci",
    img: "NHWj5Eb.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],      
      extra: true,
      girl: true
    }
  },
  {
    name: "Marilyn Ruck",
    img: "LAvneBm.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },
 {
    name: "Mikaela Donner",
    img: "zppbaZr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  }, 
 {
    name: "Nikolaos Petrou",
    img: "8ceDxWW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      boy: true
    }
  },   
 {
    name: "Ombromaniac",
    img: "8ngUfp6.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      nb: true
    }
  },   
  {
    name: "Ren Ōtori",
    img: "ZMNOaWo.png",
    opts: {
      series: [ "SC", "FAN" ],
      agency: [ "ES", "EC" ],
      tri: true,
      boy: true
    }
  },  
  {
    name: "Sakae Shindou",
    img: "TPyqay3.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      collab: true,
      tri: true,
      girl: true
    }
  },  
  {
    name: "Secretarybird",
    img: "sbgQ91w.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA", "EC" ],
      tri: true,
      nb: true
    }
  },    
  {
    name: "Silen",
    img: "VuyBqmV.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      nb: true
    }
  },      
  {
    name: "Teresa Delgado",
    img: "sstQ9XY.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "KA" ],      
      extra: true,
      girl: true
    }
  },
  {
    name: "Thomas Hatchett",
    img: "yubvCWG.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      boy: true
    }
  },
  {
    name: "White Hat Estrid Sonnenspeer",
    img: "01yqe2b.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      nb: true
    }
  },  
  {
    name: "Yinjiao",
    img: "7aRknrD.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "EC" ],
      tri: true,
      girl: true
    }
  },  
   // EARTHLING SAGA - STARCROSS MISCELLANY
  {
    name: "Brood Eater",
    img: "waKd9om.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "BR" ],
      tri: true,
      nb: true
    }
  },   
  {
    name: "Bull",
    img: "C7y3kb5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "BR" ],
      tri: true,
      nb: true
    }
  },  
  {
    name: "Langosta",
    img: "nVSmqnK.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Never",
    img: "FRxOgCk.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "BR" ],      
      extra: true,
      nb: true
    }
  },  
  {
    name: "Remnant",
    img: "b7h6Gd2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "BR" ],
      tri: true,
      nb: true
    }
  },
  {
    name: "Shrike",
    img: "rSafeVV.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "SC", "BR" ],
      tri: true,
      nb: true
    }
  },
  {
    name: "Trapper Phantasm",
    img: "gdU2ykD.png",
    opts: {
      series: [ "SC" ],
      agency: [ "ES", "BR" ],      
      extra: true,
      nb: true
    }
  },
  // AGENCY - SERAPHIC SAGA
  {
    name: "Harahel",
    img: "d8LfSKu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Raziel",
    img: "OYzQ3To.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Canace",
    img: "UiH6CCU.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      girl: true
    }
  },
  {
    name: "Baphomet",
    img: "sCBuxzI.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      girl: true
    }
  },
  {
    name: "Belphegor",
    img: "Co8zTeU.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Metatron",
    img: "7hvpj96.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Lucifer",
    img: "y9YsGGw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Beelzebub",
    img: "ilWJqhd.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      girl: true
    }
  },
  {
    name: "Mastema",
    img: "b4rzkye.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Abaddon",
    img: "PTHDHKH.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Uriel",
    img: "fAlzuPG.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],
      girl: true
    }
  },
  {
    name: "Sariel",
    img: "UgOKrWu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Jophiel",
    img: "5IZfgF9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Gabriel",
    img: "pdOgWiL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Raphael",
    img: "WYvQLzQ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Yaldabaoth",
    img: "sWn9b8k.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC", "NS" ],      
      girl: true
    }
  },
  {
    name: "Sophia Astaphe",
    img: "BeVmgbL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC", "NS" ],      
      girl: true
    }
  },
  {
    name: "Logos",
    img: "MVebeJv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Logos Prime",
    img: "YAzO1ob.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "FC", "NS" ],      
      boy: true
    }
  },
  {
    name: "Sige Lenore",
    img: "WCFuBEG.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC", "NS" ],      
      girl: true
    }
  }, 
   // SERAPHIC SAGA - HELL SUPPORT
  {
    name: "Anopheles",
    img: "Rwo8yA5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Arista",
    img: "kyO29nH.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Asmodeus",
    img: "HnBfVyN.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Diogma",
    img: "q8tjGI9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Hydra",
    img: "Viugorr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "L16661",
    img: "3eSp0by.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "L1066601",
    img: "Pw1KcV0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "FC" ],      
      tri: true,
      nb: true
    }
  },  
  {
    name: "L50601",
    img: "FCjXLco.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "FC" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "Leviathan",
    img: "hdv2tN0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Milichia",
    img: "onxMXAF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      tri: true,
      girl: true
    }
  },      
  {
    name: "Morsitans",
    img: "Uo7ETaH.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Murmur",
    img: "6SDr5vh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Phora",
    img: "4PJ0iT4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Hexenn",
    img: "xBORBjS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      sec: true,
      collab: true,
      girl: true
    }
  },
  {
    name: "Lamiet",
    img: "30Xc4da.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      sec: true,
      collab: true,
      girl: true
    }
  },
   // SERAPHIC SAGA - GRIGORI SUPPORT
  {
    name: "Cerviel",
    img: "Wmor0Gy.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },     
  {
    name: "Lancer",
    img: "Iq7beuc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC", "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Logos (Sentinel)",
    img: "NGr94jT.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "FC" ],      
      sec: true,
      nb: true
    }
  },    
  {
    name: "Logos (Silhouette)",
    img: "4VZUwsF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "FC", "BR" ],      
      tri: true,
      nb: true
    }
  },    
  {
    name: "Logos (Seeker)",
    img: "H1sWQLM.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "FC" ],      
      sec: true,
      nb: true
    }
  },  
  {
    name: "Logos (Slasher)",
    img: "8uOrYq9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "FC", "BR" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "Shamsiel",
    img: "nnV1Tb1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      sec: true,
      girl: true
    }
  },     
  {
    name: "Wormwood",
    img: "PM6OQAS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },
   // SERAPHIC SAGA - HEAVEN SUPPORT
  {
    name: "Azrael",
    img: "4r8wIUf.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      sec: true,
      girl: true
    }
  },  
  {
    name: "Hasdiel",
    img: "AL12EJc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },    
  {
    name: "Menadel",
    img: "3CarV02.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      sec: true,
      girl: true
    }
  },        
  {
    name: "Mumiah",
    img: "vm1hFcg.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Orifiel",
    img: "9yMYMSl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "Raguel",
    img: "a1O9Z8i.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Ramiel",
    img: "l4EfyRc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Temeluchus",
    img: "qiJNMxz.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Vasariah",
    img: "YoQApuF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      sec: true,
      girl: true
    }
  },
   // SERAPHIC SAGA - MISCELLANY
  {
    name: "Moloch",
    img: "llMGytI.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      extra: true,
      girl: true
    }
  },    
  {
    name: "Musca",
    img: "69Uzepj.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      extra: true,
      girl: true
    }
  },
  {
    name: "Sabethes",
    img: "hIUXfDn.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "HC" ],      
      extra: true,
      girl: true
    }
  },
  {
    name: "Berith",
    img: "uUnXUtx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "BR" ],      
      tri: true,
      girl: true
    }
  },    
  {
    name: "Chamaris",
    img: "rrtu2kb.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "BR" ],      
      tri: true,
      nb: true
    }
  },      
  {
    name: "Noise",
    img: "oBXaGoV.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "BR" ],      
      tri: true,
      nb: true
    }
  },        
  {
    name: "Unnamed Animal #1",
    img: "ysHqNRw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "BR" ],      
      extra: true,
      boy: true
    }
  },
   // SERAPHIC SAGA - NATURAL SIN CORE
  {
    name: "Zoe Aima",
    img: "xc5l8yy.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],     
      girl: true
    }
  },  
  {
    name: "Bythos",
    img: "xoYO0DX.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],
      girl: true
    }
  },
  {
    name: "Iao",
    img: "aqPAmRF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Horos Astaphe",
    img: "Gu3usSh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],
      boy: true
    }
  }, 
  {
    name: "Adoni Kenoma",
    img: "qr6wAKA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Ain Koth",
    img: "3f92Jl4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Dagon Ciamus",
    img: "PZ0E9Gi.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },      
  {
    name: "Iaon Kenoma",
    img: "YejfX82.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },      
  {
    name: "Leviathan I",
    img: "ShnoJeA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Pariah",
    img: "A5h3S13.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      girl: true
    }
  },            
  {
    name: "Sabal Sciène",
    img: "a4vyNei.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },          
 {
    name: "Saklas Lenore",
    img: "CzsLMJf.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },      
   // SERAPHIC SAGA - NATURAL SIN SUPPORT
  {
    name: "Asher Sark",
    img: "aQ9iHva.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Blinder",
    img: "7JR487u.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "Caru Cary",
    img: "32a7ewS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Daria Astaphe",
    img: "5cPlK0P.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Doxa Astaphe",
    img: "NtWvyst.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      girl: true
    }
  },      
  {
    name: "Duna Astaphe",
    img: "A4iY15B.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Flecker Soides",
    img: "OpSQMLB.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Horkos",
    img: "cxz5kyL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Mona Hyle",
    img: "pWHm3xt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Nene Arugh",
    img: "dXVfB9V.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Prigh Castel",
    img: "AAd9iSd.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      boy: true
    }
  },
  {
    name: "Sion Ariel",
    img: "dyQefX3.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      boy: true
    }
  },
  {
    name: "Spiram Lache",
    img: "kTmqTxP.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Tarache Hyle",
    img: "n45R1PK.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      boy: true
    }
  }, 
  {
    name: "The White Knight",
    img: "rSTbLGL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      sec: true,
      boy: true
    }
  },
   // SERAPHIC SAGA - NATURAL SIN MISCELLANY
  {
    name: "Arche Hyle",
    img: "xv16b2P.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Asta",
    img: "ZRIltHW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "BR" ],      
      extra: true,
      nb: true
    }
  },
 {
    name: "Stray Qwine",
    img: "prNJcqt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SeS", "NS" ],      
      tri: true,
      boy: true
    }
  },          
  
  // BACKWOODS BESTIARY
  {
    name: "Anastasia Eryomina",
    img: "V8WYCXE.png",
    opts: {
      series: [ "BB", "FAN" ],
      girl: true
    }
  },  
  {
    name: "Logan Ruskin",
    img: "O3PQQFC.png",
    opts: {
      series: [ "BB" ],
      girl: true
    }
  },     
  {
    name: "Ekaterina Bakhtin",
    img: "FFVKdFW.png",
    opts: {
      series: [ "BB" ],
      girl: true
    }
  },
  {
    name: "Mozu",
    img: "0XPMmSp.png",
    opts: {
      series: [ "BB" ],
      girl: true
    }
  },
  // BACKWOODS BESTIARY - SUPPORT
  {
    name: "Bella",
    img: "2kDxsuf.png",
    opts: {
      series: [ "BB" ],
      tri: true,      
      girl: true  
    }
  },
  {
    name: "Brie",
    img: "aA9uh0U.png",
    opts: {
      series: [ "BB", "FAN" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "The Burnt King",
    img: "cUhApSo.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Cal Campbell",
    img: "YLVe2So.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "The Captain",
    img: "CGr50gd.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Erlich Kacht",
    img: "nWb0uZF.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  }, 
  {
    name: "Hazel Fauchet",
    img: "gqGUq1r.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Ilya Bakhtin",
    img: "8s7v4dI.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Matthäus Brentel",
    img: "H2IEtiK.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Monantzin",
    img: "lNJrJAg.png",
    opts: {
      series: [ "BB" ],
      tri: true,      
      girl: true  
    }
  },       
  {
    name: "Morra",
    img: "yLQIrjd.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      nb: true
    }
  },    
  {
    name: "Sage",
    img: "l9bJ5aB.png",
    opts: {
      series: [ "BB", "FAN" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "The Sculptor",
    img: "nHRz8jV.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Smoking Mirror",
    img: "Q7a6DTy.png",
    opts: {
      series: [ "OS" ],
      tri: true,      
      girl: true  
    }
  },  
  {
    name: "Specter",
    img: "VulyHVp.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Striver",
    img: "A82F4qN.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Tsepha",
    img: "kvyQJ2S.png",
    opts: {
      series: [ "BB", "FAN" ],
      tri: true,
      boy: true
    }
  },
  {
    name: "Yaku",
    img: "IhAHohR.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      girl: true
    }
  },
  // BACKWOODS BESTIARY - EXTRA
  {
    name: "Big Mama Brisket",
    img: "RmXL14y.png",
    opts: {
      series: [ "BB" ],
      tri: true,      
      girl: true  
    }
  },
  {
    name: "Cornu",
    img: "r3KReVT.png",
    opts: {
      series: [ "BB", "NC" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Dead Princess",
    img: "JrmCjkH.png",
    opts: {
      series: [ "BB" ],
      tri: true,      
      girl: true  
    }
  },    
  {
    name: "Infinity Coil",
    img: "NcNv5Oa.png",
    opts: {
      series: [ "BB" ],
      tri: true,      
      girl: true  
    }
  },    
  {
    name: "Trema",
    img: "Klp2Gpw.png",
    opts: {
      series: [ "BB", "NC" ],
      tri: true,
      girl: true
    }
  },

  // SUICIDE KINGS
  {
    name: "Roxanne Royale",
    img: "D3tqzmm.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Rachel Reiss",
    img: "v5bIW0T.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Jack Leblanc",
    img: "AmcTJUr.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Mirai Amachi",
    img: "0IF5wOj.png",
    opts: {
      series: [ "SK", "FAN" ],
      girl: true
    }
  },
  {
    name: "Shinobu Endou",
    img: "5YokW3T.png",
    opts: {
      series: [ "SK", "FAN" ],
      girl: true
    }
  },
  {
    name: "Damien Aubert",
    img: "76ATn7E.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Daniel Sharpe",
    img: "DjL7m1p.png",
    opts: {
      series: [ "SK" ],
      boy: true
    }
  },
  {
    name: "David Bernier",
    img: "K6b9BJg.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Jonathan Roshe",
    img: "waaqwoe.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Rose Compère",
    img: "iUY2Vyy.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      girl: true
    }
  },       
  {
    name: "Giselle Glamour",
    img: "2g8TI0S.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "The Ace of Spades",
    img: "bDDLno9.png",
    opts: {
      series: [ "SK" ],
      nb: true
    }
  },
  // SUICIDE KINGS - NON-CONTESTANTS
  {
    name: "Ageha Ōta",
    img: "vPE1lvC.png",
    opts: {
      series: [ "SK" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Celeste Veiga",
    img: "JtXeIIm.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Dominique Lumi",
    img: "ovN7PDz.png",
    opts: {
      series: [ "SK", "OS" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Merche Ramón",
    img: "vTeUK9i.png",
    opts: {
      series: [ "SK", "FAN" ],
      girl: true
    }
  },
  {
    name: "Shouko Mitsubayashi",
    img: "ziv92mZ.png",
    opts: {
      series: [ "SK", "FAN" ],
      girl: true
    }
  }, 
  {
    name: "Suzu Igarashi",
    img: "67qdM4l.png",
    opts: {
      series: [ "SK", "FAN" ],
      girl: true
    }
  },
  {
    name: "Dante Marciano",
    img: "Bfze9JI.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      boy: true
    }
  },
  {
    name: "Estelle Laurier",
    img: "q21rqk4.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Guy Royale",
    img: "UWSPTYl.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      boy: true
    }
  }, 
  {
    name: "Justine Royale",
    img: "yfRpqzB.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Katsue Endou",
    img: "fMfMrNv.png",
    opts: {
      series: [ "SK", "FAN" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Noelle Germaine",
    img: "GcVvvit.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Ren Mitsubayashi",
    img: "WXUC6aK.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      boy: true
    }
  },
  {
    name: "Camile Veiga",
    img: "AoFiJJD.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Saki Amachi",
    img: "2ZibPXn.png",
    opts: {
      series: [ "SK", "FAN" ],
      tri: true,
      girl: true
    }
  },   
  {
    name: "Satoru Amachi",
    img: "PIRkISx.png",
    opts: {
      series: [ "SK", "FAN" ],
      tri: true,
      boy: true
    }
  },
  {
    name: "Seiji Endou",
    img: "HzMx71q.png",
    opts: {
      series: [ "SK", "FAN" ],
      tri: true,
      boy: true
    }
  },
  {
    name: "Wataru Igarashi",
    img: "M52HUuC.png",
    opts: {
      series: [ "SK", "FAN" ],
      tri: true,
      boy: true
    }
  },  
  // SUICIDE KINGS - MISCELLANY
  {
    name: "Darcy Royale",
    img: "ZNkwtkK.png",
    opts: {
      series: [ "SK" ],
      extra: true,
      girl: true
    }
  },        
  {
    name: "Hitomi Amachi",
    img: "szCtwSw.png",
    opts: {
      series: [ "SK", "FAN" ],
      extra: true,
      girl: true
    }
  },
  {
    name: "Satoshi Amachi",
    img: "5LHlHBu.png",
    opts: {
      series: [ "SK", "FAN" ],
      extra: true,
      boy: true
    }
  },
  {
    name: "The Wild Card",
    img: "QqogJRo.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      nb: true
    }
  },

  // SWEET MALUS
  {
    name: "Nemesis Cain",
    img: "r7Ha9Gh.png",
    opts: {
      series: [ "SM" ],
      girl: true
    }
  },
  {
    name: "Eris Strife",
    img: "d0U3zSg.png",
    opts: {
      series: [ "SM" ],
      girl: true
    }
  },
  {
    name: "Momo",
    img: "8yt7Txh.png",
    opts: {
      series: [ "SM" ],
      girl: true
    }
  },
  {
    name: "Yan",
    img: "KV9IHex.png",
    opts: {
      series: [ "SM" ],
      sec: true,
      nb: true
    }
  },
  // SWEET MALUS - MISCELLANY
  {
    name: "Momus",
    img: "sZoR9Bh.png",
    opts: {
      series: [ "SM" ],
      tri: true,
      boy: true
    }
  }, 

  // STRAYS
  {
    name: "Char Belladonna",
    img: "9r4F0uB.png",
    opts: {
      series: [ "STR" ],
      nb: true,
      spec: true
    }
  },
  {
    name: "Charlotte",
    img: "276VrAG.png",
    opts: {
      series: [ "STR" ],
      girl: true,
      spec: true,
      sec: true
    }
  },
  {
    name: "Harvest",
    img: "w3UN4mk.png",
    opts: {
      series: [ "STR" ],
      boy: true,
      spec: true,
      sec: true
    }
  },    
  {
    name: "Callie Hemlock",
    img: "YXGv40Q.png",
    opts: {
      series: [ "STR" ],
      girl: true
    }
  },
  {
    name: "Ceraxia Brightblessed",
    img: "G9RSWWO.png",
    opts: {
      series: [ "STR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Daiya",
    img: "7W6PFoT.png",
    opts: {
      series: [ "STR" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Dusty",
    img: "e4tWHBr.png",
    opts: {
      series: [ "STR", "OS" ],
      collab: true,
      sec: true,
      girl: true
    }
  },    
  {
    name: "Evelyn Albright",
    img: "htwHNIg.png",
    opts: {
      series: [ "STR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Marie",
    img: "phTM9eg.png",
    opts: {
      series: [ "STR" ],
      collab: true,    
      sec: true,
      girl: true
    }
  },
  {
    name: "Nobu Nogama",
    img: "EzGMbjt.png",
    opts: {
      series: [ "STR" ],
      collab: true,
      sec: true,
      nb: true
    }
  },
  {
    name: "Sage the Qwine",
    img: "sDrx4gY.png",
    opts: {
      series: [ "STR" ],
      sec: true,
      nb: true,
      spec: true
    }
  },  
  {
    name: "Suyasuya",
    img: "ZB8VnEV.png",
    opts: {
      series: [ "STR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },    
  {
    name: "Sybaris",
    img: "vfW2U6t.png",
    opts: {
      series: [ "STR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },    
  // STRAYS - MISCELLANY
  {
    name: "Nettle",
    img: "8yXikZ4.png",
    opts: {
      series: [ "STR" ],
      girl: true,
      spec: true
    }
  },  
  {
    name: "Oleander",
    img: "eSOSmnA.png",
    opts: {
      series: [ "STR" ],
      girl: true,
      spec: true
    }
  },      
  {
    name: "Bell",
    img: "j3of39s.png",
    opts: {
      series: [ "STR" ],
      sec: true,
      girl: true,
      spec: true
    }
  }, 
  {
    name: "Lyka",
    img: "J5V4boG.png",
    opts: {
      series: [ "STR" ],
      tri: true,
      girl: true,
      collab: true
    }
  }, 

  // WASPWORLD
  {
    name: "Wasphound",
    img: "2rAyDNE.png",
    opts: {
      series: [ "STR", "WW" ],
      girl: true  
    }
  },
  {
    name: "Grizzly",
    img: "LzsR6EU.png",
    opts: {
      series: [ "WW" ],
      tri: true,      
      girl: true  
    }
  },
  {
    name: "The Huntress",
    img: "R6hvc2Y.png",
    opts: {
      series: [ "WW" ],
      tri: true,      
      girl: true  
    }
  },
  {
    name: "The Scribe",
    img: "5WgOwRa.png",
    opts: {
      series: [ "WW" ],
      tri: true,      
      girl: true  
    }
  },  
  {
    name: "Sister Sibling",
    img: "m76BHNH.png",
    opts: {
      series: [ "WW" ],
      tri: true,      
      boy: true  
    }
  },  
  {
    name: "Zombie Sibling",
    img: "fuUagfX.png",
    opts: {
      series: [ "WW" ],
      tri: true,      
      girl: true  
    }
  },  
  {
    name: "Clockwork Twins",
    img: "BnBNF4w.png",
    opts: {
      series: [ "WW" ],
      tri: true,      
      girl: true  
    }
  },    
  {
    name: "Deepwater Angler",
    img: "nog0RV6.png",
    opts: {
      series: [ "WW" ],
      tri: true,      
      nb: true  
    }
  },      
  {
    name: "Earthworks Scarab",
    img: "MjH2QUc.png",
    opts: {
      series: [ "WW" ],
      tri: true,
      collab: true,
      boy: true  
    }
  },      
  {
    name: "Wailing Old Foghorn",
    img: "9uXmRbU.png",
    opts: {
      series: [ "WW" ],
      tri: true,      
      nb: true  
    }
  },        

  // FAN CHARACTERS
 {
    name: "Felicia Mink",
    img: "cVUOuKF.png",
    opts: {
      series: [ "FAN" ],
      girl: true
    }
  },    
  {
    name: "Carolina Verus",
    img: "OsV1SMV.png",
    opts: {
      series: [ "FAN" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Vania Deo",
    img: "oaqS2sF.png",
    opts: {
      series: [ "FAN" ],
      tri: true,      
      girl: true  
    }
  },
  {
    name: "Wendy Harron",
    img: "gkbRkFK.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Sackhead Darkwraith",
    img: "wuwc2Rx.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Sidney Lynch",
    img: "gPZsLXx.png",
    opts: {
      series: [ "FAN" ],
      tri: true,   
      girl: true
    }
  },
  {
    name: "Mia Lynch",
    img: "h7UJ65I.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Isabelle White",
    img: "7jmxf72.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Lili Király",
    img: "HjC4OcO.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Ardeliu Gheata",
    img: "BgM9irk.png",
    opts: {
      series: [ "FAN" ],
      tri: true,   
      girl: true
    }
  },   
  {
    name: "Akira Kogure",
    img: "oPhyW6p.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Charlotte Doucet (Grand Guignol)",
    img: "BTptXTO.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Shion Hagetaka",
    img: "OdkMbur.png",
    opts: {
      series: [ "FAN" ],
      extra: true,
      girl: true
    }
  },

  // OTHER SETTINGS
  {
    name: "Calikin",
    img: "DtfwYmW.png",
    opts: {
      series: [ "OS" ],
      sec: true,
      nb: true
    }
  },  
  {
    name: "Moose",
    img: "9KStfZF.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Blake Corbet",
    img: "xokGTHj.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Dorothy",
    img: "b9vn3wJ.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Finn Schrieve",
    img: "RSifr0N.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      boy: true     
    }
  },
  {
    name: "Monika Čierny",
    img: "HLuBUpz.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Sherry Watson",
    img: "qgLysqw.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Trespasser",
    img: "5ecJB1l.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      nb: true
    }
  },
  {
    name: "Zebel Chance",
    img: "yptRpD2.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      girl: true
    }
  },
{
    name: "Priscilla Bray",
    img: "AnfhJAO.png",
    opts: {
      series: [ "OS" ],
      sec: true,      
      girl: true  
    }
  },
{
    name: "Phone Voice",
    img: "Cj4BIHS.png",
    opts: {
      series: [ "OS" ],
      tri: true,      
      nb: true  
    }
  },
{
    name: "The Rumbler",
    img: "K6eQycv.png",
    opts: {
      series: [ "OS" ],
      sec: true,      
      girl: true  
    }
  },   
  {
    name: "Black Licorice (Edie Coster)",
    img: "bDsTYaG.png",
    opts: {
      series: [ "OS" ],
      tri: true,      
      girl: true  
    }
  },
  {
    name: "Heroine",
    img: "93pfn0y.png",
    opts: {
      series: [ "OS" ],
      tri: true,      
      boy: true  
    }
  },
  {
    name: "Crossroads Killer",
    img: "2C9gE9r.png",
    opts: {
      series: [ "OS" ],
      tri: true,      
      boy: true  
    }
  },
  {
    name: "Yvette la Croix",
    img: "LDfHO2c.png",
    opts: {
      series: [ "OS" ],
      tri: true,      
      girl: true  
    }
  },    

  // NIGHTMARES
  {
    name: "Suicide Taker",
    img: "EZ2ZcQw.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
    }
  },  
  {
    name: "Fisher Perry",
    img: "wW2CfRM.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      boy: true
    }
  },  
  {
    name: "Close Combat Baby",
    img: "KMlYWt3.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      boy: true
    }
  },    
  {
    name: "Swamp Demon",
    img: "tIPbHDh.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
    }
  },        
  {
    name: "Computer God",
    img: "ttkl8jg.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
    }
  },      
  {
    name: "Anglermouth",
    img: "T407h71.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
    }
  }, 
  {
    name: "Bryn-1080",
    img: "4TcNrae.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      girl: true
    }
  },   
  {
    name: "Chicken Skin Demon",
    img: "AdRSodO.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      boy: true
    }
  },    
  {
    name: "Death Beetle",
    img: "RAYyFdu.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
    }
  },      
{
    name: "Evil Dot",
    img: "mB8UeKa.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
    }
  },     
  {
    name: "Peek",
    img: "JsiDaq9.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Pseudo-Nemesis",
    img: "jI2Vazh.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      boy: true
    }
  },    
  {
    name: "Scavenger",
    img: "jmZyP6W.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
    }
  }, 
  {
    name: "Shorm Tower",
    img: "vesiDwY.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
    }
  },   
  {
    name: "Blue",
    img: "WVpVSKz.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      girl: true
    }
  },    
  {
    name: "Purple",
    img: "2DNMlA1.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      girl: true
    }
  },      
  {
    name: "Red",
    img: "YRZ9fWv.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      girl: true
    }
  },

  // ????
  {
    name: "Gaorb",
    img: "8eWDBYz.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      nb: true,
      collab: true
    }
  },    
  {
    name: "Knifedick Deathfuck",
    img: "H9CJlsO.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      boy: true,
      spec: true
    }
  },  
  {
    name: "Rafflesia Nightingale",
    img: "CA55eLO.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      girl: true,
      spec: true
    }
  }
];
