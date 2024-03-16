import React, { useState } from "react";
import {
	TextField,
	Button,
	List,
	ListItem,
	ListItemText,
	Avatar,
} from "@mui/material";

const Chat = () => {
	const [messages, setMessages] = useState([
		{ id: 1, text: "Hello! Enter your query", sender: "bot" },
		// Add more messages as needed
	]);

	function addChat() {
		// Add a new message to the chat
		// setMessages([
		// 	...messages,
		// 	{ id: messages.length + 1, text: message, sender: "user" },
		// ]);
		sendChat();
	}
	function sendChat() {
		let url = "http://127.0.0.1:5000/categorize-prompt";
		try {
			fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ content: message }),
			})
				.then((response) => response.json())
				.then((data) => {
					setMessages([
						...messages,
						{ id: messages.length + 1, text: message, sender: "user" },
						{
							id: messages.length + 2,
							text: `Select influencers from ${data.category} category`,
							sender: "bot",
						},
					]);
				});
		} catch (error) {
			console.error("Error:", error);
		}
	}

	const [message, setMessage] = useState("");

	return (
		<div className="max-w-lg mx-auto p-4">
			<List className="divide-y divide-gray-200">
				{messages.map((message) => (
					<ListItem key={message.id}>
						<Avatar
							className={
								message.sender === "user" ? "bg-blue-500" : "bg-green-500"
							}
						>
							{message.sender === "user" ? "U" : "B"}
						</Avatar>
						<ListItemText
							primary={message.text}
							className={`ml-4 ${
								message.sender === "user" ? "text-right" : ""
							}`}
						/>
					</ListItem>
				))}
			</List>
			<div className="mt-4">
				<TextField
					label="Type your message..."
					variant="outlined"
					fullWidth
					size="small"
					className="mr-2"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<Button variant="contained" color="primary" onClick={addChat}>
					Send
				</Button>
			</div>
		</div>
	);
};

export default Chat;
