Phone Book Application (jQuery Mobile)
A lightweight, single-page mobile web application built with jQuery Mobile. This project simulates a native mobile experience with a centered viewport and smooth transitions between pages.

📱 Features
This application fulfills the core requirements for a contact management system:

Contact List: View all saved contacts with an integrated search/filter bar.

Add New Contact: Create new entries with name, phone number, and gender.

Contact Details: A dedicated view for each contact showing their profile and options.

Edit Functionality: Update existing contact information dynamically.

Delete with Confirmation: Remove contacts via a confirmation dialog to prevent accidental deletion.

Call Integration: Direct "Call" buttons that trigger the device's dialer using tel: links.

Form Validation: Basic validation to ensure required fields are filled before saving.

🛠 Tech Stack
HTML5: Semantic structure for multiple application pages.

CSS3: Custom styling for the "Mobile Frame" look, circular avatars, and layout positioning.

jQuery: Handling DOM manipulation and logic.

jQuery Mobile: Framework for the mobile UI components, transitions, and page routing.

📂 Project Structure
Plaintext

├── index.html   # Main structure containing all JQM pages and dialogs
├── style.css    # Custom styles for the mobile simulation and UI tweaks
├── pop.JS       # JavaScript logic for CRUD operations and page events
└── images/      # Local folder for contact profile pictures
🚀 How to Run
Download or clone the project repository.

Ensure you have a folder named images in the root directory containing your .jpg or .png assets.

Open index.html in any modern web browser.

To see the mobile view correctly on a PC, the CSS centers the application at a max-width of 400px.

📝 Lab Requirements Fulfilled
Multiple Pages / Dialogs

Form Validation

CRUD Operations (Create, Read, Update, Delete)

Call Option
