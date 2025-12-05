# the prop firm match 
## Global Components
## Navigation Bar
**Technical Summary:**
A fixed top navigation bar present on every page. It contains the brand logo ("pfm-logo"), a search/filter function, and primary navigation links. It also features a "Log in / Sign Up" button group for user authentication.
**Literal Summary:**
* **Logo:** Prop Firm Match
* **Links:** Home, Offers, Challenges, Best Sellers, Reviews, Favorite Firms, Prop Firm Rules, Spreads, Payouts.
* **User Actions:** Log in, Sign Up.

## Sticky Promo Bar
**Technical Summary:**
A horizontal, dismissible or sliding component located just below the header or at the top of the content area. It features a carousel ("Previous/Next slide") mechanism to cycle through time-sensitive deals.
**Literal Summary:**
"December Forex Offers" (or current month). Displays active discount codes for specific firms (e.g., "BrightFunded 20% OFF", "Maven 4% OFF"). Includes a countdown timer for urgent deals ("Ends in: 04:58:54").

## Pop-Up (User Reported)
**Technical Summary:**
A modal window that overlays the main content upon initial site visit or exit intent. It typically requires user interaction (entering an email) to close or claim an offer.
**Literal Summary:**
"Chance to win a 200k account". Prompt to enter an email address to participate in a giveaway. Includes checkboxes for Terms of Service and Privacy Policy.

---

# Page: Home (`/`)
## Hero Section
**Technical Summary:**
The main landing area featuring a headline, subheadline, and high-level trust signals (stats). It serves as the entry point for the primary comparison tools.
**Literal Summary:**
* **Headline:** "Compare the Best Prop Firms of 2025"
* **Subtext:** "Trusted platform to compare the best prop trading firms..."
* **Stats:** 50+ Verified Firms, 500+ Challenges, 8,500+ Real Reviews.

## Main Comparison Table
**Technical Summary:**
A complex data table listing prop firms. It includes sortable columns and action buttons ("Firm", "Buy"). The table likely fetches data dynamically based on filters.
**Literal Summary:**
Lists top firms like FundingPips, The5ers, and Alpha Capital.
* **Columns:** Firm Name, Rank/Reviews (e.g., 4.8 stars), Country, Years in Operation, Assets (Crypto, FX), Max Allocations, Promo Codes (e.g., "5% OFF"), and Actions.

## Firm Categories (Tabs/Filters)
**Technical Summary:**
A tabbed interface allowing users to switch between different rankings without reloading the page.
**Literal Summary:**
* **Tabs:** Popular, Favorite (0/5), New, All.
* **Firms Listed:** E8 Markets, QT Funded, Maven, FundedNext.

---

# Page: Offers (`/offers`)
## Offers List
**Technical Summary:**
A grid or list layout dedicated to active coupon codes and discounts. Each item is a "card" containing the firm's logo, the discount amount, and a "Copy Code" or "Apply" button.
**Literal Summary:**
"All Current Offers, Discounts & Special Promos".
* **Specific Deals:**
    * **FundingPips:** 25% OFF (Code: MATCH)
    * **BrightFunded:** 20% OFF + Free Account (Code: MATCH)
    * **Blueberry Funded:** 45% OFF (Code: MATCHCM)
* **Details:** Expiration timers and specific conditions (e.g., "First order only", "Excluding 100K accounts").

---

# Page: Challenges (`/prop-firm-challenges`)
## Challenge Comparison Engine
**Technical Summary:**
A highly detailed comparison table focused on the specific rules of trading challenges. It allows filtering by account size (e.g., $100k), steps (1-Step, 2-Step), and asset class.
**Literal Summary:**
"Prop Firm Challenge Comparison: Rules, Prices & Stats".
* **Table Columns:**
    * **Firm / Rank:** (e.g., FundingPips 4.4)
    * **Account Size:** (e.g., 100K)
    * **Steps:** (e.g., 2 Steps)
    * **Profit Target:** (e.g., 8% Phase 1, 5% Phase 2)
    * **Daily Loss:** (e.g., 5%)
    * **Max Loss:** (e.g., 10%)
    * **Profit Split:** (e.g., 80%)
    * **Payout Freq:** (e.g., "14 Days" or "On-Demand")
    * **Price:** Displays original vs. discounted price (e.g., "$490.50").

---

# Page: Best Sellers (`/best-sellers`)
## Rankings List
**Technical Summary:**
A leaderboard style page showcasing the most purchased or highest-rated firms based on internal sales data or user activity.
**Literal Summary:**
"Prop Firm Rankings & Best Sellers".
* **Rank #1:** FundingPips (4.4 stars, 828 reviews)
* **Rank #2:** Alpha Capital Group (4.4 stars)
* **Rank #3:** QT Funded
* **Rank #4:** E8 Markets
* **Content:** "Discover the firms traders are choosing right now." Includes "See All Offers" buttons for each entry.

---

# Page: Favorite Firms (`/favorite-firms`)
## User Favorites Vote List
**Technical Summary:**
A social-proof driven list where firms are ranked by the number of "Favorites" (bookmarks) they have received from registered users.
**Literal Summary:**
"Most Favorited Prop Firms by Traders".
* **The5ers:** Favorited by ~40,900 users.
* **FundingPips:** Favorited by ~39,700 users.
* **FundedNext:** Favorited by ~28,400 users.
* **FTMO:** Favorited by ~25,900 users.

---

# Page: Reviews (`/prop-firm-reviews`)
*(Note: Often integrated into the "All Prop Firms" list or individual firm pages)*
## Review Hub
**Technical Summary:**
A repository of user-generated content. It aggregates star ratings (1-5) and written testimonials. Individual firm pages contain a "Reviews" tab.
**Literal Summary:**
"Real Trader Reviews".
* **Components:** Overall TrustScore (e.g., 4.8/5), breakdown of ratings (5 stars, 4 stars, etc.).
* **User Comments:** Specific feedback on payout speed, support quality, and slippage (e.g., "Very good firm... paid with no issues").

---

# Page: Spreads (`/prop-firm-spreads`)
## Live Spread Comparison
**Technical Summary:**
A technical data page that likely pulls live or historical spread data for specific trading pairs (EURUSD, Gold, etc.) across different firms/brokers.
**Literal Summary:**
"Compare The Spreads between Prop Firms".
* **Data Points:** Comparison of spreads and commissions.
* **Supported Platforms:** MT5, cTrader.
* **Asset Classes:** Forex, Crypto, Indices, Metals.
* **Goal:** "Optimize your trading performance" by finding the broker with the lowest costs.

---

# Page: Payouts (`/payouts`)
## Payout Analytics
**Technical Summary:**
A data-heavy page displaying payment statistics. This acts as a "Proof of Payment" ledger to build trust.
**Literal Summary:**
"Prop Firm Payouts Analytics".
* **Table Columns:**
    * **Total Payouts:** (e.g., FundedNext: $13M+)
    * **No. of Payouts:** (e.g., 15,000+)
    * **Largest Single Payout:** (e.g., $46,279)
    * **Average Payout Size:** (e.g., $858)
    * **Average Time:** (e.g., "<24h" or "2 days")
* **Firms Listed:** FundedNext, FundingPips, Top One Futures, E8 Markets.




# The trusted prop analysis 
## Global Components
## Navigation Bar
**Technical Summary:**
A consistent top-level header containing the brand logo and primary navigation links. It includes a "Search" functionality and user authentication buttons ("Log in", "Sign Up").
**Literal Summary:**
* **Logo:** The Trusted Prop (TTP)
* **Menu Links:**
    * All Prop Firms
    * Best Offers
    * Best Prop Firms
    * Live Spreads (labeled "Coming Soon...")
    * Hidden Rules
    * Compare Firms
    * Blogs
    * Free Giveaways
    * Reviews
    * Awards

## Footer & Sticky Elements
**Technical Summary:**
* **Sticky Bar:** Occasionally appears to highlight active giveaways or top-rated firms.
* **Footer:** Contains legal disclaimers, contact info (`support@thetrustedprop.com`), and links to "Payout Assurance," "Affiliate Program," and social media profiles.
**Literal Summary:**
* **Legal:** "TheTrustedProp is not a financial advisor... enterprise information searching tools."
* **Quick Links:** Privacy Policy, Cookies Policy, Terms & Conditions, Sitemap.

---

# Page: Home (`/`)
## Hero Section & Stats
**Technical Summary:**
The landing area establishes credibility with high-level statistics and a strong value proposition. It features a "Search" bar for quick access to firm reviews.
**Literal Summary:**
* **Headline:** "Find the Best Prop Trading Firms in 2025: Verified by The Trusted Prop"
* **Stats:** 20+ Trusted Prop Firms, 1200+ Challenge Accounts, 3000+ Verified Reviews, 1M+ Monthly Website Visits.
* **Subtext:** "We've researched, reviewed, and ranked 400+ prop firms..."

## Top Firm Rankings (Lists)
**Technical Summary:**
Multiple list components showcasing firms based on different criteria (Trust, Price). Each entry is a card with the firm's logo, rating, "Trusted" badge status, and a "Buy Now" or "Read Review" action.
**Literal Summary:**
* **Top 7 Most Trusted Prop Firms:**
    * **Maven Trading:** 4.3 rating, "8% OFF".
    * **The5ers:** 4.8 rating, "5% OFF".
    * **Funding Pips:** 4.5 rating, "20% OFF".
* **Cheapest Prop Firms:** Ranked list (e.g., #1 Maven, #2 ThaurusGuru) showing discounted prices (e.g., "$15" down from "$13.80").

## Trust Signals & Content
**Technical Summary:**
Informational sections explaining the site's methodology ("Why Traders Trust Us") and a carousel of "Review Articles". Includes a Trustpilot widget showing real-time user feedback.
**Literal Summary:**
* **Why Trust Us:** Mentions "Unbiased Reviews," "Verified Green Tick" (manual verification), and "Payout Speed Ratings."
* **Video Section:** "Watch Our Videos" (YouTube embeds of interviews and guides).
* **Testimonials:** "Fantastic website!", "The support team is responsive."

---

# Page: All Prop Firms (`/prop-firms`)
## Prop Firm Directory
**Technical Summary:**
The core database page. It features a list of prop firms with advanced filtering options (likely implied or via search). Each firm row/card displays key metadata and a unique "Trusted" toggle indicator.
**Literal Summary:**
* **Trusted Toggle:** Explains that firms with the Green Tick have passed manual evaluation (1 year in operation, 250+ likes, etc.).
* **Firms Listed:**
    * **Funding Pips:** "Best Beginner-Friendly Prop Firm"
    * **Instant Funding:** "Best Instant Funding Prop Firm"
    * **FXIFY:** "Best Trading Dashboard"
* **Action Buttons:** "Visit Website", "Read Review", "Compare".
* **Coupons:** Explicitly lists codes (e.g., "Coupon Code: TRUSTED").

---

# Page: Compare Firms (`/compare-firms`)
## Comparison Tool
**Technical Summary:**
A functional tool allowing users to select two or more firms (e.g., "The5ers vs Funding Pips") to view a side-by-side data table.
**Literal Summary:**
"Compare & Choose the Best Prop Firms".
* **Comparison Fields:**
    * **Profit Split:** (e.g., "80-90%")
    * **Trading Platforms:** (e.g., MT5, cTrader, DXTrade)
    * **Payout Frequency:** (e.g., Weekly, Bi-weekly)
    * **Drawdown Limits:** (Daily vs. Max)
    * **Scaling Plans:** (Capital growth rules)
* **Goal:** "Make Informed Decisions with Side-by-Side Comparisons."

---

# Page: Reviews (`/review`)
## Reviews Hub
**Technical Summary:**
A dedicated page meant for aggregating user ratings. It presents a table or list where firms are scored on specific sub-metrics, distinguishing it from the general directory.
**Literal Summary:**
"Read Prop Firm Reviews by Real Traders 2025".
* **Rating Metrics:**
    * **Conditions:** (1-5 Stars)
    * **Support:** (1-5 Stars)
    * **Ease of Use:** (1-5 Stars)
    * **Payouts:** (1-5 Stars)
* **User Actions:** "View" or "Write a Review".

---

# Page: Hidden Rules (`/hidden-rules`)
## Educational Guide
**Technical Summary:**
A content-heavy page or long-form article designed to warn traders about specific, often overlooked clauses in prop firm contracts.
**Literal Summary:**
"Prop Firm Hidden Rules Exposed".
* **Common "Hidden" Rules Listed:**
    * **News Trading:** Restrictions on opening/closing trades minutes before high-impact news.
    * **Gambling Rules:** Restrictions on "all-in" trades or using >50% margin on a single trade.
    * **Consistency Rules:** Requirements for consistent lot sizes or profit consistency (e.g., best day cannot be >30% of total profit).
    * **IP Address:** Rules against accessing accounts from different regions/devices (copy trading protection).

---

# Page: Free Giveaways (`/prop-firm-giveaway`)
## Promo Section
**Technical Summary:**
A landing page for community engagement campaigns. It outlines how users can win free challenge accounts through social media interaction.
**Literal Summary:**
* **Weekly Events:** "Exclusive Giveaway Program".
* **Mechanisms:**
    * **Discord:** "Spin-and-win" events.
    * **Twitter/X:** Retweet & Tag friends.
* **Prizes:** Free accounts ranging from $5k to $25k challenges.

---

# Page: Blogs (`/blogs`)
## Content Feed
**Technical Summary:**
A standard blog roll layout displaying thumbnails, titles, and excerpts of the latest articles. Content includes reviews, industry news, and "Best of" lists.
**Literal Summary:**
* **Recent Posts:**
    * "Klein Funding Detailed Review 2025"
    * "Top 5 Reasons Traders Choose BitFunded"
    * "Wall Street Funded Payouts 2025"
* **Categories:** Firm Reviews, Payout Guides, Trader Success Stories.

---

# Page: Individual Firm Review (Example: `/prop-firms/funded-forex`)
## Detailed Firm Analysis
**Technical Summary:**
The detailed view for a single firm. It uses data tables to break down every aspect of the firm's challenge models.
**Literal Summary:**
* **Table 1: Overview:** Headquarters, Years in Operation, Broker (e.g., "Undisclosed"), Platforms (MT5).
* **Table 2: Challenge Details:** Price per account size (e.g., "$5,000: $69").
* **Rules Section:** Explicit "Allowed" vs "Not Allowed" lists (e.g., HFT allowed? No. EAs allowed? Yes).
* **Pros & Cons:**
    * **Pros:** "Fast Payouts", "No Time Pressure".
    * **Cons:** "Strict Rule Enforcement", "No Refund Policy".