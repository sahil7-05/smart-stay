const mongoose = require("mongoose");
const Listing = require("./models/listing");
const User = require("./models/user");
const Booking = require("./models/booking");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB for seeding");

    // Clear existing data
    await Listing.deleteMany({});
    await User.deleteMany({});
    await Booking.deleteMany({});

    // Create sample listings
    const sampleListings = [
      {
        title: "Cozy Beach House",
        description: "Beautiful beachfront property with stunning ocean views",
        price: 150,
        location: "Malibu",
        country: "USA",
        type: "stay",
        amenities: ["WiFi", "Kitchen", "Parking", "Ocean View"]
      },
      {
        title: "Mountain Cabin Retreat",
        description: "Secluded mountain cabin perfect for nature lovers",
        price: 120,
        location: "Aspen",
        country: "USA",
        type: "stay",
        amenities: ["Fireplace", "Hiking Trails", "Pet Friendly"]
      },
      {
        title: "Downtown Loft",
        description: "Modern loft in the heart of downtown",
        price: 200,
        location: "New York",
        country: "USA",
        type: "stay",
        amenities: ["WiFi", "Gym", "Rooftop Access"]
      }
    ];

    await Listing.insertMany(sampleListings);
    console.log("Sample data seeded successfully");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
