import React from "react";
import RangeSlider from "./RangeSlider";
import SearchOption from "./SelectOption";

import Button from "@mui/material/Button";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useState, useMemo } from "react";

function getYoutubeSubs(value) {
	switch (parseInt(value)) {
		case 0:
			return "0";
			break;
		case 10:
			return "2k";
			break;
		case 20:
			return "5k";
			break;
		case 30:
			return "10k";
			break;
		case 40:
			return "20k";
			break;
		case 50:
			return "50k";
			break;
		case 60:
			return "100k";
			break;
		case 70:
			return "200k";
			break;
		case 80:
			return "500k";
			break;
		case 90:
			return "1M";
			break;
		case 100:
			return "1M+";
			break;
	}
	return "0";
}

export default function Search() {
	const [value, setValue] = useState("");
	const options = useMemo(() => countryList().getData(), []);

	const changeHandler = (value) => {
		setValue(value);
		console.log(value);
	};

	const LangDict = [
		{ value: 0, label: "English" },
		{ value: 1, label: "Hindi" },
		{ value: 2, label: "Others" },
	];

	const Categories = [
		{ value: 0, label: "Entertainment" },
		{ value: 1, label: "Education" },
		{ value: 2, label: "Gaming" },
		{ value: 3, label: "Art" },
		{ value: 4, label: "Finiance" },
		{ value: 5, label: "Others" },
	];

    function getCategoryText(categoryInteger) {
        switch(categoryInteger){
            case 0: return "Entertainment";
            case 1: return "Education";
            case 2: return "Gaming";
            case 3: return "Art";
            case 4: return "Finiance";
            case 5: return "Others";
        }
    
    }
    const [influencerList, setInfluencerList] = useState([])
	const [country, setCountry] = React.useState("");
	const [subscribersRange, setSubscribersRange] = React.useState([20, 50]);
	const [moneyRange, setMoneyRange] = React.useState([20, 50]);
	const [language, setLanguage] = React.useState("Select Language");
	const [category, setCategory] = React.useState("Select Category");
	function getMoneyVal(value) {
		switch (parseInt(value)) {
			case 0:
				return 0;
				break;
			case 10:
				return 10;
				break;
			case 20:
				return 100;
				break;
			case 30:
				return 1000;
				break;
			case 40:
				return 2000;
				break;
			case 50:
				return 10000;
				break;
			case 60:
				return 50000;
				break;
			case 70:
				return 100000;
				break;
			case 80:
				return 200000;
				break;
			case 90:
				return 1000000;
				break;
			case 100:
				return 2000000;
				break;
		}
		return "0";
	}
	function getInfluencersList() {
		console.log("Getting influencers list");
		let url = `http://127.0.0.1:5000/influencers/${getMoneyVal(
			moneyRange[0]
		)}/${getMoneyVal(moneyRange[1])}/${getCategoryText(category)}`;
		console.log(url);
		try {
			fetch(url, {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
                    // setInfluencerList([
                    //     data.map(item=> {
                    //         return {
                    //         account_name: item.channel_name,
                    //         account_id: item.channel_id,
                    //         account_bio: item.description,
                    //         account_followers: getYoutubeSubs(item.subscriber_count),
                    //         account_posts: item.video_count,
                    //         cost: item.cost,
                    //         category: item.category,
                    //         comments: item.comment_count,
                    //         estimated_minutes_watched: item.view_count,
                    //         estimated_red_minutes_watched: item.view_count,
                    //         likes: item.like_count,
                    //         shares: item.share_count,
                    //         total_views: item.view_count,
                    //         channelId: item.channel_id
                    //     }
                    // }
                    // )
                    // ])
					console.log(data);
				});
		} catch (error) {
			console.error("Error:", error);
		}
	}

	return (
		<div className="border-r-2 min-h-screen">
			<h1 className="text-4xl font-bold text-center w-full py-8">Search</h1>
			<div className="pt-32 z-10 px-4">
				<div>
					<SearchOption
						label={"Language"}
						option={LangDict}
						val={language}
						changeVal={setLanguage}
					/>
				</div>
				<div>
					<SearchOption
						label={"Category"}
						option={Categories}
						val={category}
						changeVal={setCategory}
					/>
				</div>
				<div className="py-6">
					<h1>Number of subscribers</h1>
					<RangeSlider
						value={subscribersRange}
						setValue={setSubscribersRange}
						isSubscriber={true}
					/>
				</div>
				<div className="py-6">
					<h1>Cost per brand deal</h1>
					<RangeSlider
						value={moneyRange}
						setValue={setMoneyRange}
						isSubscriber={false}
					/>
				</div>
				<div className="h-96">
					<h2 className="text-gray-400">Select Country</h2>
					<Select
						options={options}
						value={value}
						onChange={changeHandler}
						style={{ zIndex: "25" }}
					/>
				</div>
			</div>
			<div className="flex">
				<Button variant="outlined" fullWidth onClick={getInfluencersList}>
					Search
				</Button>
			</div>
		</div>
	);
}
