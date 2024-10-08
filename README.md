# ARTIST - AI Image Generation Application

## Project Overview

The **Artist** an **AI Image Generation Application** is a cutting-edge web application that leverages the Pexels API to generate and browse images based on user input. The application features two primary pages: a Create page for generating new images and a Browse Images page for viewing and downloading previously generated images.

## Features

### Create Page

- **Image Generation**: Users can input text prompts to generate images using the Pexels API.
- **Real-Time Feedback**: View generated images immediately after submission.
- **Customization Options**: Customize image generation parameters such as style and resolution.

### Browse Images Page

- **Image Gallery**: View a gallery of previously generated images.
- **Search and Filter**: Search for images based on keywords or categories.
- **Image Details**: View details about each image, including creation date and prompt used.
- **Image Download**: Download images to your local device.

## Pages

### Create Page

- **Description**: Allows users to input text prompts and generate images using the AI API.
- **Image**: ![Create Page](frontend/src/assets/CreatePage.jpeg)

### Browse Images Page

- **Description**: Displays a gallery of previously generated images with options to search, filter, and download.
- **Image**: ![Browse Images Page](frontend/src/assets/BrowseImagePage.jpeg)

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **AI API**: Pexels API
- **Database**: MongoDB 

## Installation Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone [repository-url]
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd AI-Image-Generation
   ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the backend server using:
     ```bash
     nodemon server.js
     ```

5. **Database Setup**:
   - Ensure MongoDB is installed and running.
   - Configure the MongoDB connection in the backend configuration files.

## API Configuration

- **AI API Integration**: Ensure you have an API key for the Pexels API and configure it in the backend or frontend as needed to enable image generation.

## Usage

- **For Users**: Navigate to the Create page to generate new images based on text prompts. Visit the Browse Images page to view, search, filter, and download previously generated images.
