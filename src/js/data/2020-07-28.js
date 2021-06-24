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
      { name: "Suicide Kings", tooltip: "Local Tomboy Forced to Gamble Soul", key: "SK" },
      { name: "Sweet Malus", tooltip: "Gods Go on Road Trip, Catastrophe Ensues", key: "SM" },
      { name: "Roleplays and etc.", tooltip: "Characters made for roleplays or for some other setting", key: "RP" },     
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
      { name: "Bonus Round", tooltip: "Extra characters that don't really fit anywhere else here I guess", key: "BR" }
    ]
  },
 {
  name: 'Remove Irrelevant Characters',
  key: 'notwiki',
  tooltip: 'Check this to get the characters not on the wiki yet, or that are otherwise irrelevant to the FC/OC community, out of there.',
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
    img: "92JxBkP.png",
    opts: {
      series: [ "SC" ],
      agency: [ "SC" ],     
      girl: true
    }
  },
  {
    name: "Ángeles Reyes",
    img: "uBz2Lhq.png",
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
    img: "vp33NDQ.png",
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
      nb: true
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
    name: "Warden",
    img: "XcYXVhN.png",
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
    img: "QQY4NxY.png",
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
    img: "5ddALba.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
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
    name: "Arista",
    img: "fN5wrFD.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Morsitans",
    img: "m3iYl4U.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      notwiki: true,
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
    img: "7n81hHu.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC" ],      
      girl: true
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
    img: "tIYGcfp.png",
    opts: {
      series: [ "SC" ],
      agency: [ "HC", "FC" ],      
      girl: true
    }
  },
  {
    name: "Sariel",
    img: "OZ8LA4q.png",
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
    img: "2gJr08M.png",
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
    img: "PAf6RMc.png",
    opts: {
      series: [ "SC" ],
      agency: [ "FC" ],      
      notwiki: true,
      nb: true
    }
  },    
  {
    name: "Logos (Seeker)",
    img: "LiZH1rX.png",
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
    name: "Roxanne Royale",
    img: "DyMUEpR.png",
    opts: {
      series: [ "SK" ],
      girl: true
    }
  },
  {
    name: "Rachel Reiss",
    img: "lDpShM8.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      girl: true
    }
  },
  {
    name: "Jack Leblanc",
    img: "4HCPHq3.png",
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
    img: "OSHj8eD.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      nb: true
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
    name: "Guy Royale",
    img: "tpscL6g.png",
    opts: {
      series: [ "SK" ],
      notwiki: true,
      boy: true
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
      series: [ "RP" ],
      girl: true
    }
  },
  {
    name: "Anastasia Friede Ende",
    img: "orUwyaM.png",
    opts: {
      series: [ "RP" ],
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
    name: "Sidney Lynch",
    img: "ba7W4Un.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },
  {
    name: "Mia Lynch",
    img: "5JAjn4N.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },
  {
    name: "Isabelle White",
    img: "S1yRjDs.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },
  {
    name: "Lili Kiraly",
    img: "xkzCQ4P.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },  
  {
    name: "Akira Kogure (Drowning Pool)",
    img: "wp1KrEP.png",
    opts: {
      series: [ "RP" ],
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
    name: "Anglermouth",
    img: "8eXEb12.png",
    opts: {
      series: [ "NC" ],
      notwiki: true,
      nb: true
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
    img: "LuFZaak.png",
    opts: {
      series: [ "RN" ],
      notwiki: true,
      girl: true
    }
  }
];
