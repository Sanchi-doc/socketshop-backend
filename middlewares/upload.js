// const multer = require('multer')
// const path = require('path')

// const tempDir = path.join(__dirname, '../', 'temp')
// const multerConfig = multer.diskStorage({
//     destination: tempDir,
//     filename: (req, file, cb) => {
//        cb(null, file.originalname)
//     },
//     limits: {
//         fileSize: 2048
//     },
//     fileLifter: (req, file, cb) => {
//       if(file.mimetype.includes('image')){
//         cb(null, true)
//         return 
//       }
//       cb(null, false)
//     }
// })

// const upload = multer({
//   storage: multerConfig,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg" ||
//       file.mimetype === "image/jpeg" ||
//       file.mimetype === "image/webp" ||
//       file.mimetype === "image/gif"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .png, .jpg, .jpeg and webp format allowed!"));
//     }
//   },
// });

// module.exports = upload

const multer = require('multer')
const path = require('path')

const tempDir = path.join(__dirname, '../temp')

const storage = multer.diskStorage({
  destination: tempDir,

  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`

    cb(null, uniqueName)
  },
})

const upload = multer({
  storage,

  limits: {
    fileSize: 2 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'image/png',
      'image/jpeg',
      'image/webp',
      'image/gif',
    ]

        if (allowedTypes.includes(file.mimetype)) {
          cb(null, true)
        } else {
          cb(new Error('Only image files are allowed!'))
        }
    },
})

module.exports = upload