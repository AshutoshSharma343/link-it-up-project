import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import InfluencerCard from "./InfluencerCard";

const AccountLists = [
	{
		account_name: "Remy Sharp",
		account_id: "techexplorers",
		account_bio: "I'll be in your neighborhood doing errands this…",
		account_followers: "30k",
		account_posts: 100,
		cost: 10000,
		category: "Fashion",
		comments: 100,
		estimated_minutes_watched: 12000,
		estimated_red_minutes_watched: 2000,
		likes: 1000,
		shares: 100,
		total_views: 100003,
		channelId: "UCJbPGzawDH1nqbqV-D5HqKw",
	},
	{
		account_name: "Remy Sharp",
		account_id: "techexplorers",
		account_bio: "I'll be in your neighborhood doing errands this…",
		account_followers: "30k",
		account_posts: 100,
		cost: 10000,
		category: "Fashion",
		comments: 100,
		estimated_minutes_watched: 12000,
		estimated_red_minutes_watched: 2000,
		likes: 1000,
		shares: 100,
		total_views: 100003,
		channelId: "UCJbPGzawDH1njaqV-D5HqKw",
	},
	{
		account_name: "Remy Sharp",
		account_id: "techexplorers",
		account_bio: "I'll be in your neighborhood doing errands this…",
		account_followers: "30k",
		account_posts: 100,
		cost: 10000,
		category: "Fashion",
		comments: 100,
		estimated_minutes_watched: 12000,
		estimated_red_minutes_watched: 2000,
		likes: 1000,
		shares: 100,
		total_views: 100003,
		channelId: "UCJbPGzasDH1njbqV-D5HqKw",
	},
];

export default function SearchResults({ searchResults}) {
	return (
		<List sx={{ width: "100%", maxWidth: 960, bgcolor: "background.paper" }}>
			{AccountLists.map((account) => {
				return (
					<>
						<InfluencerCard
							key={account.channelId}
							account_name={account.account_name}
							account_id={account.account_id}
							account_bio={account.account_bio}
							account_followers={account.account_followers}
							account_posts={account.account_posts}
							cost={`\u20B9 ${account.cost}`}
						/>
						<Divider variant="inset" component="li" />
					</>
				);
			})}
		</List>
	);
}
