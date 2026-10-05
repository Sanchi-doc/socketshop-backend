const multer = require('multer')
const path = require('path')
const fs = require('fs')

const tempDir = path.join(__dirname, '../temp')

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true })
}

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
    fileSize: 10 * 1024 * 1024,
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