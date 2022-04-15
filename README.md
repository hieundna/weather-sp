# Weather Web Application
**Technical Stack:**
1. Information:
   - The Weather web app base on myENV app.
   - This application shows weather and tide information of each days

2. Everything needs to build app:
   - ReactJS version 17.0.2
   -	Chart using Rechart Library
   -	Style using SASS
   -	Unit testing using Jest, Enzyme and react-testing-library

![image](https://user-images.githubusercontent.com/70335420/116372069-438dd100-a836-11eb-8e46-464bccd313b8.png)

*Picture 1: Desktop view*

![image](https://user-images.githubusercontent.com/70335420/116372120-4f799300-a836-11eb-889d-bed7d009ebc2.png)

*Picture 2: mobile view*


3. Data:
   - Weather data is got from weather api: ‘Weather API - OpenWeatherMap’
   - All chart data is static and was defined follow this structure:

![image](https://user-images.githubusercontent.com/70335420/116372172-5b655500-a836-11eb-9de2-8fbee90dd83c.png)

*Picture 3: data structure*


4. Unit testing: using Jest, enzyme and react-testing-library

![image](https://user-images.githubusercontent.com/70335420/116372643-d4fd4300-a836-11eb-9f92-b6bde86b06a9.png)

*Picture 4: testing result*

5. Github repository: [S3_Weather_HieuNguyen](https://github.com/s3corp-github/S3_WeatherWeb_HieuNguyen)
6. Deploy link: [Weather Forecast](https://weathersp.herokuapp.com/)
7. How to run
   - Requirement install environment
     - NodeJS ver >= 12
     - After clone project please run this cmd yarn or npm install
   - Available scripts: 
     In the project directory you can run:
     - `yarn start` or `npm run start` to start the app on local server with url http://localhost:3000/
     - `yarn test` or `npm run test` to launches the test runner in the interactive watch mode
     - `yarn build` or `npm run build` to builds the app for production to the build folder
