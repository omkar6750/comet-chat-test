import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
	UIKitSettingsBuilder,
	CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import { setupLocalization } from "./CometChat/utils/utils.ts";
import { CometChatProvider } from "./CometChat/context/CometChatContext";
import { StrictMode } from "react";

export const COMETCHAT_CONSTANTS = {
	APP_ID: "", // Replace with your App ID
	REGION: "in", // Replace with your App Region
	AUTH_KEY: "", // Replace with your Auth Key or leave blank if you are authenticating using Auth Token
};

const uiKitSettings = new UIKitSettingsBuilder()
	.setAppId(COMETCHAT_CONSTANTS.APP_ID)
	.setRegion(COMETCHAT_CONSTANTS.REGION)
	.setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
	.subscribePresenceForAllUsers()
	.build();

CometChatUIKit.init(uiKitSettings)?.then(() => {
	setupLocalization();

	const UID = ""; // Replace with your actual UID

	CometChatUIKit.getLoggedinUser().then((user: CometChat.User | null) => {
		if (!user) {
			CometChatUIKit.login(UID)
				.then((loggedUser: CometChat.User) => {
					console.log("Login Successful:", loggedUser);
					// Mount your app
					ReactDOM.createRoot(
						document.getElementById("root") as HTMLElement
					).render(
						<CometChatProvider>
							<App />
						</CometChatProvider>
					);
				})
				.catch((error) => console.error("Login Failed:", error));
		} else {
			// User already logged in, mount app directly
			console.log("User already logged in:", user);
			ReactDOM.createRoot(
				document.getElementById("root") as HTMLElement
			).render(
				<CometChatProvider>
					<App />
				</CometChatProvider>
			);
		}
	});
});
