const { Schema, model } = require("mongoose");
const { validateCAS, validateEINECS} = require("../utils/validators");

const rawMaterialSchema = new Schema({
  identifier: {
    cas: {
      type: String,
      required: true,
      validate: {
        validator: validateCAS
      }
    },
    einecs: {
      type: String,
      required: false,
      validate: {
        validator: validateEINECS
      }
    },
    fema: {
      type: String,
      required: false
    },
    jecfa: {
      type: String,
      required: false
    },
    flavis: {
      type: String,
      required: false
    }
  },
  name: {
    common: {
      type: String,
      required: true
    },
    synonyms: {
      type: [String],
      required: false
    },
    botanical: {
      type: String,
      required: false
    }
  },
  class: {
    type: String,
    required: true,
    enum: ['natural', 'synthetic', 'natural synthetic']
  },
  type: {
    type: String,
    required: false,
    enum: [
      'Absolute',
      'Aroma Chemical',
      'Base',
      'Butter',
      'Carrier',
      'Concrete',
      'Dilutant',
      'Essential Oil',
      'Hydrosol',
      'Infusion',
      'Isolate',
      'Replacer',
      'Resin',
      'Solvent',
      'Tincture'
    ]
  },
  extraction: {
    method: {
      type: String,
      required: false,
      enum: [
        'Cold Pressing',
        'Enfleurage',
        'Hydrodistillation',
        'Infusion',
        'Isolation',
        'Solvent Extraction (Benzene)',
        'Solvent Extraction (C02 supercritical)',
        'Solvent Extraction (C02 subcritical)',
        'Solvent Extraction (Ethanol)',
        'Solvent Extraction (Hexane)',
        'Water Steam Distillation',
        'Tincturing',
        'Other'
      ]
    },
    partUsed: {
      type: String,
      required: false,
      enum: [
        'Bark',
        'Branches',
        'Bulbs',
        'Flowers',
        'Flowering Top',
        'Fruit',
        'Galls',
        'Gum',
        'Heartwood',
        'Lichen',
        'Leaves',
        'Moss',
        'Needles',
        'Peel',
        'Resin',
        'Rhizomes',
        'Roots',
        'Seeds',
        'Stems',
        'Twigs',
        'Wood',
        'Zest',
        'Other'
      ]
    },
    rectified: {
      type: Boolean,
      required: false
    }
  },
  chemicalProperties: {
    molecularFormula: {
      type: String,
      required: false
    },
    molecularWeight: {
      type: Number,
      required: false
    },
    appearance: {
      type: String,
      required: false
    },
    boilingPoint: {
      type: Number,
      required: false
    },
    meltingPoint: {
      type: Number,
      required: false
    },
    flashPoint: {
      type: Number,
      required: false
    },
    fusionPoint: {
      type: Number,
      required: false
    },
    density: {
      type: String,
      required: false
    },
    logP: {
      type: Number,
      required: false
    },
    detectionThreshold: {
      type: Number,
      required: false
    },
    solubility: {
      type: [String],
      required: false,
      enum: [
        "Ethanol",
        "Fixed Oils",
        "Propylene Glycol",
        "Water"
      ]
    }
  },
  olfactiveProperties: {
    family: {
      type: String,
      required: false,
      enum: [
        "Aldehydes",
        "Animalic",
        "Balsamic Ambery",
        "Burnt Leather",
        "Butyric Buttery",
        "Citrus",
        "Floral",
        "Fruity",
        "Green",
        "Herbal",
        "Marine",
        "Musky",
        "Spicy",
        "Sulfuric",
        "Undergrowth",
        "Woody",
        "Other"
      ]
    },
    descriptors: {
      type: [String],
      required: false,
      enum: [
        "agrestic",
        "aldehydic",
        "almondy",
        "ambergris",
        "ambery cistus",
        "ambery woods",
        "animalic",
        "anisic",
        "aquatic",
        "balsamic",
        "benzyl",
        "bergamot",
        "berries",
        "boozy",
        "burnt",
        "buttery",
        "butyric",
        "camphoric",
        "cedar",
        "cinnamic",
        "citrus",
        "coconut",
        "coniferous",
        "cool spices",
        "coumarinic",
        "crisp green",
        "cut grass",
        "dry woods",
        "earthy",
        "etheric",
        "eugenol",
        "fatty",
        "feacal",
        "fresh",
        "fresh flowers",
        "fresh woods",
        "floral",
        "foliage",
        "fruity",
        "geranium",
        "gourmant",
        "grapefruit",
        "grassy",
        "green",
        "green fruits",
        "herbal",
        "honeyed",
        "icy",
        "incense",
        "jasmine",
        "juicy fruits",
        "lactonic",
        "lavender",
        "leather",
        "light flowers",
        "mandarin",
        "marine",
        "medicinal",
        "metallic",
        "milky",
        "mineral",
        "minty",
        "mossy",
        "mushroom",
        "musky",
        "nutty",
        "oceanic",
        "orange",
        "orange blossom",
        "orris root",
        "ozonic",
        "peel",
        "plastic",
        "powdery",
        "powdery flowers",
        "roasted",
        "rosy",
        "saffron",
        "salicylic",
        "sandalwood",
        "smoky woods",
        "solar",
        "spicy",
        "sulfuric",
        "sweet",
        "tea",
        "terpenic",
        "tobacco",
        "tropical fruits",
        "vanillic",
        "vetiver",
        "violet flower",
        "warm spices",
        "warm woods",
        "woody",
        "waxy",
        "white flowers",
        "yellow fruits",
        "zesty",
        "other"
      ]
    },
    volatility: {
      type: [String],
      required: true,
      enum: [
        "head",
        "heart",
        "base"
      ]
    }
  },
  primaryConstituents: {
    byAmount: {
      type: [Schema.Types.ObjectId],
      ref: "RawMaterial",
      required: false
    },
    byOlfactiveImpact: {
      type: [Schema.Types.ObjectId],
      ref: "RawMaterial",
      required: false
    }
  },
  ifra: {
    isRestricted: {
      type: Boolean,
      required: false
    },
    restrictionType: {
      type: String,
      required: false,
      enum: [
        'Prohibition',
        'Restriction',
        'Specification'
      ]
    },
    restrictionCause: {
      type: String,
      required: false,
    },
    restrictionLimits: {
      category1: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category2: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category3: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category4: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category5: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category5a: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category5b: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category5c: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category5d: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category6: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category7a: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category7b: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category8: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category9: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category10a: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category10b: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category11a: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category11b: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      },
      category12: {
        isRestricted: {
          type: Boolean,
          default: false
        },
        limit: {
          type: Number,
          default: 0
        },
      }
    },
    amendment: {
      type: Number,
      required: false
    }
  }
})


module.exports = model("RawMaterial", rawMaterialSchema);