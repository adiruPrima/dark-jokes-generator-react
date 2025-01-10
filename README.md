# Dark Jokes Generator 🃏

A React application that generates dark humor jokes using the JokeAPI. Built with Vite and styled with Tailwind CSS for a modern, responsive interface.

## Features

- Dynamic joke generation from JokeAPI's dark humor category
- Two-part joke format with setup and punchline
- Interactive reveal mechanism for punchlines
- Loading states for better user experience
- Responsive design with desktop-specific decorative elements
- Stylish UI with a dark theme and animated elements

## Technologies Used

- React + Vite
- Tailwind CSS
- Axios for API calls
- JokeAPI v2

## Project Structure

The main application logic resides in `App.jsx`, which handles:

- State management using React hooks
- API integration with JokeAPI
- User interface rendering
- Interactive joke display system

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dark-jokes-generator
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Click the "Start" button to generate your first joke
2. Click on the joke setup (displayed in teal) to reveal the punchline
3. Use the "Next" button to generate more jokes
4. Enjoy the amusing decorative images on desktop view

## API Integration

This project uses the [JokeAPI](https://jokeapi.dev/) with the following endpoint:

```
https://v2.jokeapi.dev/joke/Dark?type=twopart
```

## Styling

The application uses Tailwind CSS for styling with:

- Dark slate background
- Teal accents for joke setups
- Indigo text for punchlines
- Green buttons with hover effects
- Responsive design considerations
- Decorative images for desktop view

## Contributing

Feel free to open issues and submit pull requests for any improvements you'd like to suggest.

## License

This project is open source and available under the MIT License.

## Note

Please be aware that this application generates dark humor jokes which may not be suitable for all audiences or situations.
