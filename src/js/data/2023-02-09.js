dataSetVersion = "2023-02-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Black Widow", tooltip: "Stupid Occult Detective Bullshit", key: "BW" },
      { name: "Suicide Kings", tooltip: "Local Tomboy Forced to Gamble Soul", key: "SK" },
      { name: "Sweet Malus", tooltip: "Gods Go on Road Trip, Catastrophe Ensues", key: "SM" },
      { name: "Other Settings", tooltip: "Characters from other, deprecated or minor settings.", key: "OS" },
      { name: "Roleplays", tooltip: "Characters made for roleplays.", key: "RP" },     
      { name: "Fan Characters", tooltip: "Characters made for other established settings, not my own.", key: "FAN" },        
      { name: "Nightmare Creatures", tooltip: "Notable things I saw in my dreams", key: "NC" },               
      { name: "Miscellaneous In-Jokes", tooltip: "Useless Vampire Shotguns Bloodbag / The Deathfuck Prophecies", key: "RN" }     
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
      { name: "Killer Asp", tooltip: "Earthling Saga; Ghost Experiences Physical Contact For First Time in 10 Years (HEARTWARMING)", key: "KA" },    
      { name: "Natural Sin", tooltip: "Seraphic Saga; 10 Signs You Might Be An Enneagram Type 1", key: "NS" },
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
  }    
];

dataSet[dataSetVersion].characterData = [
   {
    name: "Minna Yamane",
    img: "ofun9pd.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      girl: true
    }
  },
  {
    name: "EQUINOX",
    img: "jzex9g1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],      
      girl: true
    }
  },
  {
    name: "Kyarne",
    img: "2vxsRHA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],     
      girl: true
    }
  },
  {
    name: "Ángeles Reyes",
    img: "PEDrv7u.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      girl: true
    }
  },  
  {
    name: "Anya Kimura",
    img: "id7xUXW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      girl: true
    }
  },
  {
    name: "Enkh Khenbishiin",
    img: "TcGceHE.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Maple Kuna",
    img: "cFrSYuK.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Milky Way (Wren)",
    img: "T5pBeak.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Mariposa",
    img: "h6zqnbE.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Shrike",
    img: "ooQevFK.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      tri: true,
      nb: true
    }
  },
  {
    name: "Remnant",
    img: "WWrymjh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      tri: true,
      nb: true
    }
  },  
  {
    name: "Free",
    img: "cZvZ0jj.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Alice Kang (SOLSTICE)",
    img: "AIqEHU5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],      
      girl: true
    }
  },
  {
    name: "Venus Kang",
    img: "oLJHckY.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],     
      girl: true
    }
  },
  {
    name: "Neptune",
    img: "Po7Og19.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Sabrina Trenchard (Ceres)",
    img: "Nqo1x4v.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Eun-jae Baek",
    img: "HNTx5ir.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      tri: true,
      girl: true
    }
  },   
  {
    name: "Lucy Cardoza",
    img: "Gtow5po.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      tri: true,
      girl: true
    }
  },    
  {
    name: "Secretarybird",
    img: "Unzzcvl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],
      extra: true,
      nb: true
    }
  },   
  {
    name: "Susanne Kay",
    img: "JTDISSW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      sec: true,
      girl: true
    }
  },  
  {
    name: "Teresa Delgado",
    img: "aQyzfZ0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      extra: true,
      girl: true
    }
  },          
  {
    name: "Toya Pastore (Trance)",
    img: "bJF5w0R.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      sec: true,
      girl: true
    }
  },      
  {
    name: "Verusha Matveyeva",
    img: "8kdz8Jh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      sec: true,
      girl: true
    }
  },   
  {
    name: "Mahine Avci",
    img: "vikJcqX.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      tri: true,
      girl: true
    }
  },      
  {
    name: "Condor",
    img: "73dMpyg.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      extra: true,
      nb: true
    }
  },  
  {
    name: "Clear (Dawn)",
    img: "UCBqky6.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      collab: true,       
      sec: true,
      girl: true
    }
  },
  {
    name: "Sense (Teddy)",
    img: "evJ6bcv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      collab: true,   
      sec: true,
      boy: true
    }
  },  
  {
    name: "Big Sister (Nina)",
    img: "Aobsh4I.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },  
  {
    name: "Barrier (Belle)",
    img: "lo1WGjp.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Bullet (Bailey)",
    img: "mGTnOcR.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Blank",
    img: "IyAbyQV.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },
  {
    name: "Audrey Hilt",
    img: "j0gNjC4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },  
  {
    name: "Emileigh Ruck",
    img: "VfRWJoD.png",
    opts: {
      series: [ "SC", "FAN" ],
      agency: [ "BR" ],          
      sec: true,
      girl: true
    }
  },
  {
    name: "Jade Huo",
    img: "JKXgFo1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Jiālù Móu",
    img: "OoTKbKn.png",
    opts: {
      series: [ "SC", "RP", "FAN" ],
      agency: [ "BR" ],
      tri: true,
      girl: true
    }
  },    
  {
    name: "Karin Rosander",
    img: "9CT8Shm.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],
      collab: true,
      sec: true,
      girl: true
    }
  },      
  {
    name: "Lucia Tofte",
    img: "Y0ekPiW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      collab: true,      
      sec: true,
      girl: true
    }
  },  
  {
    name: "Satariel (Warden)",
    img: "FAv7aRv.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Instant",
    img: "JtdsB7d.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Kalaziel (Terror)",
    img: "314NuH5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },   
   {
    name: "Fuse",
    img: "mHM2P3S.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },     
   {
    name: "Deleter",
    img: "6fHFzty.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },   
  {
    name: "Mihr (Heat Death)",
    img: "ROXtmtk.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      sec: true,
      girl: true
    }
  },   
  {
    name: "Hanael (Observer)",
    img: "SJVljVx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "HC", "FC" ],      
      girl: true
    }
  }, 
  {
    name: "Langosta",
    img: "kOd3Bg6.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Never",
    img: "5KfygJO.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      extra: true,
      nb: true
    }
  },  
  {
    name: "Trapper Phantasm",
    img: "7NjDiZQ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      extra: true,
      nb: true
    }
  },      
  {
    name: "Harahel",
    img: "4Lo2AYB.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Raziel",
    img: "TrEDpGo.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Canace",
    img: "gddp1pe.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      girl: true
    }
  },
  {
    name: "Baphomet",
    img: "aXOL7SO.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      girl: true
    }
  },
  {
    name: "Belphegor",
    img: "9zjzJ6O.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Metatron",
    img: "dEl7gKO.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Lucifer",
    img: "15xzs4Y.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Musca",
    img: "mZVYiGh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      extra: true,
      girl: true
    }
  },  
  {
    name: "Asmodeus",
    img: "tpjhbrp.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],
      sec: true,
      girl: true
    }
  },      
  {
    name: "Leviathan",
    img: "VM1hLd4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Leviathan I",
    img: "w1clZgq.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "NS" ],
      sec: true,
      girl: true
    }
  },    
  {
    name: "Hydra",
    img: "bbZgsj4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "L16661",
    img: "IYgfake.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      nb: true
    }
  },
  {
    name: "L1066601",
    img: "vSkz1UB.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      tri: true,
      nb: true
    }
  },  
  {
    name: "L50601",
    img: "ECi2VDs.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      tri: true,
      nb: true
    }
  },  
  {
    name: "Hexenn",
    img: "rtkx3Op.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Lamiet",
    img: "qwwBPO0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },   
  {
    name: "Cerviel",
    img: "uT0AZAV.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },     
  {
    name: "Lancer",
    img: "l1UUu5o.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      tri: true,
      girl: true
    }
  },   
  {
    name: "Shamsiel",
    img: "m8LSNq4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },     
  {
    name: "Wormwood",
    img: "qQYwMd4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },       
  {
    name: "Anopheles",
    img: "nHdqtsm.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },  
  {
    name: "Arista",
    img: "qj7hacS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Diogma",
    img: "jvC95d1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },    
  {
    name: "Milichia",
    img: "Cokr9R8.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },      
  {
    name: "Morsitans",
    img: "iZOvgnU.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },  
  {
    name: "Phora",
    img: "dqpj2kZ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      girl: true
    }
  },        
  {
    name: "Sabethes",
    img: "KtbdiZW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      extra: true,
      girl: true
    }
  },          
  {
    name: "Murmur",
    img: "cl1tfRi.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Beelzebub",
    img: "x7tF9pS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      girl: true
    }
  },
  {
    name: "Orifiel",
    img: "5RX7dD3.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      tri: true,
      nb: true
    }
  },    
  {
    name: "Azrael",
    img: "pq1Jg17.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },  
  {
    name: "Hasdiel",
    img: "80AIxLe.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },    
  {
    name: "Menadel",
    img: "vsxd0Un.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },        
  {
    name: "Mumiah",
    img: "djCiaRX.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },          
  {
    name: "Raguel",
    img: "DUGMykW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Ramiel",
    img: "CtBaZXt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },            
  {
    name: "Temeluchus",
    img: "LII2iIu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },
  {
    name: "Vasariah",
    img: "pCowlDz.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      sec: true,
      girl: true
    }
  },        
  {
    name: "Mastema",
    img: "k7xY9Ij.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Abaddon",
    img: "VsPXfoQ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Uriel",
    img: "Vm2ohrt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],
      girl: true
    }
  },
  {
    name: "Sariel",
    img: "xMpf7kn.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Jophiel",
    img: "hWGuneA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Gabriel",
    img: "rQb1ASC.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Raphael",
    img: "X1eJTs0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Yaldabaoth",
    img: "xqVBxpr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      girl: true
    }
  },

  {
    name: "Sophia Astaphe",
    img: "k5HCHNY.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      girl: true
    }
  },
  {
    name: "Logos",
    img: "03a1Iua.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Logos (Sentinel)",
    img: "xFfY5cG.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      sec: true,
      nb: true
    }
  },    
  {
    name: "Logos (Silhouette)",
    img: "QOL7Eh5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      tri: true,
      nb: true
    }
  },    
  {
    name: "Logos (Seeker)",
    img: "3cQ5NxU.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      sec: true,
      nb: true
    }
  },  
  {
    name: "Logos (Stalker)",
    img: "YZARVOF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      tri: true,
      nb: true
    }
  },      
  {
    name: "Logos (Slasher)",
    img: "pYuIPGs.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      tri: true,
      nb: true
    }
  },    
  {
    name: "Logos Prime",
    img: "ubmBtiW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC", "NS" ],      
      boy: true
    }
  },
  {
    name: "Zoe Aima",
    img: "ZZMIk90.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],     
      girl: true
    }
  },  
  {
    name: "Bythos",
    img: "YKli6jS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],     
      girl: true
    }
  },      
  {
    name: "Sige Lenore",
    img: "3KYQ6g2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      girl: true
    }
  },  
  {
    name: "Iao",
    img: "uBhkgeP.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      girl: true
    }
  },      
  {
    name: "Horos Astaphe",
    img: "KWiFoHl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      boy: true
    }
  },  
  {
    name: "Doxa Astaphe",
    img: "SY1kl3m.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      girl: true
    }
  },      
  {
    name: "Duna Astaphe",
    img: "k2vXxpl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      girl: true
    }
  },
  {
    name: "Daria Astaphe",
    img: "KoYLxKl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      girl: true
    }
  },    
  {
    name: "Tarache Hyle",
    img: "2JEJRdc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      boy: true
    }
  },     
  {
    name: "Mona Hyle",
    img: "O1EI1Gy.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      girl: true
    }
  },    
  {
    name: "Arche Hyle",
    img: "nZ9EmTV.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      girl: true
    }
  },         
  {
    name: "The White Knight",
    img: "8Otfxaw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },  
 {
    name: "Saklas Lenore",
    img: "oS3Whs3.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },      
  {
    name: "Sabal Sciène",
    img: "RqCTQwJ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },          
  {
    name: "Sion Ariel",
    img: "9B0DbOi.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      boy: true
    }
  },            
  {
    name: "Ain Koth",
    img: "3axlt7V.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  }, 
  {
    name: "Blinder",
    img: "x5Z1jSg.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      nb: true
    }
  },  
  {
    name: "Asher Sark",
    img: "qiWxXiF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },
  {
    name: "Nene Arugh",
    img: "aeITVp2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      girl: true
    }
  }, 
  {
    name: "Horkos",
    img: "BkqY3kk.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },   
  {
    name: "Prigh Castel",
    img: "JoF9Tyk.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      tri: true,
      boy: true
    }
  },   
  {
    name: "Adoni Kenoma",
    img: "7XTxVwo.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },    
  {
    name: "Iaon Kenoma",
    img: "5frRf4a.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },      
  {
    name: "Dagon Ciamus",
    img: "4DBo0Wh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      sec: true,
      boy: true
    }
  },       
  {
    name: "Berith",
    img: "KP2FUeQ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      tri: true,
      girl: true
    }
  },    
  {
    name: "Chamaris",
    img: "7lzrVtR.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      tri: true,
      nb: true
    }
  },      
  {
    name: "Noise",
    img: "vuD6KCM.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      tri: true,
      nb: true
    }
  },        
  {
    name: "Unnamed Animal #1",
    img: "m21Gz4L.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      extra: true,
      boy: true
    }
  },          
  {
    name: "Anastasia Eryomina",
    img: "w5zRsyD.png",
    opts: {
      series: [ "BB", "RP" ],
      girl: true
    }
  },  
  {
    name: "Logan Ruskin",
    img: "qxmO9It.png",
    opts: {
      series: [ "BB" ],
      girl: true
    }
  },     
  {
    name: "Ekaterina Bakhtin",
    img: "3IBKaNp.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      girl: true
    }
  },      
  {
    name: "Ilya Bakhtin",
    img: "H63914F.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "The Burnt King",
    img: "cyK4cCh.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Cal Campbell",
    img: "EWjWBcp.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Erlich Kacht",
    img: "PWXzgGW.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      boy: true
    }
  },  
  {
    name: "Cornu",
    img: "xb1yGqj.png",
    opts: {
      series: [ "BB", "NC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Mozu",
    img: "TkWuBcn.png",
    opts: {
      series: [ "BB" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Sage",
    img: "RegZsgC.png",
    opts: {
      series: [ "BB", "FAN" ],
      sec: true,
      boy: true
    }
  },
  {
    name: "Trema",
    img: "gq5wrsK.png",
    opts: {
      series: [ "BB", "NC" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Iris Widow",
    img: "VVWpy6O.png",
    opts: {
      series: [ "BW" ],
      girl: true
    }
  },
  {
    name: "Sherry Watson",
    img: "J7c95Kr.png",
    opts: {
      series: [ "BW" ],
      girl: true
    }
  },
  {
    name: "Ivy Branwen (Mordred)",
    img: "SUTOhr9.png",
    opts: {
      series: [ "BW" ],
      girl: true
    }
  },
  {
    name: "Dorothy",
    img: "p9mXDnm.png",
    opts: {
      series: [ "BW" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Finn Schrieve",
    img: "0OOv4mu.png",
    opts: {
      series: [ "BW" ],
      boy: true     
    }
  },  
  {
    name: "Annis Doyle",
    img: "yFaD8P5.png",
    opts: {
      series: [ "BW" ],
      girl: true
    }
  },
  {
    name: "Blake Corbet",
    img: "wwrqT2g.png",
    opts: {
      series: [ "BW" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Hanami Yako",
    img: "vTod2eR.png",
    opts: {
      series: [ "BW" ],
      girl: true
    }
  },
  {
    name: "Trespasser",
    img: "LJeu2pk.png",
    opts: {
      series: [ "BW" ],
      sec: true,
      nb: true
    }
  },  
  {
    name: "Monika Čierny",
    img: "dOhvhJe.png",
    opts: {
      series: [ "BW" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Roxanne Royale",
    img: "50OuhcQ.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Rachel Reiss",
    img: "uegmVx8.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Jack Leblanc",
    img: "33YfnSq.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Damien Aubert",
    img: "vfih4t6.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      boy: true
    }
  },     
  {
    name: "Daniel Sharpe",
    img: "0uotkKu.png",
    opts: {
      series: [ "SK" ],
      boy: true
    }
  },      
  {
    name: "David Bernier",
    img: "4nx8j00.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      boy: true
    }
  },  
  {
    name: "Jonathan Roshe",
    img: "xOriTpU.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      boy: true
    }
  },    
  {
    name: "Noelle Germaine",
    img: "FxLC1AA.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Rose Compère",
    img: "d8Xp8E2.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      girl: true
    }
  },       
  {
    name: "Giselle Glamour",
    img: "rO0mSw9.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "The Wild Card",
    img: "HbceA4v.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      nb: true
    }
  },      
  {
    name: "The Ace of Spades",
    img: "Z8nKeyg.png",
    opts: {
      series: [ "SK" ],
      nb: true
    }
  },
  {
    name: "Dante Marciano",
    img: "PkwZ5wX.png",
    opts: {
      series: [ "SK" ],
      extra: true,
      boy: true
    }
  },        
  {
    name: "Darcy Royale",
    img: "0SDanpt.png",
    opts: {
      series: [ "SK" ],
      extra: true,
      girl: true
    }
  },        
  {
    name: "Estelle Laurier",
    img: "Y0RvA2o.png",
    opts: {
      series: [ "SK" ],
      extra: true,
      girl: true
    }
  },          
  {
    name: "Guy Royale",
    img: "fcQpNQt.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      boy: true
    }
  }, 
  {
    name: "Justine Royale",
    img: "6mn93qL.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      girl: true
    }
  },  
  {
    name: "Nemesis Cain",
    img: "3ceu8Zw.png",
    opts: {
      series: [ "SM" ],
      girl: true
    }
  },
  {
    name: "Eris Strife",
    img: "1iY8vFt.png",
    opts: {
      series: [ "SM" ],
      girl: true
    }
  },
  {
    name: "Momo",
    img: "R2vmkQi.png",
    opts: {
      series: [ "SM" ],
      girl: true
    }
  },
  {
    name: "Momus",
    img: "qkY1oSY.png",
    opts: {
      series: [ "SM" ],
      tri: true,
      boy: true
    }
  },  
  {
    name: "Yan",
    img: "IOYRdOm.png",
    opts: {
      series: [ "SM" ],
      sec: true,
      nb: true
    }
  },  
  {
    name: "Merche Ramón",
    img: "vw5ofUL.png",
    opts: {
      series: [ "SK", "RP", "FAN" ],
      girl: true
    }
  },
  {
    name: "Mirai Amachi",
    img: "FFbD67W.png",
    opts: {
      series: [ "SK", "RP", "FAN" ],
      girl: true
    }
  },
  {
    name: "Shinobu Endou",
    img: "ikV9qUe.png",
    opts: {
      series: [ "SK", "RP", "FAN" ],
      girl: true
    }
  },
  {
    name: "Shouko Mitsubayashi",
    img: "6C7b4cU.png",
    opts: {
      series: [ "SK" ],
      sec: true,
      girl: true
    }
  }, 
  {
    name: "Suzu Igarashi",
    img: "yUTRQS3.png",
    opts: {
      series: [ "SK", "RP" ],
      sec: true,
      girl: true
    }
  },
  {
    name: "Yumi Akechi",
    img: "Enfxn0z.png",
    opts: {
      series: [ "SC", "RP", "FAN" ],
      agency: [ "BR" ],
      girl: true
    }
  },  
  {
    name: "Felicia Mink",
    img: "1zf8fy8.png",
    opts: {
      series: [ "RP", "FAN" ],
      girl: true
    }
  },    
  {
    name: "Carolina Verus",
    img: "HQJGOx2.png",
    opts: {
      series: [ "RP", "FAN" ],
      girl: true
    }
  },
  {
    name: "Vania Deo",
    img: "K6Dc0HK.png",
    opts: {
      series: [ "RP", "FAN" ],
      sec: true,      
      girl: true  
    }
  },      
  {
    name: "Wendy Harron",
    img: "t13xy2O.png",
    opts: {
      series: [ "RP" ],
      sec: true,
      girl: true
    }
  },   
  {
    name: "Ageha Ōta",
    img: "mKP0SAC.png",
    opts: {
      series: [ "SK" ],
      collab: true,
      sec: true,
      girl: true
    }
  },        
  {
    name: "Hitomi Amachi",
    img: "OPGlzSZ.png",
    opts: {
      series: [ "RP", "SK" ],
      extra: true,
      girl: true
    }
  },      
  {
    name: "Katsue Endou",
    img: "Mibu8l9.png",
    opts: {
      series: [ "RP", "SK" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Ren Mitsubayashi",
    img: "3LiLz0t.png",
    opts: {
      series: [ "SK" ],
      tri: true,
      boy: true
    }
  },            
  {
    name: "Ren Ōtori",
    img: "czxUSVL.png",
    opts: {
      series: [ "RP" ],
      tri: true,
      boy: true
    }
  },        
  {
    name: "Saki Amachi",
    img: "ClWetum.png",
    opts: {
      series: [ "RP", "SK" ],
      tri: true,
      girl: true
    }
  },   
  {
    name: "Satoru Amachi",
    img: "wvmwePe.png",
    opts: {
      series: [ "RP", "SK" ],
      tri: true,
      boy: true
    }
  },      
  {
    name: "Satoshi Amachi",
    img: "BXNJBjP.png",
    opts: {
      series: [ "RP", "SK" ],
      extra: true,
      boy: true
    }
  },        
  {
    name: "Seiji Endou",
    img: "3QXErl7.png",
    opts: {
      series: [ "RP", "SK" ],
      tri: true,
      boy: true
    }
  },        
  {
    name: "Shion Hagetaka",
    img: "DqHXQeF.png",
    opts: {
      series: [ "RP" ],
      extra: true,
      girl: true
    }
  },          
  {
    name: "Zebel Chance",
    img: "4PnJ1ZJ.png",
    opts: {
      series: [ "OS" ],
      tri: true,
      girl: true
    }
  },          
  {
    name: "Sidney Lynch",
    img: "V3OQrJs.png",
    opts: {
      series: [ "FAN" ],
      tri: true,   
      girl: true
    }
  },
  {
    name: "Mia Lynch",
    img: "c6oCBSB.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Isabelle White",
    img: "0sP2qmt.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Lili Király",
    img: "XkfNL9Z.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Ardeliu Gheata",
    img: "p56RDRA.png",
    opts: {
      series: [ "FAN" ],
      tri: true,   
      girl: true
    }
  },   
  {
    name: "Akira Kogure",
    img: "hUUONjj.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Charlotte Doucet (Grand Guignol)",
    img: "5uFnSO9.png",
    opts: {
      series: [ "FAN" ],
      tri: true,
      girl: true
    }
  },
  {
    name: "Suicide Taker",
    img: "jQr4Xvp.png",
    opts: {
      series: [ "NC", "OS" ],
      tri: true,
      nb: true
    }
  },  
  {
    name: "Fisher Perry",
    img: "JlQYgmL.png",
    opts: {
      series: [ "NC", "OS" ],
      tri: true,
      boy: true
    }
  },  
  {
    name: "Close Combat Baby",
    img: "v1Um3Gm.png",
    opts: {
      series: [ "NC", "OS" ],
      tri: true,
      boy: true
    }
  },    
  {
    name: "Anglermouth",
    img: "LX6FBup.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      nb: true
    }
  }, 
  {
    name: "Chicken Skin Demon",
    img: "PtM4KrQ.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      boy: true
    }
  },    
  {
    name: "Peek",
    img: "qerFH1n.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      girl: true
    }
  },  
  {
    name: "Pseudo-Nemesis",
    img: "iv6Q1Ke.png",
    opts: {
      series: [ "NC" ],
      tri: true,
      boy: true
    }
  },    
  {
    name: "Scavenger",
    img: "ix9At7C.png",
    opts: {
      series: [ "NC", "OS" ],
      tri: true,
      nb: true
    }
  },  
  {
    name: "Blue",
    img: "ZNApdqy.png",
    opts: {
      series: [ "NC", "OS" ],
      tri: true,
      girl: true
    }
  },    
  {
    name: "Purple",
    img: "nYcfgce.png",
    opts: {
      series: [ "NC", "OS" ],
      tri: true,
      girl: true
    }
  },      
  {
    name: "Red",
    img: "lhWmXPO.png",
    opts: {
      series: [ "NC", "OS" ],
      tri: true,
      girl: true
    }
  },        
  {
    name: "Knifedick Deathfuck",
    img: "N6WiU35.png",
    opts: {
      series: [ "RN" ],
      tri: true,
      boy: true
    }
  },  
  {
    name: "Rafflesia Nightingale",
    img: "7IriYRZ.png",
    opts: {
      series: [ "RN" ],
      tri: true,
      girl: true
    }
  }
];
