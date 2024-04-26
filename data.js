var APP_DATA = {
  "scenes": [
    {
      "id": "0-rdc-hall",
      "name": "RDC Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.13138625684466732,
        "pitch": 0.038129026584307724,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": 2.0217295500805212,
          "pitch": 0.011893108994096124,
          "rotation": 0,
          "target": "1-rdc-restaurant"
        },
        {
          "yaw": 1.4183087333592628,
          "pitch": -0.1570259716729261,
          "rotation": 0,
          "target": "8-r1-palier"
        },
        {
          "yaw": 0.9509750328305842,
          "pitch": 0.06449452146737045,
          "rotation": 6.283185307179586,
          "target": "6-cinema-bas"
        },
        {
          "yaw": -0.7724473023748732,
          "pitch": 0.08392105808413497,
          "rotation": 0,
          "target": "3-grande-salle-fosse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-rdc-restaurant",
      "name": "RDC Restaurant",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.116719010725074,
        "pitch": 0.031020857372833888,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": 2.2743632975264365,
          "pitch": 0.0718100752247679,
          "rotation": 0,
          "target": "0-rdc-hall"
        },
        {
          "yaw": -2.721937517804328,
          "pitch": 0.053744423548319986,
          "rotation": 0,
          "target": "6-cinema-bas"
        },
        {
          "yaw": -1.9969207028406046,
          "pitch": 0.06688782055299747,
          "rotation": 0,
          "target": "3-grande-salle-fosse"
        },
        {
          "yaw": -2.0405554059723805,
          "pitch": -0.6941003576356621,
          "rotation": 0,
          "target": "8-r1-palier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-grande-salle-plateau",
      "name": "Grande Salle Plateau",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.018174920732299427,
        "pitch": 0.03282065571043802,
        "fov": 1.3100911737748393
      },
      "linkHotspots": [
        {
          "yaw": -0.023586746138381187,
          "pitch": 0.08082604511616509,
          "rotation": 0,
          "target": "3-grande-salle-fosse"
        },
        {
          "yaw": -0.02958484608119427,
          "pitch": -0.18172375601981017,
          "rotation": 0,
          "target": "4-grande-salle-regie-gradin"
        },
        {
          "yaw": 0.4792321943271354,
          "pitch": 0.029009604039925918,
          "rotation": 0,
          "target": "0-rdc-hall"
        },
        {
          "yaw": -0.47407786616422953,
          "pitch": 0.03473013377777079,
          "rotation": 0,
          "target": "0-rdc-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.014493989067496216,
          "pitch": 0.5342663619250008,
          "title": "Surface",
          "text": "Surface utile plateau : 16m x 10m<br><br>Surface totale plateau : 20m x 11m (espace stockage compris)"
        }
      ]
    },
    {
      "id": "3-grande-salle-fosse",
      "name": "Grande Salle Fosse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.04112353043577244,
        "pitch": -0.2058844674457312,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": -0.07109737964918317,
          "pitch": -0.15285572854244478,
          "rotation": 0,
          "target": "2-grande-salle-plateau"
        },
        {
          "yaw": 2.0913499769149446,
          "pitch": 0.003857228535082413,
          "rotation": 0,
          "target": "0-rdc-hall"
        },
        {
          "yaw": -2.1512228039774985,
          "pitch": 0.011601104558563335,
          "rotation": 0,
          "target": "0-rdc-hall"
        },
        {
          "yaw": 3.1189370750547685,
          "pitch": -0.4708324888954998,
          "rotation": 0,
          "target": "4-grande-salle-regie-gradin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.04699476619516041,
          "pitch": 0.30070771994274637,
          "title": "Jauge",
          "text": "738 personnes debout (hors régie)"
        }
      ]
    },
    {
      "id": "4-grande-salle-regie-gradin",
      "name": "Grande Salle Regie Gradin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02133180196882023,
          "pitch": 0.15251921541640812,
          "rotation": 0,
          "target": "2-grande-salle-plateau"
        },
        {
          "yaw": -3.117041066880528,
          "pitch": -0.4010655893075139,
          "rotation": 0,
          "target": "5-grande-salle-gradins"
        },
        {
          "yaw": 2.486147792729774,
          "pitch": -0.34053525560224074,
          "rotation": 0,
          "target": "19-r2-galerie"
        },
        {
          "yaw": -2.514074727855485,
          "pitch": -0.327728380398586,
          "rotation": 0,
          "target": "19-r2-galerie"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.108342886579411,
          "pitch": 0.3533321079524736,
          "title": "Jauge gradin haut",
          "text": "392 places assises"
        }
      ]
    },
    {
      "id": "5-grande-salle-gradins",
      "name": "Grande Salle Gradins",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.006401100815285332,
          "pitch": 0.5420728233403693,
          "rotation": 0,
          "target": "4-grande-salle-regie-gradin"
        },
        {
          "yaw": -0.019906984043251086,
          "pitch": 0.23987023800057905,
          "rotation": 0,
          "target": "2-grande-salle-plateau"
        },
        {
          "yaw": 1.691365265238007,
          "pitch": 0.017512856642095898,
          "rotation": 0,
          "target": "19-r2-galerie"
        },
        {
          "yaw": -1.7185628832501543,
          "pitch": 0.028848224031639447,
          "rotation": 0,
          "target": "19-r2-galerie"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.04113062859713068,
          "pitch": 0.8806585265212696,
          "title": "Jauge gradin haut",
          "text": "392 places assises&nbsp;"
        }
      ]
    },
    {
      "id": "6-cinema-bas",
      "name": "Cinema Bas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.006414914984214093,
          "pitch": -0.17150009100110708,
          "rotation": 0,
          "target": "7-cinema-haut"
        },
        {
          "yaw": -1.3918198661570198,
          "pitch": 0.07094224313713582,
          "rotation": 0,
          "target": "0-rdc-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6117496869355143,
          "pitch": -0.021761578698724193,
          "title": "Capacité",
          "text": "143 places + 4 PMR"
        }
      ]
    },
    {
      "id": "7-cinema-haut",
      "name": "Cinema Haut",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0000014854235814709682,
          "pitch": 0.1963044884730447,
          "rotation": 0,
          "target": "6-cinema-bas"
        },
        {
          "yaw": 0.5163521733471743,
          "pitch": 0.1166200835343929,
          "rotation": 0,
          "target": "0-rdc-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8015407178442082,
          "pitch": 0.10006594518812406,
          "title": "Capacité",
          "text": "143 places + 4 PMR"
        }
      ]
    },
    {
      "id": "8-r1-palier",
      "name": "R+1 Palier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.251682927418841,
          "pitch": 0.22666795355704394,
          "rotation": 0,
          "target": "0-rdc-hall"
        },
        {
          "yaw": -0.6381610372105797,
          "pitch": -0.3564704208946452,
          "rotation": 0,
          "target": "19-r2-galerie"
        },
        {
          "yaw": 1.0966714787761465,
          "pitch": 0.14922161800841138,
          "rotation": 0,
          "target": "9-r1-entre-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-r1-entre-couloir",
      "name": "R+1 Entrée Couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7904054514371737,
          "pitch": 0.16053771479882428,
          "rotation": 0,
          "target": "8-r1-palier"
        },
        {
          "yaw": -2.6903300552990075,
          "pitch": 0.1459153973203371,
          "rotation": 0,
          "target": "17-r1-arcade"
        },
        {
          "yaw": 0.21800981622640592,
          "pitch": 0.1812007295434963,
          "rotation": 0,
          "target": "18-r1-pixellab"
        },
        {
          "yaw": -0.6395048284158484,
          "pitch": 0.1317901072183485,
          "rotation": 0,
          "target": "10-r1-couloir-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-r1-couloir-1",
      "name": "R+1 Couloir-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1188119695709364,
          "pitch": 0.20095426176925635,
          "rotation": 0,
          "target": "9-r1-entre-couloir"
        },
        {
          "yaw": 1.611481929896052,
          "pitch": 0.19678918818085478,
          "rotation": 0,
          "target": "16-r1-ecole"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-r1-couloir-2",
      "name": "R+1 Couloir-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.261280403477942,
          "pitch": 0.17916002707176304,
          "rotation": 0,
          "target": "10-r1-couloir-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-r1-couloir-3",
      "name": "R+1 Couloir-3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.250911623049884,
          "pitch": 0.23440824188350184,
          "rotation": 0,
          "target": "11-r1-couloir-2"
        },
        {
          "yaw": 0.8541199491010047,
          "pitch": 0.25350412270848643,
          "rotation": 0,
          "target": "15-r1-wavelab"
        },
        {
          "yaw": -0.7696336353075335,
          "pitch": 0.3355548448744017,
          "rotation": 0,
          "target": "13-r1-couloir-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-r1-couloir-4",
      "name": "R+1 Couloir-4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6752944235278662,
          "pitch": 0.1791624292562961,
          "rotation": 0,
          "target": "14-r1-cabine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-r1-cabine",
      "name": "R+1 Cabine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.066812471996304,
          "pitch": 0.11161021885897959,
          "rotation": 0,
          "target": "13-r1-couloir-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-r1-wavelab",
      "name": "R+1 WaveLab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.984325254839421,
          "pitch": 0.2605632907047841,
          "rotation": 0,
          "target": "12-r1-couloir-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-r1-ecole",
      "name": "R+1 Ecole",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2536705592436732,
          "pitch": 0.20357620034055657,
          "rotation": 0,
          "target": "10-r1-couloir-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-r1-arcade",
      "name": "R+1 Arcade",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.488749423082936,
          "pitch": 0.06810502090344173,
          "rotation": 0,
          "target": "9-r1-entre-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-r1-pixellab",
      "name": "R+1 PixelLab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.725575611339293,
          "pitch": -0.0013724035369886423,
          "rotation": 0,
          "target": "9-r1-entre-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-r2-galerie",
      "name": "R+2 Galerie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11536146537360281,
          "pitch": 0.024584363419762667,
          "rotation": 0,
          "target": "8-r1-palier"
        },
        {
          "yaw": 3.043921431867785,
          "pitch": 0.16360925659753534,
          "rotation": 0,
          "target": "5-grande-salle-gradins"
        },
        {
          "yaw": -2.294252257460851,
          "pitch": 0.10548493313275742,
          "rotation": 0,
          "target": "24-r2-couloir-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-r2-cantine",
      "name": "R+2 Cantine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7582542330543056,
          "pitch": 0.08079147117904739,
          "rotation": 0,
          "target": "24-r2-couloir-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-r2-loge-aubrives",
      "name": "R+2 Loge Aubrives",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.175407987508299,
          "pitch": 0.1424192659435679,
          "rotation": 0,
          "target": "26-r2-couloir-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-r2-loge-micheville",
      "name": "R+2 Loge Micheville",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.690935250728824,
          "pitch": 0.4101084663212049,
          "rotation": 0,
          "target": "26-r2-couloir-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-r2-loge-arbed",
      "name": "R+2 Loge Arbed",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "24-r2-couloir-1",
      "name": "R+2 Couloir-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0200960235681986,
          "pitch": 0.2614195465347713,
          "rotation": 0,
          "target": "20-r2-cantine"
        },
        {
          "yaw": -0.9299712097532229,
          "pitch": 0.04412901357180843,
          "rotation": 0,
          "target": "19-r2-galerie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-r2-couloir-2",
      "name": "R+2 Couloir-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1350090054224253,
          "pitch": 0.08023589638570705,
          "rotation": 0,
          "target": "24-r2-couloir-1"
        },
        {
          "yaw": -0.9351963287901945,
          "pitch": 0.347329421772514,
          "rotation": 0,
          "target": "26-r2-couloir-3"
        },
        {
          "yaw": 1.630942828538875,
          "pitch": 0.06517233075708262,
          "rotation": 0,
          "target": "23-r2-loge-arbed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-r2-couloir-3",
      "name": "R+2 Couloir-3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.139955574088516,
          "pitch": 0.3534940608720092,
          "rotation": 0,
          "target": "21-r2-loge-aubrives"
        },
        {
          "yaw": -1.1692298844495745,
          "pitch": 0.14947234501935824,
          "rotation": 0,
          "target": "22-r2-loge-micheville"
        },
        {
          "yaw": -0.892348522697004,
          "pitch": 0.168285322257951,
          "rotation": 0,
          "target": "25-r2-couloir-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "L'Arche Visite ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
