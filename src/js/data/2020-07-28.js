dataSetVersion = "2020-07-28"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Setting",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Agency", tooltip: "Starcross, Heavencross, and Fatecross", key: "SC" },
      { name: "Black Widow", tooltip: "Stupid Occult Detective Bullshit", key: "BW" },
      { name: "Monster Hunting & You", tooltip: "The Monster Hunter Diaries", key: "MH" },
      { name: "Suicide Kings", tooltip: "Local Tomboy Forced to Gamble Soul", key: "SK" },
      { name: "Sweet Malus", tooltip: "Gods Go on Road Trip, Catastrophe Ensues", key: "SM" },
      { name: "Roleplays", tooltip: "Characters made for roleplays.", key: "RP" },     
      { name: "Other Settings", tooltip: "Characters I made for other settings, but not as part of roleplays.", key: "OS" },
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
      { name: "Killer Asp", tooltip: "Earthling Saga; Ghost Experiences Physical Contact For First Time in 10 Years (HEARTWARMING)", key: "KA" },
      { name: "Heavencross", tooltip: "Seraphic Saga; Introduction to Determinism", key: "HC" },
      { name: "Fatecross", tooltip: "Seraphic Saga; But What If the Ship of Theseus Was A Person?", key: "FC" },
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
    img: "kuM1zBQ.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],
      girl: true
    }
  },
  {
    name: "EQUINOX",
    img: "Kho1iMd.png",
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
    img: "maiDuD5.png",
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
    img: "YlOuW9X.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      girl: true
    }
  },
  {
    name: "Enkh Khenbishiin",
    img: "Ao4FKEf.png",
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
    img: "3Vz0Vrf.png",
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
    img: "6JLbTmt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],      
      girl: true
    }
  },
  {
    name: "Venus Kang",
    img: "IEniRrn.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],     
      girl: true
    }
  },
  {
    name: "Neptune",
    img: "9ZsujHY.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "KA" ],      
      girl: true
    }
  },  
  {
    name: "Sabrina Trenchard (Ceres)",
    img: "Mmgnyz5.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "HC", "FC" ],      
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
    img: "aS7JM2P.png",
    opts: {
      series: [ "SC" ],
      agency: [ "KA" ],      
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Instant",
    img: "pKtTaV4.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },
  {
    name: "Kalaziel (Terror)",
    img: "qR8rLrg.png",
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
    name: "Langosta",
    img: "R0mabWt.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },
  {
    name: "Deleter",
    img: "nh5yCGO.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],      
      girl: true
    }
  },
  {
    name: "Hanael (Observer)",
    img: "OXQ2hlu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC", "HC", "FC" ],      
      girl: true
    }
  }, 
  {
    name: "Harahel",
    img: "gIVffti.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Raziel",
    img: "N96ekTR.png",
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
    img: "VhM3dfd.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Belphegor",
    img: "MA98fF2.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Metatron",
    img: "SrwQxHN.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Lucifer",
    img: "hVQZLq9.png",
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
    img: "ayRlyPs.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Lamiet",
    img: "9YBTuIl.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },   
  {
    name: "Lancer",
    img: "p2sOury.png",
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
    img: "TpsqFBk.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Beelzebub",
    img: "9rdeZVK.png",
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
    img: "it9jzWs.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Hasdiel",
    img: "DO3dska.png",
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
    img: "0KCKfO7.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Abaddon",
    img: "PLUhF85.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Uriel",
    img: "DEurqgM.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Sariel",
    img: "yx5s0a0.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Jophiel",
    img: "AktH9Js.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Gabriel",
    img: "K80sWZ1.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Raphael",
    img: "vlPpE5r.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Yaldabaoth",
    img: "SXrNNYO.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "NS" ],      
      girl: true
    }
  },

  {
    name: "Sophia Astaphe",
    img: "TyUfUHH.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      girl: true
    }
  },
  {
    name: "Logos (Synthesizer)",
    img: "DW4eEMx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      nb: true
    }
  },
  {
    name: "Logos (Sentinel)",
    img: "Zw6jybv.png",
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
    img: "5kyfwqx.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Logos (Slasher)",
    img: "yU4QdQh.png",
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
    img: "hHfcjrs.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC", "NS" ],      
      boy: true
    }
  },
  {
    name: "Zoe",
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
    name: "Sige",
    img: "WP2oweu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC", "NS" ],      
      notwiki: true,
      girl: true
    }
  },    
 {
    name: "Saklas",
    img: "uWVf6Gn.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },    
  {
    name: "Horos Astaphe",
    img: "6va41xY.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Doxa Astaphe",
    img: "eQTbsnm.png",
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
    img: "Ry58Wmd.png",
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
    img: "rPgnQwH.png",
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
    img: "ktJe3B7.png",
    opts: {
      series: [ "SC" ],
      agency: [ "NS" ],      
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Ain",
    img: "cPZO0h9.png",
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
    name: "Iris Widow",
    img: "yjrvPwD.png",
    opts: {
      series: [ "BW" ],
      girl: true
    }
  },
  {
    name: "Sherry Watson",
    img: "R1TGVOx.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Ivy Branwen",
    img: "phzxd54.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Dorothy",
    img: "0NLww72.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Finn Schrieve",
    img: "hNBgn7h.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      boy: true     
    }
  },  
  {
    name: "Annis Doyle",
    img: "HeOut1S.png",
    opts: {
      series: [ "BW" ],
      girl: true
    }
  },
  {
    name: "Blake Corbet",
    img: "FBLka2q.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Hanami Yako",
    img: "jNjZX24.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Trespasser",
    img: "Ur1CCfC.png",
    opts: {
      series: [ "BW" ],
      nb: true
    }
  },  
  {
    name: "Monika Čierny",
    img: "WhBGMWX.png",
    opts: {
      series: [ "BW" ],
      notwiki: true,
      girl: true
    }
  },  
  {
    name: "Anastasia",
    img: "orUwyaM.png",
    opts: {
      series: [ "MH", "RP" ],
      girl: true
    }
  },  
  {
    name: "Logan Ruskin",
    img: "rEB3TgE.png",
    opts: {
      series: [ "MH" ],
      notwiki: true,
      girl: true
    }
  },    
  {
    name: "Roxanne Royale",
    img: "DyMUEpR.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Rachel Reiss",
    img: "wkhx6JN.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Jack Leblanc",
    img: "HNS53Su.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Damien Aubert",
    img: "zsj7v7k.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      boy: true
    }
  },     
  {
    name: "Daniel Sharpe",
    img: "DKtB6hv.png",
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
    img: "F2DfRbe.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Giselle Glamour",
    img: "cb6kOD1.png",
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
    img: "oENm2qU.png",
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
    img: "3JPTSuF.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Eris Strife",
    img: "Rkc7UH1.png",
    opts: {
      series: [ "SM" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Momo",
    img: "08xvyoJ.png",
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
    img: "OG0v6Bm.png",
    opts: {
      series: [ "SK", "RP" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Mirai Amachi",
    img: "9xUZZgp.png",
    opts: {
      series: [ "SK", "RP" ],
      girl: true
    }
  },
  {
    name: "Shinobu Endou",
    img: "yxFc4Uq.png",
    opts: {
      series: [ "SK", "RP" ],
      girl: true
    }
  },    
  {
    name: "Yumi Akechi",
    img: "N6XsCqd.png",
    opts: {
      series: [ "SC", "RP" ],
      agency: [ "KA" ],      
      girl: true
    }
  },  
  {
    name: "Felicia Mink",
    img: "BZre6GX.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },    
  {
    name: "Carolina Verus",
    img: "XjYBXVy.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },    
  {
    name: "Shouko Mitsubayashi",
    img: "LHG8sRG.png",
    opts: {
      series: [ "RP", "SK" ],
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
    name: "Sidney Lynch",
    img: "ba7W4Un.png",
    opts: {
      series: [ "OS" ],
      girl: true
    }
  },
  {
    name: "Mia Lynch",
    img: "5JAjn4N.png",
    opts: {
      series: [ "OS" ],
      girl: true
    }
  },
  {
    name: "Isabelle White",
    img: "S1yRjDs.png",
    opts: {
      series: [ "OS" ],
      girl: true
    }
  },
  {
    name: "Lili Kiraly",
    img: "xkzCQ4P.png",
    opts: {
      series: [ "OS" ],
      girl: true
    }
  },  
  {
    name: "Akira Kogure (Drowning Pool)",
    img: "wp1KrEP.png",
    opts: {
      series: [ "OS" ],
      girl: true
    }
  },  
  {
    name: "Suicide Taker",
    img: "3b3xEQZ.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Fisher Perry",
    img: "gCTlOdJ.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      boy: true
    }
  },  
  {
    name: "Close Combat Baby",
    img: "0MS21S1.png",
    opts: {
      series: [ "NC" ],
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
      series: [ "NC" ],
      notwiki: true,
      nb: true
    }
  },  
  {
    name: "Knifedick Deathfuck",
    img: "lhihumh.png",
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
