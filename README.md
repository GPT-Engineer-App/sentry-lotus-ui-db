# sentry-lotus-ui-db

### Detailed Prompt for GPT Engineer to Create Lotus Sentry Security Corp Website UI and Database

#### Project Description:
Create a comprehensive website UI and backend database for Lotus Sentry Security Corp. The platform will allow users to explore real estate tokenization, manage investments, participate in DAO governance, and engage in NFT marketplaces. The system will integrate with various APIs for property data and support both user and admin functionalities.

### Color Scheme:
- Primary Colors: Deep Purple (#5D3FD3), Black (#000000)
- Accent Colors: Gold (#FFD700), White (#FFFFFF)

### Pages and Layout:

#### Home Page:
- **Header:**
  - Company logo on the left in gold.
  - Center-aligned navigation menu with deep purple text on white. Menu items: Home, About Us, How It Works, Features, Investment Opportunities, Market Insights, Community, Contact Us, Login/Sign Up, Wallet Connect.
- **Hero Section:**
  - Bold tagline in deep purple, concise description in black.
  - Call-to-action buttons "Get Started" and "Learn More" with white text on deep purple and gold hover effect.
- **Features Section:**
  - Grid layout with modern, minimalist gold icons and black text descriptions.
- **How It Works Section:**
  - Simplified illustrations in deep purple and gold, text in black on white.
- **Testimonials Section:**
  - User photos in circular frames with deep purple borders, black text.
- **Footer:**
  - Contact info in black on white, gold social media icons, newsletter signup in deep purple with white text.

#### Login/Sign Up Page:
- **Login Form:**
  - Clean lines, deep purple borders, black text. Buttons with deep purple background, white text, gold hover effect. "Forgot Password" link in deep purple.
- **Sign Up Form:**
  - Fields with deep purple borders and black text, "Sign Up" button matching login button.
- **Social Login Options:**
  - Gold background buttons with black text and minimalist icons.
- **Wallet Connect:**
  - Button to connect Solana wallet (e.g., Phantom) with deep purple background, gold text, white icon.

#### User Dashboard Page:
- **Header:**
  - Logo left-aligned in gold, right-aligned navigation with deep purple text on white. Menu items: Dashboard, Profile, Assets, DAO, Logout.
- **Dashboard Overview:**
  - Card-based layout with gold accents and deep purple text summarizing assets, balance, and recent activity.
- **Assets Section:**
  - Table format with deep purple headers and gold highlights, clear black text.
- **Balance Section:**
  - Pie charts or bar graphs in deep purple and gold for total balance and token breakdown.
- **DAO Interaction Section:**
  - View and participate in proposals, vote on issues, governance activities with interactive elements in deep purple and gold.

#### Admin Dashboard Page:
- **Upload Auction List:**
  - Button to "Upload Excel File" in deep purple with gold text, clean layout for file uploading and parsing.
- **Parsed Data Display:**
  - Table format with deep purple headers and gold highlights. Columns: parcel number, property address, lien amount, assessed value, market value.
- **Investment Analysis:**
  - Results using GIS, Zillow, Google data with interactive graphs and charts in deep purple and gold.
- **Company Treasury:**
  - Modern graphical representation of current treasury balance in deep purple and gold, investment recommendations highlighted in gold.

#### About Us Page:
- **Mission and Vision:**
  - Black text on white with deep purple accents outlining goals and purpose.
- **Team:**
  - Circular photos with gold borders, deep purple text for key team members' bios.
- **Business Model:**
  - Explanation of revenue model and competitive advantage in a minimalist layout with gold highlights.

#### How It Works Page:
- **Tokenization Process:**
  - Step-by-step guide with illustrations in deep purple and gold, black text on white.
- **Blockchain and AI Integration:**
  - Diagrams in deep purple and gold explaining the tech backbone, text in black on white.
- **Security Measures:**
  - Info on protocols and legal compliance with gold accents.

#### Features Page:
- **Detailed Descriptions:**
  - Each core feature explained in depth with deep purple text and gold highlights.
- **User Benefits:**
  - Clear, concise black text on how features benefit users.
- **Visual Aids:**
  - Infographics and charts with deep purple and gold accents.

#### Investment Opportunities Page:
- **Current Listings:**
  - Tokenized assets in a clean layout with deep purple headers and gold highlights.
- **Search and Filter Options:**
  - User-friendly interface to filter by location, price, etc.
- **AI Insights:**
  - Graphical representation of AI-generated recommendations in deep purple and gold.

#### Market Insights Page:
- **Latest News:**
  - Up-to-date real estate news in black text on white.
- **AI-Driven Insights:**
  - Market trends and predictions in graphs and charts with deep purple and gold.
- **Educational Articles:**
  - Resources on market understanding in a clean layout with gold accents.

#### Community (DAO) Page:
- **DAO Overview:**
  - Clear, concise explanation with deep purple text on the DAO’s purpose and structure.
- **Participation Guide:**
  - Step-by-step guide with gold highlights on joining and participating in the DAO.
- **Governance Model:**
  - Comprehensive information on decision-making and implementation in deep purple and gold with flowcharts.

#### Contact Us Page:
- **Contact Form:**
  - Clean design with deep purple borders, black text.
- **Customer Support:**
  - Clear layout with gold accents on how to get help.
- **FAQ:**
  - Simple layout for common questions and answers.

#### NFT Marketplace Page:
- **Header:**
  - Gold logo, deep purple text navigation on white.
- **Marketplace Overview:**
  - Deep purple banner with gold text.
- **NFT Listings:**
  - Card-based layout with images, descriptions, bid buttons in deep purple and gold.
- **Bid and Purchase Section:**
  - Minimalist bid form in deep purple and gold buttons, purchase button with deep purple background, white text, gold hover effect. Confirmation modal in deep purple text on white.
- **User Profile Integration:**
  - Won assets transferred to user's crypto wallet, displayed in profile dashboard with gold highlights.

### Backend Database Specifications:

**Database Design:**

1. **Users Table:**
   - user_id (Primary Key)
   - username
   - email
   - password_hash
   - role (user/admin)

2. **Auctions Table:**
   - auction_id (Primary Key)
   - parcel_number
   - address
   - lien_amount
   - assessed_value
   - market_value
   - status (active/closed)

3. **Properties Table:**
   - property_id (Primary Key)
   - parcel_number (Foreign Key)
   - address
   - zillow_value
   - google_value
   - other_value

4. **Investments Table:**
   - investment_id (Primary Key)
   - user_id (Foreign Key)
   - property_id (Foreign Key)
   - amount_invested
   - projected_return
   - status (pending/confirmed)

5. **Treasury Table:**
   - treasury_id (Primary Key)
   - total_funds
   - funds_in_use

**APIs and Integration:**

- **GIS API:** For retrieving property addresses using parcel numbers.
- **Zillow API:** For retrieving property values.
- **Google API:** For retrieving additional property values and data.
- **Solana Wallet Integration:** For connecting user wallets.

### Implementation Steps for GPT Engineer:

1. **UI Development:**
   - Use the provided color scheme and layout details to create the website UI in React.
   - Ensure responsive design for optimal viewing on desktop, tablet, and mobile devices.
   - Implement form validation and user authentication.

2. **Database Setup:**
   - Create the necessary database tables as specified.
   - Set up relationships between tables.
   - Ensure secure handling of user data and encryption of sensitive information.

3. **API Integration:**
   - Integrate GIS, Zillow, and Google APIs to fetch property data.
   - Implement asynchronous data fetching to ensure smooth user experience.

4. **Analysis Logic:**
   - Develop the logic to analyze auction data, calculate projected returns, and assess investment risks.
   - Ensure that the analysis meets the requirement of at least an 80% increase in profit.

5. **Testing and Deployment:**
   - Test the website thoroughly for functionality, performance, and security.
   - Deploy the website and database to a scalable cloud platform.

By following this detailed and descriptive prompt, GPT Engineer can create a fully functional Lotus Sentry Security Corp website with a robust backend database, ready for use in React.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn/ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/sentry-lotus-ui-db.git
cd sentry-lotus-ui-db
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
