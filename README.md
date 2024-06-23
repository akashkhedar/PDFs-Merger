# PDF Merger Application

This Node.js application allows users to merge multiple PDF files into a single PDF. It provides two methods for selecting files: drag-and-drop and file selection using a "Choose Files" button.

## Features

- **Drag and Drop:** Drag PDF files into the designated area on the page.
- **Choose Files:** Select PDF files using the "Choose Files" button.
- **Merge PDFs:** Merge multiple PDFs into a single PDF file.
- **Download:** Automatically download the merged PDF file.

## Technologies Used

- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript templates)
- **Multer** (file uploading middleware)
- **PDFMerger** (library for merging PDF files)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/pdf-merger-app.git
    cd pdf-merger-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the server:**

    ```bash
    node server.js
    ```

4. **Open your browser and navigate to:**

    ```
    http://localhost:8000
    ```

## File Structure

- **`server.js`**: Main server file that sets up routes and handles PDF merging.
- **`merge.js`**: Logic for merging PDF files using PDFMerger.
- **`views/index.ejs`**: EJS template for the main page.
- **`views/styles.css`**: CSS styles for the application.
- **`views/script.js`**: JavaScript for handling drag-and-drop and file selection.

## Usage

1. **Drag and Drop:**
    - Drag PDF files into the designated area.

2. **Choose Files:**
    - Click "Choose Files" to select PDFs from your device.

3. **Merge Files:**
    - Click "Merge" after uploading files to merge them.

4. **Download Merged PDF:**
    - Download starts automatically after merging.

## Code Explanation

### `server.js`

This file sets up the Express server and handles PDF merging using Multer for file uploads.

### `merge.js`

Contains the logic for merging PDF files using the PDFMerger library. Exports a function `mergePDF` which takes an array of file paths, merges them, and returns the path to the merged PDF.

### `views/index.ejs`

EJS template for the main page, rendering the drag-and-drop area, file list, and merge button.

### `views/styles.css`

CSS styles for the application, including styles for drag-and-drop functionality and file list management.

### `views/script.js`

Handles client-side functionality such as drag-and-drop, file selection, and form submission for merging PDF files.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. For details, see the `LICENSE` file.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Multer](https://github.com/expressjs/multer)
- [PDFMerger](https://www.npmjs.com/package/pdf-merger-js)
