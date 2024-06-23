const express = require("express");
const path = require("path")
const multer = require("multer");
const {mergePDF} = require("./merge"); //Ensure merge.js is in the same directory
const fs = require("fs");

const app = express();
const port = 8000;

//set up multer for file uploads
const upload = multer({dest : "uploads/" });

//serve static frile from the "views" directory
app.use(express.static(path.join(__dirname, "views")));

//set the view engine to EJS
app.set("engine", "ejs");

//render the index page with the file upload form
app.get("/", (req, res) => {
    res.render("index.ejs");
});

//handle the PDF merge request
app.post("/merge", upload.array("pdfs", 10), async(req, res, next) => {
    try{
        //get the paths of the uploaded files
    const files = req.files.map(file => file.path);

    //merge the PDF files and get the path to the merged PDF
    const mergedFilePath = await mergePDF(files);
    
    //Delete uploaded files after merging
    files.forEach(file => {
        fs.unlinkSync(file)
    });
    
    //send the merged file as a download
    res.download(mergedFilePath, "Merged.pdf", err => {
        if(err){
            console.log("Error sending file:", err);
            return next(err);
        }
        //delete the merged file after donwload
        fs.unlinkSync(mergedFilePath)
    });
    }catch(err){
        console.log("Error merging PDFs:", err);
        res.status(500).send("Error merging PDFs")
    }
});

//start the server
app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
});