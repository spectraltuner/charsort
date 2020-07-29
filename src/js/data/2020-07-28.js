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
      { name: "Roleplays and etc.", tooltip: "Characters made for roleplays or for some other person's setting", key: "RP" },     
      { name: "Rafflesia", tooltip: "Rafflesia", key: "RN" }     
    ]
  },
 {
  name: 'Filter Losers Not on the Wiki',
  key: 'notwiki',
  tooltip: 'Check this to get the characters not on the wiki yet out of there.',
  checked: true
  }  
];

dataSet[dataSetVersion].characterData = [
   {
    name: "Minna Yamane",
    img: "kuM1zBQ.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "EQUINOX",
    img: "AJbXI4b.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Kyarne",
    img: "92JxBkP.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Anya Kimura",
    img: "uAGnMJT.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Enkh Khenbishiin",
    img: "Ao4FKEf.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Milky Way",
    img: "vp33NDQ.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Mariposa",
    img: "3Vz0Vrf.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Alice Kang (SOLSTICE)",
    img: "a6FIIqG.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Venus Kang",
    img: "IEniRrn.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Neptune",
    img: "9ZsujHY.png",
    opts: {
      series: [ "SC" ]
    }
  },  
  {
    name: "Sabrina Trenchard (Ceres)",
    img: "Mmgnyz5.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Instant",
    img: "pKtTaV4.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Kalaziel (Terror)",
    img: "qR8rLrg.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Warden",
    img: "XcYXVhN.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Langosta",
    img: "R0mabWt.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Deleter",
    img: "nh5yCGO.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Hanael (Observer)",
    img: "LxeuXeB.png",
    opts: {
      series: [ "SC" ]
    }
  }, 
  {
    name: "Harahel",
    img: "gIVffti.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Raziel",
    img: "N96ekTR.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Canace",
    img: "QQY4NxY.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Baphomet",
    img: "cLfQC3U.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Belphegor",
    img: "MA98fF2.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Metatron",
    img: "SrwQxHN.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Lucifer",
    img: "Vcd4Fo0.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Hexenn",
    img: "ayRlyPs.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Lamiet",
    img: "9YBTuIl.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  }, 
  {
    name: "Arista",
    img: "fN5wrFD.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Morsitans",
    img: "m3iYl4U.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Murmur",
    img: "TpsqFBk.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Beelzebub",
    img: "7n81hHu.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Azrael",
    img: "it9jzWs.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },  
  
  {
    name: "Mastema",
    img: "0KCKfO7.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Abaddon",
    img: "PLUhF85.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Uriel",
    img: "tIYGcfp.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Sariel",
    img: "OZ8LA4q.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Jophiel",
    img: "AktH9Js.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Gabriel",
    img: "K80sWZ1.png",
    opts: {
      series: [ "SC" ],
      notwiki: true
    }
  },
  {
    name: "Raphael",
    img: "2gJr08M.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Yaldabaoth",
    img: "SXrNNYO.png",
    opts: {
      series: [ "SC" ]
    }
  },

  {
    name: "Sophia",
    img: "fh0XvPt.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Synthesizer Logos",
    img: "DW4eEMx.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Logos Prime",
    img: "FJegplh.png",
    opts: {
      series: [ "SC" ]
    }
  },
  {
    name: "Iris Widow",
    img: "yjrvPwD.png",
    opts: {
      series: [ "BW" ]
    }
  },
  {
    name: "Sherry Watson",
    img: "R1TGVOx.png",
    opts: {
      series: [ "BW" ],
      notwiki: true
    }
  },
  {
    name: "Ivy Branwen",
    img: "phzxd54.png",
    opts: {
      series: [ "BW" ],
      notwiki: true
    }
  },
  {
    name: "Annis Doyle",
    img: "HeOut1S.png",
    opts: {
      series: [ "BW" ]
    }
  },
  {
    name: "Blake Corbet",
    img: "FBLka2q.png",
    opts: {
      series: [ "BW" ],
      notwiki: true
    }
  },
  {
    name: "Hanami Yako",
    img: "jNjZX24.png",
    opts: {
      series: [ "BW" ],
      notwiki: true
    }
  },
  {
    name: "Trespasser",
    img: "Ur1CCfC.png",
    opts: {
      series: [ "BW" ]
    }
  },
  
  {
    name: "Roxanne Royale",
    img: "6Frsmmh.png",
    opts: {
      series: [ "SK" ]
    }
  },
  {
    name: "Rachel Reiss",
    img: "rNBgOjx.png",
    opts: {
      series: [ "SK" ],
      notwiki: true
    }
  },
  {
    name: "Jack Leblanc",
    img: "4HCPHq3.png",
    opts: {
      series: [ "SK" ],
      notwiki: true
    }
  },
  {
    name: "Noelle Germaine",
    img: "F2DfRbe.png",
    opts: {
      series: [ "SK" ],
      notwiki: true
    }
  },
  {
    name: "Giselle Glamour",
    img: "cb6kOD1.png",
    opts: {
      series: [ "SK" ],
      notwiki: true
    }
  },
  {
    name: "The Ace of Spades",
    img: "OSHj8eD.png",
    opts: {
      series: [ "SK" ],
      notwiki: true
    }
  },
  {
    name: "Nemesis Cain",
    img: "YvDFd0z.png",
    opts: {
      series: [ "SM" ],
      notwiki: true
    }
  },
  {
    name: "Eris Strife",
    img: "vrokAWb.png",
    opts: {
      series: [ "SM" ],
      notwiki: true
    }
  },
  {
    name: "Momo",
    img: "08xvyoJ.png",
    opts: {
      series: [ "SM" ],
      notwiki: true
    }
  },
  {
    name: "Merche Ramón",
    img: "OG0v6Bm.png",
    opts: {
      series: [ "RP" ],
      notwiki: true
    }
  },
  {
    name: "Anastasia",
    img: "dhBl9qs.png",
    opts: {
      series: [ "RP" ],
      notwiki: true
    }
  },
  {
    name: "Sidney Lynch",
    img: "ba7W4Un.png",
    opts: {
      series: [ "RP" ]
    }
  },
  {
    name: "Mia Lynch",
    img: "5JAjn4N.png",
    opts: {
      series: [ "RP" ]
    }
  },
  {
    name: "Lili Kiraly",
    img: "xkzCQ4P.png",
    opts: {
      series: [ "RP" ]
    }
  },
  {
    name: "Rafflesia Nightingale",
    img: "LuFZaak.png",
    opts: {
      series: [ "RN" ],
      notwiki: true
    }
  }  
];
