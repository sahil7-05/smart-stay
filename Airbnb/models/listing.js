const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1749460396807-b065b6694f02?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1749460396807-b065b6694f02?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
  coordinates: {
    lat: {
      type: Number,
      required: false
    },
    lng: {
      type: Number,
      required: false
    }
  },
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    enum: ["stay", "experience", "restaurant"],
    default: "stay"
  },
  amenities: [String],
  purpose: {
    type: String,
    enum: ["parking", "night-stay", "permanent-rental", "godowns", "tuition-coaching", "shops-commercial", "co-working", "general"],
    default: "general"
  },
  availability: {
    startDate: Date,
    endDate: Date,
    available: {
      type: Boolean,
      default: true
    }
  },
  category: {
    type: String,
    enum: ["apartment", "house", "villa", "condo", "studio", "room", "office", "shop", "warehouse", "other"],
    default: "apartment"
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
