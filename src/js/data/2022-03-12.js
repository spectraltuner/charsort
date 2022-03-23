dataSetVersion = "2022-03-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Nightmare Creatures", tooltip: "Things I Saw In My Dreams", key: "NC" },               
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
      { name: "Natural Sin", tooltip: "Seraphic Saga; So I Joined the Army (And Everything Got Worse From There)", key: "NS" },
      { name: "Bonus Round", tooltip: "Extra characters that don't really fit anywhere else here I guess.", key: "BR" }
    ]
  },
 {
  name: 'Remove Non-FC/OC Characters',
  key: 'notwiki',
  tooltip: 'Check this to get the characters not on the wiki yet, or that are otherwise irrelevant to the FC/OC community, out of there.',
  checked: true
  },
 {
  name: 'Remove Minor Characters',
  key: 'extra',
  tooltip: 'Check this to get the minor characters out of there.',
  checked: true
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
    img: "JiAmmPm.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],      
      girl: true
    }
  },
  {
    name: "Kyarne",
    img: "JnHZLkr.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],     
      girl: true
    }
  },
  {
    name: "Ángeles Reyes",
    img: "oclA7NC.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Eun-jae Baek",
    img: "w8IVUvF.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
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
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Milky Way",
    img: "Tv3dQFt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },
  {
    name: "Mariposa",
    img: "h6zqnbE.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },
  {
    name: "Shrike",
    img: "pblpBOS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      nb: true
    }
  },
  {
    name: "Alice Kang (SOLSTICE)",
    img: "l3pnrzt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],      
      girl: true
    }
  },
  {
    name: "Venus Kang",
    img: "7xLC3Ln.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],     
      girl: true
    }
  },
  {
    name: "Neptune",
    img: "5najzMZ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],      
      girl: true
    }
  },  
  {
    name: "Sabrina Trenchard (Ceres)",
    img: "9HKMBfo.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Jade Huo",
    img: "zWOOl23.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      girl: true
    }
  },     
  {
    name: "Susanne Kay",
    img: "5qlFbbK.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Verusha Matveyeva",
    img: "S6VSubh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Toya Pastore (Trance)",
    img: "cblPUgY.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      girl: true
    }
  },    
  {
    name: "Lucy Cardoza",
    img: "utWqIyq.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },  
  {
    name: "Christian Kang",
    img: "A4oAoi2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      extra: true,
      boy: true
    }
  },  
  {
    name: "Sofía Kang",
    img: "SjWLBxU.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },    
  {
    name: "Sara Kang",
    img: "Iqr68xe.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },      
  {
    name: "Teresa Delgado",
    img: "aQyzfZ0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },        
  {
    name: "Condor",
    img: "hPWTHVf.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      notwiki: true,
      extra: true,
      nb: true
    }
  },  
  {
    name: "Mahine Avci",
    img: "vPPnU2s.png",
    opts: {
      series: [ "SC", "BB" ],
      agency: [ "BR" ],      
      notwiki: true,
      nb: true
    }
  },    
  {
    name: "Instant",
    img: "Fy6pENW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },
  {
    name: "Kalaziel (Terror)",
    img: "HHrcjrh.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },    
  {
    name: "Satariel (Warden)",
    img: "HfNMqF1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },
   {
    name: "Deleter",
    img: "zNEszKD.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },   
  {
    name: "Langosta",
    img: "NyD3ixu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },
  {
    name: "Hanael (Observer)",
    img: "DwouPF8.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "HC", "FC" ],      
      girl: true
    }
  }, 
  {
    name: "Never",
    img: "DZAuP4K.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      notwiki: true,
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
      notwiki: true,
      extra: true,
      nb: true
    }
  },      
  {
    name: "Harahel",
    img: "FQ8cJr7.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Raziel",
    img: "l7vSvi7.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Canace",
    img: "IKrXiyy.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Baphomet",
    img: "aXOL7SO.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Belphegor",
    img: "Ljv0Zkn.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Metatron",
    img: "Z87U1LK.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Lucifer",
    img: "OReVtpg.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Musca",
    img: "pNioiOj.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },  
  {
    name: "Asmodeus",
    img: "dyMb2dc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],
      notwiki: true,
      girl: true
    }
  },      
  {
    name: "Leviathan",
    img: "PzlqU2e.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Leviathan I",
    img: "3e6Sew9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "NS" ],
      notwiki: true,
      girl: true
    }
  },    
  {
    name: "L16661",
    img: "IYgfake.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      nb: true
    }
  },
  {
    name: "L1066601",
    img: "vSkz1UB.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      notwiki: true,
      extra: true,
      nb: true
    }
  },  
  {
    name: "L50601",
    img: "ECi2VDs.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Hexenn",
    img: "eWiPbm8.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Lamiet",
    img: "qwwBPO0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },   
  {
    name: "Lancer",
    img: "ORjVzC2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      notwiki: true,
      girl: true
    }
  },   
  {
    name: "Shamsiel",
    img: "1l5EHZ9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },     
  {
    name: "Wormwood",
    img: "8i1SKon.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },       
  {
    name: "Anopheles",
    img: "nmtPkad.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Arista",
    img: "h0Sout1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Diogma",
    img: "v9oD2L1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },    
  {
    name: "Milichia",
    img: "gRy877N.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },      
  {
    name: "Morsitans",
    img: "di1xT93.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Phora",
    img: "dqpj2kZ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
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
      notwiki: true,
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
    img: "FcfgXgW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      nb: true
    }
  },    
  {
    name: "Azrael",
    img: "rHqiLL3.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Hasdiel",
    img: "1odmSsZ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },    
  {
    name: "Menadel",
    img: "ZRzJYts.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },        
  {
    name: "Raguel",
    img: "2DZBcfa.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },          
  {
    name: "Temeluchus",
    img: "qEf9Uze.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
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
    img: "VqcaVpE.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
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
    img: "bDttO3i.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Jophiel",
    img: "mwKpFBW.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Gabriel",
    img: "MxonFNN.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Raphael",
    img: "vu4WqfZ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Yaldabaoth",
    img: "dOVctGu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      girl: true
    }
  },

  {
    name: "Sophia Astaphe",
    img: "ZPMTC1m.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      girl: true
    }
  },
  {
    name: "Logos",
    img: "oQ0xBEr.png",
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
      notwiki: true,
      nb: true
    }
  },    
  {
    name: "Logos (Silhouette)",
    img: "Spn4AS1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      notwiki: true,
      extra: true,
      nb: true
    }
  },    
  {
    name: "Logos (Seeker)",
    img: "3cQ5NxU.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Logos (Stalker)",
    img: "VDwnrgJ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      notwiki: true,
      extra: true,
      nb: true
    }
  },      
  {
    name: "Logos (Slasher)",
    img: "pYuIPGs.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      notwiki: true,
      extra: true,
      nb: true
    }
  },    
  {
    name: "Logos Prime",
    img: "VEFzfnp.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC", "NS" ],      
      boy: true
    }
  },
  {
    name: "Zoe Aima",
    img: "KsuXSol.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],     
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Bythos",
    img: "dv6IHZz.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],     
      notwiki: true,
      girl: true
    }
  },      
  {
    name: "Sige Lenore",
    img: "fx70JoQ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Iao",
    img: "onboQSH.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      girl: true
    }
  },      
  {
    name: "Horos Astaphe",
    img: "8LeE5Qq.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Doxa Astaphe",
    img: "D6bXEvw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },      
  {
    name: "Duna Astaphe",
    img: "zoGDM3I.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },       
  {
    name: "Tarache Hyle",
    img: "486kMvM.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      extra: true,
      boy: true
    }
  },     
  {
    name: "Mona Hyle",
    img: "ro0tPEB.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      girl: true
    }
  },    
  {
    name: "Arche Hyle",
    img: "Upc4B3R.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      extra: true,
      girl: true
    }
  },         
  {
    name: "The White Knight",
    img: "8Otfxaw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },  
 {
    name: "Saklas Lenore",
    img: "o7F3USM.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },      
  {
    name: "Sabal Sciène",
    img: "MGvIMP1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },          
  {
    name: "Sion Ariel",
    img: "sUUsgNS.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },            
  {
    name: "Ain Koth",
    img: "cPZO0h9.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  }, 
  {
    name: "Asher Sark",
    img: "h7hiern.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },       
   {
    name: "Horkos",
    img: "Lcw7qWA.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },   
  {
    name: "Adoni Kenoma",
    img: "Q2ZgMOs.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },    
  {
    name: "Iaon Kenoma",
    img: "FSDs9S2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },      
  {
    name: "Berith",
    img: "mQrA8m8.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      notwiki: true,
      girl: true
    }
  },    
  {
    name: "Chamaris",
    img: "QklYYyw.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      notwiki: true,
      nb: true
    }
  },      
  {
    name: "Noise",
    img: "IvUSz8E.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      notwiki: true,
      nb: true
    }
  },        
  {
    name: "Unnamed Animal #1",
    img: "m21Gz4L.png",
    opts: {
      series: [ "SC" ],
      agency: [ "BR" ],      
      notwiki: true,
      extra: true,
      boy: true
    }
  },          
  {
    name: "Anastasia Eryomina",
    img: "sUYoW27.png",
    opts: {
      series: [ "BB", "RP" ],
      girl: true
    }
  },  
  {
    name: "Logan Ruskin",
    img: "UIM7mtP.png",
    opts: {
      series: [ "BB" ],
      notwiki: true,
      girl: true
    }
  },     
  {
    name: "Ekaterina Bakhtin",
    img: "HDeCn8B.png",
    opts: {
      series: [ "BB" ],
      notwiki: true,
      girl: true
    }
  },      
  {
    name: "Ilya Bakhtin",
    img: "ldiE0eH.png",
    opts: {
      series: [ "BB" ],
      notwiki: true,
      boy: true
    }
  },    
  {
    name: "Sage",
    img: "sSupD5h.png",
    opts: {
      series: [ "BB", "FAN" ],
      notwiki: true,
      boy: true
    }
  },          
  {
    name: "The Burnt King",
    img: "0sxoBOu.png",
    opts: {
      series: [ "BB" ],
      notwiki: true,
      boy: true
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
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Ivy Branwen",
    img: "SUTOhr9.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Dorothy",
    img: "GR5HVmq.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Finn Schrieve",
    img: "0OOv4mu.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      boy: true     
    }
  },  
  {
    name: "Annis Doyle",
    img: "Q4Ty1f2.png",
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
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Hanami Yako",
    img: "vTod2eR.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Trespasser",
    img: "LJeu2pk.png",
    opts: {
      series: [ "BW" ],
      nb: true
    }
  },  
  {
    name: "Monika Čierny",
    img: "dOhvhJe.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Roxanne Royale",
    img: "0Leoioy.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Rachel Reiss",
    img: "MnNtMv5.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Jack Leblanc",
    img: "x9Ee1Zl.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Damien Aubert",
    img: "vfih4t6.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      boy: true
    }
  },     
  {
    name: "Daniel Sharpe",
    img: "gvBsNQI.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      boy: true
    }
  },      
  {
    name: "David Bernier",
    img: "KpvOv0Q.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Jonathan Roshe",
    img: "na8VpUr.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      boy: true
    }
  },    
  {
    name: "Noelle Germaine",
    img: "9KBKFED.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Rose Compere",
    img: "YeoRvhY.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },       
  {
    name: "Giselle Glamour",
    img: "VYGnrDN.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "The Wild Card",
    img: "0KmwDGp.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      nb: true
    }
  },      
  {
    name: "The Ace of Spades",
    img: "Z8nKeyg.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      nb: true
    }
  },
  {
    name: "Annette Gagne",
    img: "PQjAhqC.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },            
  {
    name: "Daniel Reiss",
    img: "s0POihv.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },          
  {
    name: "Dante Marciano",
    img: "PkwZ5wX.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },        
  {
    name: "Darcy Royale",
    img: "0SDanpt.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },        
  {
    name: "Estelle Laurier",
    img: "Y0RvA2o.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },          
  {
    name: "Guy Royale",
    img: "tpscL6g.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      boy: true
    }
  }, 
  {
    name: "Isaac Reiss",
    img: "EtEDvOz.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },          
  {
    name: "Jessica Reiss",
    img: "2zmFS3T.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },              
  {
    name: "Justine Royale",
    img: "eunKzz3.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Paul Laurier",
    img: "y5kItF0.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },    
  {
    name: "Quincy Laurier",
    img: "5He1aIE.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },      
  {
    name: "Rebecca Reiss",
    img: "8HkvYUB.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },          
  {
    name: "Reina Reiss",
    img: "pn1JLMh.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },        
  {
    name: "Ren Mitsubayashi",
    img: "3LiLz0t.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },          
  {
    name: "Samuel Aubert",
    img: "7IIz1gU.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },       
  {
    name: "Selene Aubert",
    img: "pPpKaOw.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },          
  {
    name: "Suzette Gagne",
    img: "2Px1pwq.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },              
  {
    name: "Nemesis Cain",
    img: "nfmOYf8.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Eris Strife",
    img: "1iY8vFt.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Momo",
    img: "x9HcTbm.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Momus",
    img: "dqSyr9x.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Yan",
    img: "aR8jGVc.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Merche Ramón",
    img: "vw5ofUL.png",
    opts: {
      series: [ "SK", "RP", "FAN" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Mirai Amachi",
    img: "xReWm9E.png",
    opts: {
      series: [ "SK", "RP", "FAN" ],
      girl: true
    }
  },
  {
    name: "Shinobu Endou",
    img: "IQsfPcI.png",
    opts: {
      series: [ "SK", "RP", "FAN" ],
      girl: true
    }
  },    
  {
    name: "Yumi Akechi",
    img: "xzhMaiZ.png",
    opts: {
      series: [ "SC", "RP", "FAN" ],
      agency: [ "KA" ],      
      girl: true
    }
  },  
  {
    name: "Felicia Mink",
    img: "dmogwnU.png",
    opts: {
      series: [ "RP", "FAN" ],
      girl: true
    }
  },    
  {
    name: "Carolina Verus",
    img: "IxPz8pw.png",
    opts: {
      series: [ "RP", "FAN" ],
      girl: true
    }
  },    
  {
    name: "Shouko Mitsubayashi",
    img: "6C7b4cU.png",
    opts: {
      series: [ "RP", "SK", "FAN" ],
      notwiki: true,
      girl: true
    }
  }, 
  {
    name: "Hitomi Amachi",
    img: "Vh4wuZD.png",
    opts: {
      series: [ "RP", "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },      
  {
    name: "Jin Akechi",
    img: "G9vBXNw.png",
    opts: {
      series: [ "RP", "SC" ],
      agency: [ "BR" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },      
  {
    name: "Katsue Endou",
    img: "BjjSVX2.png",
    opts: {
      series: [ "RP", "SK" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },
  {
    name: "Saki Amachi",
    img: "OA2dULL.png",
    opts: {
      series: [ "RP", "SK" ],
      notwiki: true,
      girl: true
    }
  },    
  {
    name: "Satoru Amachi",
    img: "S7P6Fj7.png",
    opts: {
      series: [ "RP", "SK" ],
      notwiki: true,
      boy: true
    }
  },      
  {
    name: "Satoshi Amachi",
    img: "g0J0RFo.png",
    opts: {
      series: [ "RP", "SK" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },        
  {
    name: "Seiji Endou",
    img: "MqK0iHX.png",
    opts: {
      series: [ "RP", "SK" ],
      notwiki: true,
      extra: true,
      boy: true
    }
  },        
  {
    name: "Yuno Akechi",
    img: "VbzZTh2.png",
    opts: {
      series: [ "RP", "SC" ],
      agency: [ "BR" ],
      notwiki: true,
      extra: true,
      girl: true
    }
  },   
  {
    name: "Zebel Chance",
    img: "4PnJ1ZJ.png",
    opts: {
      series: [ "OS" ],
      notwiki: true,
      girl: true
    }
  },          
  {
    name: "Sidney Lynch",
    img: "oGXJgND.png",
    opts: {
      series: [ "FAN" ],
      girl: true
    }
  },
  {
    name: "Mia Lynch",
    img: "c6oCBSB.png",
    opts: {
      series: [ "FAN" ],
      girl: true
    }
  },
  {
    name: "Isabelle White",
    img: "h1xGYVY.png",
    opts: {
      series: [ "FAN" ],
      girl: true
    }
  },  
  {
    name: "Lili Király",
    img: "XkfNL9Z.png",
    opts: {
      series: [ "FAN" ],
      girl: true
    }
  },  
  {
    name: "Akira Kogure",
    img: "malfpRq.png",
    opts: {
      series: [ "FAN" ],
      girl: true
    }
  },  
  {
    name: "Emileigh Ruck",
    img: "sPYTQiG.png",
    opts: {
      series: [ "FAN" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Charlotte Doucet (Grand Guignol)",
    img: "vFnRxtX.png",
    opts: {
      series: [ "FAN" ],
      notwiki: true,
      girl: true
    }
  },     
  {
    name: "Suicide Taker",
    img: "S39N0Xj.png",
    opts: {
      series: [ "NC", "OS" ],
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Fisher Perry",
    img: "gCTlOdJ.png",
    opts: {
      series: [ "NC", "OS" ],
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Close Combat Baby",
    img: "0MS21S1.png",
    opts: {
      series: [ "NC", "OS" ],
      notwiki: true,
      boy: true
    }
  },    
  {
    name: "Anglermouth",
    img: "8eXEb12.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      nb: true
    }
  }, 
  {
    name: "Chicken Skin Demon",
    img: "xXhqZRG.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      boy: true
    }
  },    
  {
    name: "Peek",
    img: "wNMKG0z.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Pseudo-Nemesis",
    img: "iv6Q1Ke.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      boy: true
    }
  },    
  {
    name: "Scavenger",
    img: "qBX0deO.png",
    opts: {
      series: [ "NC", "OS" ],
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Knifedick Deathfuck",
    img: "N6WiU35.png",
    opts: {
      series: [ "RN" ],
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Rafflesia Nightingale",
    img: "7IriYRZ.png",
    opts: {
      series: [ "RN" ],
      notwiki: true,
      girl: true
    }
  }
];
