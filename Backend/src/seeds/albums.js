import mongoose from "mongoose";
import { Song } from "../models/songModel.js";
import { Album } from "../models/albumModel.js";
import { config } from "dotenv";

config();

const albumData = [
	// K-POP ALBUMLERİ
	{
		title: "BORN PINK",
		artist: "BLACKPINK",
		imageUrl: "/cover-images/1.jpg",
		releaseYear: 2022,
		genre: "K-Pop"
	},
	{
		title: "Map of the Soul: 7",
		artist: "BTS",
		imageUrl: "/cover-images/2.jpg",
		releaseYear: 2020,
		genre: "K-Pop"
	},
	{
		title: "The Album",
		artist: "BLACKPINK",
		imageUrl: "/cover-images/3.jpg",
		releaseYear: 2020,
		genre: "K-Pop"
	},
	{
		title: "BE",
		artist: "BTS",
		imageUrl: "/cover-images/4.jpg",
		releaseYear: 2020,
		genre: "K-Pop"
	},
	{
		title: "TWICEcoaster: LANE 1",
		artist: "TWICE",
		imageUrl: "/cover-images/5.jpg",
		releaseYear: 2016,
		genre: "K-Pop"
	},
	{
		title: "Feel Special",
		artist: "TWICE",
		imageUrl: "/cover-images/6.jpg",
		releaseYear: 2019,
		genre: "K-Pop"
	},
	{
		title: "Red Velvet - The Perfect Red Velvet",
		artist: "Red Velvet",
				imageUrl: "/cover-images/7.jpg",
		releaseYear: 2018,
		genre: "K-Pop"
	},
	{
		title: "Savage",
		artist: "aespa",
		imageUrl: "/cover-images/8.jpg",
		releaseYear: 2021,
		genre: "K-Pop"
	},
	// SENFONİK METAL ALBUMLERİ
	{
		title: "Nightwish - Once",
		artist: "Nightwish",
		imageUrl: "/cover-images/9.jpg",
		releaseYear: 2004,
		genre: "Symphonic Metal"
	},
	{
		title: "Imaginaerum",
		artist: "Nightwish",
		imageUrl: "/cover-images/10.jpg",
		releaseYear: 2011,
		genre: "Symphonic Metal"
	},
	{
		title: "Epica - The Divine Conspiracy",
		artist: "Epica",
		imageUrl: "/cover-images/11.jpg",
		releaseYear: 2007,
		genre: "Symphonic Metal"
	},
	{
		title: "The Quantum Enigma",
		artist: "Epica",
		imageUrl: "/cover-images/12.jpg",
		releaseYear: 2014,
		genre: "Symphonic Metal"
	},
	{
		title: "Within Temptation - The Heart of Everything",
		artist: "Within Temptation",
		imageUrl: "/cover-images/13.jpg",
		releaseYear: 2007,
		genre: "Symphonic Metal"
	},
	{
		title: "Hydra",
		artist: "Within Temptation",
		imageUrl: "/cover-images/14.jpg",
		releaseYear: 2014,
		genre: "Symphonic Metal"
	},
	// TÜRKÇE POP ALBUMLERİ
	{
		title: "Barış Manço - 2023",
		artist: "Barış Manço",
				imageUrl: "/cover-images/15.jpg",
		releaseYear: 1981,
		genre: "Turkish Pop"
	},
	{
		title: "Sezen Aksu - Gülümse",
		artist: "Sezen Aksu",
		imageUrl: "/cover-images/16.jpg",
		releaseYear: 1991,
		genre: "Turkish Pop"
	},
	{
		title: "Tarkan - Metamorfoz",
		artist: "Tarkan",
		imageUrl: "/cover-images/17.jpg",
		releaseYear: 2001,
		genre: "Turkish Pop"
	},
	{
		title: "Ajda Pekkan - Süperstar",
		artist: "Ajda Pekkan",
		imageUrl: "/cover-images/18.jpg",
		releaseYear: 1977,
		genre: "Turkish Pop"
	},
	{
		title: "MFÖ - Ele Güne Karşı",
		artist: "MFÖ",
		imageUrl: "/cover-images/1.jpg",
		releaseYear: 1984,
		genre: "Turkish Pop"
	},
	{
		title: "Yeni Türkü - Akdeniz",
		artist: "Yeni Türkü",
		imageUrl: "/cover-images/2.jpg",
		releaseYear: 1987,
		genre: "Turkish Pop"
	}
];

const songs = [
	// K-POP ŞARKILARI
	{
		title: "DDU-DU DDU-DU",
		artist: "BLACKPINK",
		imageUrl: "/cover-images/1.jpg",
		audioUrl: "/songs/1.mp3",
		duration: 3.31,
		albumIndex: 0,
		genre: "K-Pop"
	},
	{
		title: "BOOMBAYAH",
		artist: "BLACKPINK",
		imageUrl: "/cover-images/2.jpg",
		audioUrl: "/songs/2.mp3",
		duration: 4.00,
		albumIndex: 0,
		genre: "K-Pop"
	},
	{
		title: "As If It's Your Last",
		artist: "BLACKPINK",
		imageUrl: "/cover-images/3.jpg",
		audioUrl: "/songs/3.mp3",
		duration: 3.33,
		albumIndex: 0,
		genre: "K-Pop"
	},
	{
		title: "Dynamite",
		artist: "BTS",
				imageUrl: "/cover-images/4.jpg",
				audioUrl: "/songs/4.mp3",
		duration: 3.19,
		albumIndex: 1,
		genre: "K-Pop"
	},
	{
		title: "Butter",
		artist: "BTS",
		imageUrl: "/cover-images/5.jpg",
		audioUrl: "/songs/5.mp3",
		duration: 2.42,
		albumIndex: 1,
		genre: "K-Pop"
	},
	{
		title: "Boy With Luv",
		artist: "BTS",
		imageUrl: "/cover-images/6.jpg",
		audioUrl: "/songs/6.mp3",
		duration: 3.49,
		albumIndex: 1,
		genre: "K-Pop"
	},
	{
		title: "How You Like That",
		artist: "BLACKPINK",
		imageUrl: "/cover-images/7.jpg",
		audioUrl: "/songs/7.mp3",
		duration: 3.01,
		albumIndex: 2,
		genre: "K-Pop"
	},
	{
		title: "Ice Cream",
		artist: "BLACKPINK",
		imageUrl: "/cover-images/8.jpg",
		audioUrl: "/songs/8.mp3",
		duration: 2.56,
		albumIndex: 2,
		genre: "K-Pop"
	},
	{
		title: "Life Goes On",
		artist: "BTS",
				imageUrl: "/cover-images/9.jpg",
				audioUrl: "/songs/9.mp3",
		duration: 3.27,
		albumIndex: 3,
		genre: "K-Pop"
	},
	{
		title: "Stay",
		artist: "BTS",
		imageUrl: "/cover-images/10.jpg",
		audioUrl: "/songs/10.mp3",
		duration: 3.24,
		albumIndex: 3,
		genre: "K-Pop"
	},
	{
		title: "TT",
		artist: "TWICE",
		imageUrl: "/cover-images/11.jpg",
		audioUrl: "/songs/11.mp3",
		duration: 3.34,
		albumIndex: 4,
		genre: "K-Pop"
	},
	{
		title: "Cheer Up",
		artist: "TWICE",
		imageUrl: "/cover-images/12.jpg",
		audioUrl: "/songs/12.mp3",
		duration: 3.28,
		albumIndex: 4,
		genre: "K-Pop"
	},
	{
		title: "Feel Special",
		artist: "TWICE",
		imageUrl: "/cover-images/13.jpg",
		audioUrl: "/songs/13.mp3",
		duration: 3.26,
		albumIndex: 5,
		genre: "K-Pop"
	},
	{
		title: "Fancy",
		artist: "TWICE",
				imageUrl: "/cover-images/14.jpg",
				audioUrl: "/songs/14.mp3",
		duration: 3.33,
		albumIndex: 5,
		genre: "K-Pop"
	},
	{
		title: "Red Flavor",
		artist: "Red Velvet",
		imageUrl: "/cover-images/15.jpg",
		audioUrl: "/songs/15.mp3",
		duration: 3.11,
		albumIndex: 6,
		genre: "K-Pop"
	},
	{
		title: "Bad Boy",
		artist: "Red Velvet",
		imageUrl: "/cover-images/16.jpg",
		audioUrl: "/songs/16.mp3",
		duration: 3.30,
		albumIndex: 6,
		genre: "K-Pop"
	},
	{
		title: "Next Level",
		artist: "aespa",
				imageUrl: "/cover-images/17.jpg",
				audioUrl: "/songs/17.mp3",
		duration: 3.41,
		albumIndex: 7,
		genre: "K-Pop"
	},
	{
		title: "Savage",
		artist: "aespa",
		imageUrl: "/cover-images/18.jpg",
		audioUrl: "/songs/18.mp3",
		duration: 3.58,
		albumIndex: 7,
		genre: "K-Pop"
	},
	// SENFONİK METAL ŞARKILARI
	{
		title: "Nemo",
		artist: "Nightwish",
		imageUrl: "/cover-images/19.jpg",
		audioUrl: "/songs/19.mp3",
		duration: 4.36,
		albumIndex: 8,
		genre: "Symphonic Metal"
	},
	{
		title: "Wish I Had an Angel",
		artist: "Nightwish",
		imageUrl: "/cover-images/20.jpg",
		audioUrl: "/songs/20.mp3",
		duration: 4.06,
		albumIndex: 8,
		genre: "Symphonic Metal"
	},
	{
		title: "Storytime",
		artist: "Nightwish",
		imageUrl: "/cover-images/21.jpg",
		audioUrl: "/songs/21.mp3",
		duration: 5.22,
		albumIndex: 9,
		genre: "Symphonic Metal"
	},
	{
		title: "The Crow, the Owl and the Dove",
		artist: "Nightwish",
		imageUrl: "/cover-images/22.jpg",
		audioUrl: "/songs/22.mp3",
		duration: 4.48,
		albumIndex: 9,
		genre: "Symphonic Metal"
	},
	{
		title: "Chasing the Dragon",
		artist: "Epica",
		imageUrl: "/cover-images/23.jpg",
		audioUrl: "/songs/23.mp3",
		duration: 7.40,
		albumIndex: 10,
		genre: "Symphonic Metal"
	},
	{
		title: "The Obsessive Devotion",
		artist: "Epica",
		imageUrl: "/cover-images/24.jpg",
		audioUrl: "/songs/24.mp3",
		duration: 7.13,
		albumIndex: 10,
		genre: "Symphonic Metal"
	},
	{
		title: "Unchain Utopia",
		artist: "Epica",
		imageUrl: "/cover-images/25.jpg",
		audioUrl: "/songs/25.mp3",
		duration: 4.45,
		albumIndex: 11,
		genre: "Symphonic Metal"
	},
	{
		title: "The Second Stone",
		artist: "Epica",
		imageUrl: "/cover-images/26.jpg",
		audioUrl: "/songs/26.mp3",
		duration: 5.51,
		albumIndex: 11,
		genre: "Symphonic Metal"
	},
	{
		title: "What Have You Done",
		artist: "Within Temptation",
		imageUrl: "/cover-images/27.jpg",
		audioUrl: "/songs/27.mp3",
		duration: 5.13,
		albumIndex: 12,
		genre: "Symphonic Metal"
	},
	{
		title: "Our Solemn Hour",
		artist: "Within Temptation",
		imageUrl: "/cover-images/28.jpg",
		audioUrl: "/songs/28.mp3",
		duration: 4.17,
		albumIndex: 12,
		genre: "Symphonic Metal"
	},
	{
		title: "Paradise (What About Us?)",
		artist: "Within Temptation",
		imageUrl: "/cover-images/29.jpg",
		audioUrl: "/songs/29.mp3",
		duration: 5.20,
		albumIndex: 13,
		genre: "Symphonic Metal"
	},
	{
		title: "Dangerous",
		artist: "Within Temptation",
		imageUrl: "/cover-images/30.jpg",
		audioUrl: "/songs/30.mp3",
		duration: 4.52,
		albumIndex: 13,
		genre: "Symphonic Metal"
	},
	// TÜRKÇE POP ŞARKILARI
	{
		title: "Dağlar Dağlar",
		artist: "Barış Manço",
		imageUrl: "/cover-images/31.jpg",
		audioUrl: "/songs/31.mp3",
		duration: 4.15,
		albumIndex: 14,
		genre: "Turkish Pop"
	},
	{
		title: "Gül Pembe",
		artist: "Barış Manço",
		imageUrl: "/cover-images/32.jpg",
		audioUrl: "/songs/32.mp3",
		duration: 3.45,
		albumIndex: 14,
		genre: "Turkish Pop"
	},
	{
		title: "Gülümse",
		artist: "Sezen Aksu",
		imageUrl: "/cover-images/33.jpg",
		audioUrl: "/songs/33.mp3",
		duration: 3.52,
		albumIndex: 15,
		genre: "Turkish Pop"
	},
	{
		title: "Hadi Bakalım",
		artist: "Sezen Aksu",
		imageUrl: "/cover-images/34.jpg",
		audioUrl: "/songs/34.mp3",
		duration: 4.08,
		albumIndex: 15,
		genre: "Turkish Pop"
	},
	{
		title: "Şımarık",
		artist: "Tarkan",
		imageUrl: "/cover-images/35.jpg",
		audioUrl: "/songs/35.mp3",
		duration: 3.32,
		albumIndex: 16,
		genre: "Turkish Pop"
	},
	{
		title: "Kuzu Kuzu",
		artist: "Tarkan",
		imageUrl: "/cover-images/36.jpg",
		audioUrl: "/songs/36.mp3",
		duration: 4.15,
		albumIndex: 16,
		genre: "Turkish Pop"
	},
	{
		title: "Süperstar",
		artist: "Ajda Pekkan",
		imageUrl: "/cover-images/37.jpg",
		audioUrl: "/songs/37.mp3",
		duration: 3.28,
		albumIndex: 17,
		genre: "Turkish Pop"
	},
	{
		title: "Petrol",
		artist: "Ajda Pekkan",
		imageUrl: "/cover-images/38.jpg",
		audioUrl: "/songs/38.mp3",
		duration: 3.45,
		albumIndex: 17,
		genre: "Turkish Pop"
	},
	{
		title: "Ele Güne Karşı",
		artist: "MFÖ",
		imageUrl: "/cover-images/39.jpg",
		audioUrl: "/songs/39.mp3",
		duration: 4.22,
		albumIndex: 18,
		genre: "Turkish Pop"
	},
	{
		title: "Geldi Geçti",
		artist: "MFÖ",
		imageUrl: "/cover-images/40.jpg",
		audioUrl: "/songs/40.mp3",
		duration: 3.58,
		albumIndex: 18,
		genre: "Turkish Pop"
	},
	{
		title: "Akdeniz",
		artist: "Yeni Türkü",
		imageUrl: "/cover-images/41.jpg",
		audioUrl: "/songs/41.mp3",
		duration: 4.35,
		albumIndex: 19,
		genre: "Turkish Pop"
	},
	{
		title: "Halil İbrahim Sofrası",
		artist: "Yeni Türkü",
		imageUrl: "/cover-images/42.jpg",
		audioUrl: "/songs/42.mp3",
		duration: 3.47,
		albumIndex: 19,
		genre: "Turkish Pop"
	}
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
		console.log(`Added ${createdAlbums.length} albums and ${createdSongs.length} songs`);
	} catch (error) {
		console.error("Error seeding database:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedDatabase();