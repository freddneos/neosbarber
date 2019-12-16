import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) {
          console.log(err);
          return cb(err);
        }
        console.log('passou aqui -> ', res);
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    }
  })
};
