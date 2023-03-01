const { Schema, model } = require("mongoose");
const { validateCAS, validateEC} = require("../utils/validators");

const rawMaterialSchema = new Schema({
  cas: {
    type: String,
    required: true,
    validate: {
      validator: validateCAS
    }
  },
  ec: {
    type: String,
    required: true,
    validate: {
      validator: validateEC
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
  molecularFormula: {
    type: String,
    required: false
  },
  appearance: {
    type: String,
    required: false,
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
        "citric",
        "coconut",
        "coniferous",
        "cool spices",
        "coumarinic",
        "crisp green",
        "cut grass",
        "dry woods",
        "earthy",
        "etheric solvent",
        "eugenol",
        "fatty",
        "feacal",
        "fresh flowers",
        "fresh woods",
        "geranium",
        "gourmant",
        "grapefruit",
        "grassy",
        "green",
        "green fruits",
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
        "tea",
        "terpenic",
        "tobacco",
        "tropical fruits",
        "vanillic",
        "vetiver",
        "violet flower",
        "warm spices",
        "warm woods",
        "waxy",
        "white flowers",
        "yellow fruits",
        "zesty",
        "other"
      ]
    }
  },
  primaryConstituents: {
    byAmount: {
      type: Schema.Types.ObjectId,
      ref: "RawMaterial"
    },
    byOlfactiveImpact: {
      type: Schema.Types.ObjectId,
      ref: "RawMaterial"
    }
  }
})


module.exports = model("RawMaterial", rawMaterialSchema);