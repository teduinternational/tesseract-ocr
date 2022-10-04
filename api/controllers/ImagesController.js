'use strict'
module.exports = {
    imageToText: (req, res) => {
        const { createWorker } = require('tesseract.js');
        const path = require('path');

        const worker = createWorker({
            langPath: path.join(__dirname,'..','..', 'lang-data'),
            logger: m => console.log(m),
        });

        (async () => {
            if(req.body.image == null){
                res.status(400).send('Image cannot empty.');
            }
            var strImage = req.body.image.replace(/^data:image\/[a-z]+;base64,/, "");
            let imageBuffer = Buffer.from(strImage, "base64");
            await worker.load();
            await worker.loadLanguage('kor_vert');
            await worker.initialize('kor_vert');
            console.log("Recognizing...");
            const { data: { text } } = await worker.recognize(imageBuffer);
            console.log("Recognized text:", text);
            res.json({ result: text})
            await worker.terminate();
        })();
    }
}
