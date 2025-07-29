import mongoose from "mongoose";
import { Song } from "../models/songModel.js";
import { Album } from "../models/albumModel.js";
import { config } from "dotenv";

config();

const albumData = [
	{
		title: "Urban Nights",
		artist: "Various Artists",
		imageUrl: "/albums/1.jpg",
		releaseYear: 2024,
	},
	{
		title: "Coastal Dreaming",
		artist: "Various Artists",
		imageUrl: "/albums/2.jpg",
		releaseYear: 2024,
	},
	{
		title: "Midnight Sessions",
		artist: "Various Artists",
		imageUrl: "/albums/3.jpg",
		releaseYear: 2024,
	},
	{
		title: "Eastern Dreams",
		artist: "Various Artists",
		imageUrl: "/albums/4.jpg",
		releaseYear: 2024,
	},
];

const songs = [
	{
		title: "City Rain",
		artist: "Urban Echo",
		imageUrl: "/cover-images/7.jpg",
		audioUrl: "/songs/7.mp3",
		duration: 39,
		albumIndex: 0,
	},
	{
		title: "Neon Lights",
		artist: "Night Runners",
		imageUrl: "/cover-images/5.jpg",
		audioUrl: "/songs/5.mp3",
		duration: 36,
		albumIndex: 0,
	},
	{
		title: "Urban Jungle",
		artist: "City Lights",
		imageUrl: "/cover-images/15.jpg",
		audioUrl: "/songs/15.mp3",
		duration: 36,
		albumIndex: 0,
	},
	{
		title: "Neon Dreams",
		artist: "Cyber Pulse",
		imageUrl: "/cover-images/13.jpg",
		audioUrl: "/songs/13.mp3",
		duration: 39,
		albumIndex: 0,
	},
	{
		title: "Summer Daze",
		artist: "Coastal Kids",
		imageUrl: "/cover-images/4.jpg",
		audioUrl: "/songs/4.mp3",
		duration: 24,
		albumIndex: 1,
	},
	{
		title: "Ocean Waves",
		artist: "Coastal Drift",
		imageUrl: "/cover-images/9.jpg",
		audioUrl: "/songs/9.mp3",
		duration: 28,
		albumIndex: 1,
	},
	{
		title: "Crystal Rain",
		artist: "Echo Valley",
		imageUrl: "/cover-images/16.jpg",
		audioUrl: "/songs/16.mp3",
		duration: 39,
		albumIndex: 1,
	},
	{
		title: "Starlight",
		artist: "Luna Bay",
		imageUrl: "/cover-images/10.jpg",
		audioUrl: "/songs/10.mp3",
		duration: 30,
		albumIndex: 1,
	},
	{
		title: "Stay With Me",
		artist: "Sarah Mitchell",
		imageUrl: "/cover-images/1.jpg",
		audioUrl: "/songs/1.mp3",
		duration: 46,
		albumIndex: 2,
	},
	{
		title: "Midnight Drive",
		artist: "The Wanderers",
		imageUrl: "/cover-images/2.jpg",
		audioUrl: "/songs/2.mp3",
		duration: 41,
		albumIndex: 2,
	},
	{
		title: "Moonlight Dance",
		artist: "Silver Shadows",
		imageUrl: "/cover-images/14.jpg",
		audioUrl: "/songs/14.mp3",
		duration: 27,
		albumIndex: 2,
	},
	{
		title: "Lost in Tokyo",
		artist: "Electric Dreams",
		imageUrl: "/cover-images/3.jpg",
		audioUrl: "/songs/3.mp3",
		duration: 24,
		albumIndex: 3,
	},
	{
		title: "Neon Tokyo",
		artist: "Future Pulse",
		imageUrl: "/cover-images/17.jpg",
		audioUrl: "/songs/17.mp3",
		duration: 39,
		albumIndex: 3,
	},
	{
		title: "Purple Sunset",
		artist: "Dream Valley",
		imageUrl: "/cover-images/12.jpg",
		audioUrl: "/songs/12.mp3",
		duration: 17,
		albumIndex: 3,
	},
];

const seedDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);

		await Album.deleteMany({});
		await Song.deleteMany({});

		// Albümleri ekle
		const createdAlbums = await Album.insertMany(albumData);

		// Şarkıların her birine doğru albumId ekle
		const songsWithAlbumId = songs.map((song) => ({
			...song,
			albumId: createdAlbums[song.albumIndex]._id,
		}));

		// Şarkıları ekle
		const createdSongs = await Song.insertMany(songsWithAlbumId);

		// Albümlere şarkı id'lerini ekle
		for (let i = 0; i < createdAlbums.length; i++) {
			const albumSongs = createdSongs.filter((song) => song.albumId.equals(createdAlbums[i]._id));
			createdAlbums[i].songs = albumSongs.map((song) => song._id);
			await createdAlbums[i].save();
		}

		console.log("Database seeded successfully!");
	} catch (error) {
		console.error("Error seeding database:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedDatabase();