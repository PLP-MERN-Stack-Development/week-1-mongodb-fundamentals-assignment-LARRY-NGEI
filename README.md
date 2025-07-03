# MongoDB Bookstore Project

## Setup Instructions

1. Install MongoDB and Node.js
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install mongodb
   ```
4. Start MongoDB service:
   ```bash
   sudo systemctl start mongod
   ```

## Running the Scripts

1. Insert sample data:
   ```bash
   node insert_books.js
   ```

2. Run queries:
   ```bash
   node queries.js
   ```

## Project Structure
- `insert_books.js` - Script to populate the database
- `queries.js` - Contains all MongoDB queries
- `screenshot.png` - Proof of database contents
