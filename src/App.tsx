import { useEffect, useState } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import CometChatApp from "./CometChat/CometChatApp";
const App = () => {
	const [selectedUser, setSelectedUser] = useState<
		CometChat.User | undefined
	>(undefined);
	const [selectedGroup, setSelectedGroup] = useState<
		CometChat.Group | undefined
	>(undefined);
	useEffect(() => {
		const UID = ""; // Replace with your User ID
		CometChat.getUser(UID).then(setSelectedUser).catch(console.error);
		// const GUID = "cometchat-guid-1"; // Replace with your Group ID
		// CometChat.getGroup(GUID).then(setSelectedGroup).catch(console.error);
	}, []);
	return (
		/* CometChatApp requires a parent with explicit height & width to render correctly.
      Adjust the height and width as needed.
     */
		<div style={{ width: "100vw", height: "100vh" }}>
			<CometChatApp user={selectedUser} group={selectedGroup} />
		</div>
	);
};
export default App;
