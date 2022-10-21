const multer = require('multer');

//max size for image uplode
const maxSize = 1 * 1024 * 1024;

//multer controller middlware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb( null, 'client-side/public/');
    },
    filename: (req, file, cb) => {
        cb(null, `/assets/imgs/${Date.now()}-${file.originalname}`);
    }
})
 exports.upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" 
        ) {
            cb(null, true);
        }else {
            cb(null, false);
            return cb(new Error("only .png, .jpg and . jpeg format allowed"));
        }
    },
    limits: { fileSize: maxSize}
});