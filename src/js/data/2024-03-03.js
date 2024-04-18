dataSetVersion = "2024-03-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Setting",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Agency", tooltip: "Starcross, Heavencross, and Fatecross", key: "SC" },
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
    name: "Filter Agency Characters",
    key: "agency",
    tooltip: "Check this to restrict to certain Agency installments. Cuts out all non-Agency characters.",
    checked: false,
    sub: [
      { name: "Starcross", tooltip: "Earthling Saga; Ghost Girl Beats Wife, Instantly Regrets It", key: "SC" },
      { name: "Heavencross", tooltip: "Seraphic Saga; Introduction to Determinism", key: "HC" },
      { name: "Fatecross", tooltip: "Seraphic Saga; But What If the Ship of Theseus Was A Person?", key: "FC" },
      { name: "Earthcross", tooltip: "Earthling Saga; Other Earlier Earthling Escapades", key: "EC" },      
      { name: "Killer Asp", tooltip: "Earthling Saga; Ghost Experiences Physical Contact For First Time in 10 Years (HEARTWARMING)", key: "KA" },    
      { name: "Natural Sin", tooltip: "Seraphic Saga; Confessions of a Mask", key: "NS" },
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
      agency: [ "SC" ],
      girl: true
    }
  },
  {
    name: "EQUINOX",
    img: "2INOTl2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],      
      girl: true
    }
  },
  {
    name: "Kyarne",
    img: "mh2m9vj.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],     
      girl: true
    }
  },
  {
    name: "Alice Kang (SOLSTICE)",
    img: "xD7BOp4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA", "EC" ],      
      girl: true
    }
  },
  {
    name: "Venus Kang",
    img: "ZtrMqQn.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],     
      girl: true
    }
  },
  {
    name: "Sabrina Trenchard (Ceres)",
    img: "3Lf7cEG.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Hanael (Observer)",
    img: "cFLf9cS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "HC", "FC" ],      
      girl: true
    }
  },   
  {
    name: "Ángeles Reyes",
    img: "91vyndw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA", "EC" ],      
      girl: true
    }
  },
  {
    name: "Anya Kimura",
    img: "7HB3Hkv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      girl: true
    }
  },
   // EARTHLING SAGA - SUPPORTING PROTAGS
  {
    name: "Enkh Khenbishiin",
    img: "pQg4l7O.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      sec: true,
      girl: true
    }
  },  
  {
    name: "Neptune",
    img: "5mgAdpt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA", "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Maple Kuna",
    img: "MZJ4zIM.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Mariposa",
    img: "Gv6h9D9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Milky Way (Wren)",
    img: "gr3aDix.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
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
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Fuse",
    img: "Nmyzh0l.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Instant",
    img: "7YstrLM.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Kalaziel (Terror)",
    img: "eClOpnP.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Maite Carrasco",
    img: "4utOP1o.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA", "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "MARIA (Miracle)",
    img: "klKLuqr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],
      sec: true,
      nb: true
    }
  },
  {
    name: "Mihr (Heat Death)",
    img: "5FmMyAh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },   
  {
    name: "Satariel (Warden)",
    img: "KGVqMqw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Toya Pastore (Trance)",
    img: "VuJcZVr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Verusha Matveyeva",
    img: "pfk7WxK.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA", "EC" ],      
      sec: true,
      girl: true
    }
  },  
   // EARTHLING SAGA - EARTHCROSS CORE
  {
    name: "Rose Caspian",
    img: "skYmsn6.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  }, 
  {
    name: "Susanne Kay",
    img: "kfkG2vh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA", "EC" ],      
      girl: true
    }
  },
  {
    name: "Karin Rosander",
    img: "jDjsXH0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      collab: true,
      sec: true,
      girl: true
    }
  },      
  {
    name: "Lucia Tofte",
    img: "S1tki17.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],      
      collab: true,      
      sec: true,
      girl: true
    }
  },
  {
    name: "Ronja",
    img: "1DsSHFf.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],      
      collab: true,      
      sec: true,
      girl: true
    }
  },  
  {
    name: "Dawn (Clear)",
    img: "lsiDG7N.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      collab: true,       
      sec: true,
      girl: true
    }
  },
  {
    name: "Teddy Worth (Sense)",
    img: "fJO8szS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      collab: true,   
      boy: true
    }
  },  
  {
    name: "Nina Ruck (Big Sister)",
    img: "KdeFQT2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      collab: true,
      girl: true
    }
  },  
  {
    name: "Belle (Barrier)",
    img: "OYPTNrA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Bailey (Bullet)",
    img: "0yDDID8.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Blank",
    img: "9JRgQdA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Al Azif",
    img: "otKjqTA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Alhazred",
    img: "BYaL9LE.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      nb: true
    }
  },  
  {
    name: "Annis Doyle",
    img: "OzweKXy.png",
    opts: {
      series: [ "SC", "OS" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  }, 
  {
    name: "Aradia di Toscano",
    img: "jRKnpTT.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      girl: true
    }
  },    
  {
    name: "Audrey Hilt",
    img: "Zic8puo.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      collab: true,
      tri: true,
      girl: true
    }
  },
  {
    name: "Báiyǔ",
    img: "eYtj43O.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Belle Hawthorne",
    img: "3LUHTSL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },      
  {
    name: "Cheat Noguera",
    img: "ucAPgSO.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Corelli Carnarvon",
    img: "lyv2qsj.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },    
  {
    name: "Danika Crnčević Đavola",
    img: "aSBDJac.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Doris Austen",
    img: "Sa2yjQI.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Emileigh Ruck",
    img: "8iUUKUB.png",
    opts: {
      series: [ "SC", "FAN" ],
      agency: [ "EC" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Ethel Hahn",
    img: "dmWpeRi.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Frankie Flick",
    img: "d0kx8MI.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "The Grimm",
    img: "WkSLhfm.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Hanami Yako",
    img: "OXEBKqp.png",
    opts: {
      series: [ "SC", "OS" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Hanna Graeber",
    img: "B1SGMmU.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      collab: true,
      sec: true,
      girl: true
    }
  },  
  {
    name: "Hasu-douji",
    img: "jMcuVb7.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      nb: true
    }
  },  
    {
    name: "The Houndsman (Gwyn)",
    img: "ZW8ovpx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Iris Widow",
    img: "q5TEh9b.png",
    opts: {
      series: [ "SC", "OS" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Ivy Branwen (Mordred)",
    img: "aXToi7R.png",
    opts: {
      series: [ "SC", "OS" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "The Jack Rabbit",
    img: "Jy0ZcGu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },    
  {
    name: "Jade Huo",
    img: "mywgLPT.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Jarpa",
    img: "bum16SA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      nb: true
    }
  },  
  {
    name: "Jiālù Móu",
    img: "Ubrr0zK.png",
    opts: {
      series: [ "SC", "FAN" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Kuuko",
    img: "k9Z51QR.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Lancaster Rye",
    img: "S6uV0g3.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      nb: true
    }
  },    
  {
    name: "Leakey Dawson",
    img: "rYgKxsm.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Llyn Rhon",
    img: "bQfBgvi.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Luka Hütchen",
    img: "bU0gFpI.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Maisie Hatchett",
    img: "t3pp6XF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  }, 
  {
    name: "MAJESTIC",
    img: "uUuvVDj.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      nb: true
    }
  },  
  {
    name: "Majin",
    img: "ve2hkqv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Marina Petrou",
    img: "OYW6DAv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Měijìng Shěn",
    img: "LYWzowA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],      
      sec: true,
      girl: true
    }
  },    
  {
    name: "The Phouka",
    img: "qawT0cl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "The Red Butcher (Harper Lorey)",
    img: "KUiLKJg.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      boy: true
    }
  },    
  {
    name: "Ume Maeda",
    img: "uciboXK.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "The Watcher",
    img: "jIcK1oR.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "The White Rabbit",
    img: "QeSNRbP.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "The Witch of Ways",
    img: "JLnUC5y.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Ysabel Donnadieu",
    img: "lDJXfb5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      sec: true,
      girl: true
    }
  },    
  {
    name: "Yumi Akechi",
    img: "6SSMWiB.png",
    opts: {
      series: [ "SC", "FAN" ],
      agency: [ "EC" ],
      girl: true
    }
  },  
  {
    name: "Zaleska VI",
    img: "s8lJS7N.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      girl: true
    }
  },
   // EARTHLING SAGA - EARTHCROSS MISCELLANY
  {
    name: "Agnes Hatchett",
    img: "PYmPvTL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Blair Spall",
    img: "yPpR2yh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Condor",
    img: "U0wyFad.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],      
      extra: true,
      nb: true
    }
  }, 
  {
    name: "Eun-jae Baek",
    img: "z88CW5h.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "The Headhunter",
    img: "p7SZ4mx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      boy: true
    }
  },  
  {
    name: "Jinjiao",
    img: "qIqwMpQ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Lita Ignacia",
    img: "Km46cYi.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Lorraine Cofer",
    img: "Yu2Imnz.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA", "EC" ],      
      tri: true,
      girl: true
    }
  },  
  {
    name: "Lucy Cardoza",
    img: "B3GX96e.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Mahine Avci",
    img: "NHWj5Eb.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],      
      extra: true,
      girl: true
    }
  },
  {
    name: "Marilyn Ruck",
    img: "LAvneBm.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      girl: true
    }
  },
 {
    name: "Mikaela Donner",
    img: "zppbaZr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      girl: true
    }
  }, 
  {
    name: "Ren Ōtori",
    img: "ZMNOaWo.png",
    opts: {
      series: [ "SC", "FAN" ],
      agency: [ "EC" ],
      tri: true,
      boy: true
    }
  },  
  {
    name: "Sakae Shindou",
    img: "TPyqay3.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
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
      agency: [ "KA", "EC" ],
      tri: true,
      nb: true
    }
  },    
  {
    name: "Teresa Delgado",
    img: "sstQ9XY.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      extra: true,
      girl: true
    }
  },
  {
    name: "Thomas Hatchett",
    img: "PYmPvTL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      boy: true
    }
  },    
  {
    name: "Yinjiao",
    img: "7aRknrD.png",
    opts: {
      series: [ "SC" ],
      agency: [ "EC" ],
      tri: true,
      girl: true
    }
  },  
   // EARTHLING SAGA - STARCROSS MISCELLANY
  {
    name: "Free",
    img: "Lir7f6I.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Langosta",
    img: "fGz4TfE.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Never",
    img: "FRxOgCk.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      extra: true,
      nb: true
    }
  },  
  {
    name: "Remnant",
    img: "b7h6Gd2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      tri: true,
      nb: true
    }
  },
  {
    name: "Shrike",
    img: "rSafeVV.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      tri: true,
      nb: true
    }
  },
  {
    name: "Trapper Phantasm",
    img: "gdU2ykD.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
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
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Raziel",
    img: "OYzQ3To.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Canace",
    img: "UiH6CCU.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      girl: true
    }
  },
  {
    name: "Baphomet",
    img: "plUiPmJ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      girl: true
    }
  },
  {
    name: "Belphegor",
    img: "oPEHi0l.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Metatron",
    img: "OVz4o11.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Lucifer",
    img: "52wutvD.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Beelzebub",
    img: "ilWJqhd.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      girl: true
    }
  },
  {
    name: "Mastema",
    img: "5XdgAZ9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Abaddon",
    img: "PTHDHKH.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Uriel",
    img: "XJWSd2r.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],
      girl: true
    }
  },
  {
    name: "Sariel",
    img: "y6L4pnq.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Jophiel",
    img: "mMzGcio.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Gabriel",
    img: "pdOgWiL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Raphael",
    img: "kW3xXJl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Yaldabaoth",
    img: "WpVGBvX.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      girl: true
    }
  },
  {
    name: "Sophia Astaphe",
    img: "TOmdxLc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      girl: true
    }
  },
  {
    name: "Logos",
    img: "5HLXy06.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Logos Prime",
    img: "cxvCViR.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC", "NS" ],      
      boy: true
    }
  },
  {
    name: "Sige Lenore",
    img: "vfEnVUf.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      girl: true
    }
  }, 
   // SERAPHIC SAGA - HELL SUPPORT
  {
    name: "Anopheles",
    img: "Rwo8yA5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Arista",
    img: "kyO29nH.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Asmodeus",
    img: "HnBfVyN.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Diogma",
    img: "q8tjGI9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Hydra",
    img: "Viugorr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "L16661",
    img: "3eSp0by.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "L1066601",
    img: "Pw1KcV0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      tri: true,
      nb: true
    }
  },  
  {
    name: "L50601",
    img: "FCjXLco.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "Leviathan",
    img: "hdv2tN0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Milichia",
    img: "onxMXAF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },      
  {
    name: "Morsitans",
    img: "Uo7ETaH.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Murmur",
    img: "6SDr5vh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Phora",
    img: "4PJ0iT4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Hexenn",
    img: "FizpMpu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Lamiet",
    img: "30Xc4da.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },
   // SERAPHIC SAGA - GRIGORI SUPPORT
  {
    name: "Cerviel",
    img: "Wmor0Gy.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },     
  {
    name: "Lancer",
    img: "Iq7beuc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Logos (Sentinel)",
    img: "fT64PH5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      sec: true,
      nb: true
    }
  },    
  {
    name: "Logos (Silhouette)",
    img: "LXTtDSh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      tri: true,
      nb: true
    }
  },    
  {
    name: "Logos (Seeker)",
    img: "kwowfsc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      sec: true,
      nb: true
    }
  },  
  {
    name: "Logos (Slasher)",
    img: "yQo2ilS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "Shamsiel",
    img: "nnV1Tb1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },     
  {
    name: "Wormwood",
    img: "PM6OQAS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
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
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },  
  {
    name: "Hasdiel",
    img: "AL12EJc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },    
  {
    name: "Menadel",
    img: "3CarV02.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },        
  {
    name: "Mumiah",
    img: "vm1hFcg.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Orifiel",
    img: "9yMYMSl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "Raguel",
    img: "a1O9Z8i.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Ramiel",
    img: "l4EfyRc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Temeluchus",
    img: "qiJNMxz.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Vasariah",
    img: "YoQApuF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
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
      agency: [ "HC" ],      
      extra: true,
      girl: true
    }
  },    
  {
    name: "Musca",
    img: "69Uzepj.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      extra: true,
      girl: true
    }
  },
  {
    name: "Sabethes",
    img: "hIUXfDn.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      extra: true,
      girl: true
    }
  },
  {
    name: "Berith",
    img: "uUnXUtx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      tri: true,
      girl: true
    }
  },    
  {
    name: "Chamaris",
    img: "rrtu2kb.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      tri: true,
      nb: true
    }
  },      
  {
    name: "Noise",
    img: "oBXaGoV.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      tri: true,
      nb: true
    }
  },        
  {
    name: "Unnamed Animal #1",
    img: "ysHqNRw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
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
      agency: [ "NS" ],     
      girl: true
    }
  },  
  {
    name: "Bythos",
    img: "xoYO0DX.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],
      girl: true
    }
  },
  {
    name: "Iao",
    img: "aqPAmRF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Horos Astaphe",
    img: "zlWDCby.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],
      boy: true
    }
  }, 
  {
    name: "Adoni Kenoma",
    img: "qr6wAKA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Ain Koth",
    img: "nsLzmj2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Dagon Ciamus",
    img: "PZ0E9Gi.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },      
  {
    name: "Iaon Kenoma",
    img: "YejfX82.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },      
  {
    name: "Leviathan I",
    img: "ShnoJeA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Sabal Sciène",
    img: "uQr56BB.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },          
 {
    name: "Saklas Lenore",
    img: "FAUa8uP.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
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
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Blinder",
    img: "7JR487u.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "Caru Cary",
    img: "32a7ewS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Daria Astaphe",
    img: "5cPlK0P.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Doxa Astaphe",
    img: "NtWvyst.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      girl: true
    }
  },      
  {
    name: "Duna Astaphe",
    img: "A4iY15B.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Flecker Soides",
    img: "OpSQMLB.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Horkos",
    img: "cxz5kyL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Mona Hyle",
    img: "oMpEqUr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Nene Arugh",
    img: "dXVfB9V.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Prigh Castel",
    img: "AAd9iSd.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      boy: true
    }
  },
  {
    name: "Sion Ariel",
    img: "dyQefX3.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      boy: true
    }
  },
  {
    name: "Spiram Lache",
    img: "kTmqTxP.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Tarache Hyle",
    img: "n45R1PK.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      boy: true
    }
  }, 
  {
    name: "The White Knight",
    img: "rSTbLGL.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
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
      agency: [ "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Asta",
    img: "ZRIltHW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      extra: true,
      nb: true
    }
  },
  
  // BACKWOODS BESTIARY
  {
    name: "Anastasia Eryomina",
    img: "1LlKP9G.png",
    opts: {
      series: [ "BB", "FAN" ],
      girl: true
    }
  },  
  {
    name: "Logan Ruskin",
    img: "DE8phlt.png",
    opts: {
      series: [ "BB" ],
      girl: true
    }
  },     
  {
    name: "Ekaterina Bakhtin",
    img: "a7sT6r0.png",
    opts: {
      series: [ "BB" ],
      girl: true
    }
  },
  {
    name: "Mozu",
    img: "hSFdJPC.png",
    opts: {
      series: [ "BB" ],
      girl: true
    }
  },
  // BACKWOODS BESTIARY - SUPPORT
  {
    name: "Brie",
    img: "BE7s0kg.png",
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
    name: "Ilya Bakhtin",
    img: "8s7v4dI.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
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
    name: "Specter",
    img: "tT20MTc.png",
    opts: {
      series: [ "BB", "OS" ],
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
    name: "Cornu",
    img: "aHdwHhb.png",
    opts: {
      series: [ "BB", "NC" ],
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
    img: "LEUu7y9.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Rachel Reiss",
    img: "x7wyeGJ.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Jack Leblanc",
    img: "rM7Br5L.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Mirai Amachi",
    img: "Bb8weCC.png",
    opts: {
      series: [ "SK", "FAN" ],
      girl: true
    }
  },
  {
    name: "Shinobu Endou",
    img: "eWTJ2gr.png",
    opts: {
      series: [ "SK", "FAN" ],
      girl: true
    }
  },
  {
    name: "Damien Aubert",
    img: "OJz26y9.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Daniel Sharpe",
    img: "L40AsEw.png",
    opts: {
      series: [ "SK" ],
      boy: true
    }
  },
  {
    name: "David Bernier",
    img: "bqNrN7m.png",
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
    img: "rGCT99c.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "The Ace of Spades",
    img: "vx6uOJ7.png",
    opts: {
      series: [ "SK" ],
      nb: true
    }
  },
  // SUICIDE KINGS - NON-CONTESTANTS
  {
    name: "Ageha Ōta",
    img: "LSaCVNB.png",
    opts: {
      series: [ "SK" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Celeste Veiga",
    img: "QeoCokp.png",
    opts: {
      series: [ "SK" ],
      collab: true,
      girl: true
    }
  },
  {
    name: "Merche Ramón",
    img: "iFn7Cmj.png",
    opts: {
      series: [ "SK", "FAN" ],
      girl: true
    }
  },
  {
    name: "Shouko Mitsubayashi",
    img: "7knnWOf.png",
    opts: {
      series: [ "SK", "FAN" ],
      girl: true
    }
  }, 
  {
    name: "Suzu Igarashi",
    img: "hC3EAVe.png",
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
    img: "p8ssdey.png",
    opts: {
      series: [ "SM" ],
      girl: true
    }
  },
  {
    name: "Yan",
    img: "QcgpL8I.png",
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
    img: "mjOoSJY.png",
    opts: {
      series: [ "STR" ],
      nb: true,
      spec: true
    }
  },
  {
    name: "Callie Hemlock",
    img: "9jwTWJ3.png",
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
    img: "sl8oVZE.png",
    opts: {
      series: [ "STR" ],
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
    name: "Nobu Nogama",
    img: "vOzQUDL.png",
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

  // WASPWORLD
  {
    name: "Wasphound",
    img: "702NkHx.png",
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
    name: "Sister Sibling",
    img: "m76BHNH.png",
    opts: {
      series: [ "WW" ],
      tri: true,      
      boy: true  
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

  // FAN CHARACTERS
 {
    name: "Felicia Mink",
    img: "LfNUF6B.png",
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
      sec: true,
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
    name: "Bella",
    img: "2kDxsuf.png",
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
      tri: true,      
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

  // NIGHTMARES
  {
    name: "Suicide Taker",
    img: "mjgrgie.png",
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
    name: "Anglermouth",
    img: "T407h71.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
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
