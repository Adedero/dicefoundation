const { db } = require("../config/db.config")
const { HTTPException } = require("../utils/helpers")
const fs = require('node:fs')
const path = require('path') // Import the path module
const logger = require("../utils/logger")
const env = require("../utils/env")

module.exports = {
  async uploadImage(req, res, next) {
    const { file } = req.files || {}
    try {
      if (!file) {
        throw new HTTPException('No file uploaded')
      }
      // Construct a unique filename using current timestamp and original file name
      const fileName = `IMG-${Date.now()}-${file.name}`
    
      // Resolve the target directory (e.g., public/gallery) and filename
      const filePath = path.resolve('public/uploads', `${fileName}`)

      const url = `${env.get('BASE_URL')}/uploads/${fileName}`

      // Move the file to the target location. Use await if your library supports promises.
      await file.mv(filePath)

      // Create a new Image record
      const image = db.Image.build({ name: fileName, url })
      await image.save()

      return res.status(201).json(image)
    } catch (error) {
      next(error)
    } finally {
      if (file && file.tempFilePath && fs.existsSync(file.tempFilePath)) {
        try {
          fs.unlink(file.tempFilePath)
        } catch (unlinkError) {
          logger.error("Error removing temp file: ", unlinkError)
        }
      }
    }
  },

  async deleteImage(req, res, next) {
    const { id } = req.params
    try {
      let image = await db.Image.findByPk(id)
      if (!image) {
        throw new HTTPException(400, 'Image not found')
      }
      const { name } = image

      const imagePath = path.resolve('public/uploads', `${name}`)
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
      }
      await image.destroy()
      return res.status(200).json({ message: 'Image deleted successfully' })
    } catch(error) {
      next(error)
    }
  }
}
