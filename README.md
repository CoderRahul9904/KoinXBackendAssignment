# KoinX Backend Assignment

This project is the backend implementation for KoinX, an assignment for a backend intern role. It provides APIs for retrieving cryptocurrency data, stats, and standard deviation calculations for coins like Bitcoin, Matic Network, and Ethereum.

## API Endpoints

### 1. **Dashboard Data**
- **URL**: `https://koin-xb-ackend-assignment-e4qo70uei-coderrahul9904s-projects.vercel.app/koinx/api/v1/dashboard`
- **Description**: This endpoint returns data for multiple cryptocurrencies: Bitcoin, Matic Network, and Ethereum.
- **Response**: Returns a JSON object with cryptocurrency data (prices, market data, etc.).

### 2. **Coin Stats**
- **URL**: `https://koin-xb-ackend-assignment-e4qo70uei-coderrahul9904s-projects.vercel.app/koinx/api/v1/stats?coinType={coinType}`
- **Description**: This endpoint returns the statistics for a particular cryptocurrency.
- **Parameters**:
  - `coinType`: Acceptable values are `bitcoin`, `matic-network`, and `ethereum`.
- **Response**: Returns a JSON object with stats related to the requested cryptocurrency.

### 3. **Standard Deviation**
- **URL**: `https://koin-xb-ackend-assignment-e4qo70uei-coderrahul9904s-projects.vercel.app/koinx/api/v1/deviation?coinType={coinType}`
- **Description**: This endpoint calculates the standard deviation of the price of the requested cryptocurrency for the last 100 records stored in the database.
- **Parameters**:
  - `coinType`: Acceptable values are `bitcoin`, `matic-network`, and `ethereum`.
- **Response**: Returns a JSON object with the standard deviation data for the specified coin.

## Important Notes

### Cold Start Issue
Please be aware that the API may experience a **cold start** when accessed for the first time or after a period of inactivity. This means the initial request may result in an error or delay in response. If you encounter such issues, please **refresh the window** to ensure the function is properly initialized. This is a known behavior of serverless functions deployed on platforms like Vercel.

### CORS Issues
- Ensure that your frontend is configured to make cross-origin requests to the backend. You might encounter CORS-related issues if your frontend and backend are deployed on different domains.
- The backend supports all origins via the `CORS` middleware but still, check your frontend code to handle CORS errors correctly.

## Running the Project Locally

If you wish to run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository-url
   cd koinx-backend
