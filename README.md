# CometChat UI Kit Implementation (React + Vite)

**Submitted by:** Omkar Santosh Pawar  
**Tech Stack:** React, Vite, TailwindCSS  
**Context:** CometChat Internship Task

This repository contains the implementation of the CometChat UI Kit. Below is a detailed documentation of the functional bugs, UX friction points, and improvement areas found during the development and testing phase on `localhost`.

---

## 🛠 Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone [your-repo-link]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the application:**
    ```bash
    npm run dev
    ```

---

## 🚩 Implementation Findings & Bug Report

The following issues were observed while running the UI Kit in a local React environment.

### 1. Messaging Interface Issues

#### 1.1 Delete Button UX & Padding

**Observation:** The delete button appears immediately on hover, which leads to accidental clicks. Additionally, the padding around the icon is uneven/uncentered, creating a visual imbalance.
**Expected:** The delete action should be nested (Menu > Delete > Confirm) to prevent accidents, and padding should be uniform.

![alt text](<Screenshot 2025-11-28 140509.png>)

> **Suggestion:** Move "Delete" to a three-dot menu dropdown and add a confirmation modal. Center the icon alignment.

#### 1.2 Attachment Popup Spacing

**Observation:** The attachment menu has excessive padding (approx. 16px), making the pop-up unnecessarily large. Also, "Image" and "Video" are separated into two distinct buttons, cluttering the list.
**Expected:** A compact menu with grouped media options.

![Screenshot: Attachment popup spacing](<Screenshot 2025-11-28 143454.png>)

> **Suggestion:** Reduce padding to 5-8px and merge "Image" and "Video" into a single "Gallery/Media" option.

#### 1.3 Real-time Read Receipts (Self-Message)

**Observation:** When sending a message to oneself, the read receipt ticks do not update to "Sent/Delivered/Read" immediately. They remain in a pending state until a refresh or re-fetch occurs.
**Expected:** Immediate state update via socket events.

![Screenshot: Read receipts not updating](<Screenshot 2025-11-30 191342.png>)

> **Suggestion:** Ensure the local state updates optimistically or listens specifically for self-chat socket events.

#### 1.4 Sticky Time Floater

**Observation:** The date/time floating header remains stuck to the top of the chat window permanently, obstructing the view of older messages.
**Expected:** It should only appear dynamically while scrolling and fade out when stationary.

![Screenshot: Sticky time floater obstructing view](<Screenshot 2025-11-28 142721.png>)

> **Suggestion:** Implement scroll-event listeners to toggle the visibility of the timestamp header.

---

### 2. Calling Experience (Voice & Video)

#### 2.1 "Ghost Call" Loop (Rejoining Bug)

**Observation:** If a user closes the browser tab during an active group video call, the call remains active in the group chat.
**Expected:** The session should terminate upon tab closure and no id no users are in the call,

![alt text](<Screenshot 2025-11-30 192109.png>)

> **Suggestion:** Implement a heartbeat check to kill user sessions on disconnect.

#### 2.2 Missing Cancel Button (Group Calls)

**Observation:** When initiating a group call, there is no "Cancel" or "Hang up" button available during the dialing phase.
**Expected:** A clear red "End/Cancel" button to stop the call before anyone picks up.

![alt text](<Screenshot 2025-11-30 203503.png>)

> **Suggestion:** Add the standard "End Call" button to the group dialing interface.

#### 2.3 Confusing Terminology ("Unmute Video")

**Observation:** The button to turn on the camera is labeled "Unmute Video." In standard UX, "Mute" refers to Audio, while Video is usually "Start/Stop" or "Camera On/Off."
**Expected:** Clearer labeling.
![alt text](<Screenshot 2025-11-30 192002.png>)

> **Suggestion:** Rename to "Turn Camera On" or "Start Video."

#### 2.4 Call Loading UI

**Observation:** The "Connecting..." screen is static and lacks visual feedback, making it unclear if the call is actually proceeding.
**Expected:** An animation (pulse/ripple) around the avatar.

![alt text](<Screenshot 2025-11-30 203222.png>)

> **Suggestion:** Add a pulse animation to the profile picture during the connection phase.

#### 2.5 Lack of Post-Call Feedback

**Observation:** When a video call ends, the window simply closes. There is no summary of the call duration or a quality feedback prompt.
**Expected:** A small summary toast or modal (e.g., "Call ended: 5m 23s").

![alt text](<Screenshot 2025-11-30 191139.png>)

> **Suggestion:** Display a brief call summary log in the chat thread or a toast notification.
