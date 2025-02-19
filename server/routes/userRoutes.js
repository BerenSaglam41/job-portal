import express from 'express'
import multer from 'multer'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/userController.js';
import path from 'path'

const router = express.Router();

// Dosya yükleme konfigürasyonu
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(process.cwd(), 'uploads');
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


// Get User Data
router.get('/', getUserData);

// Apply for a job
router.post('/apply', applyForJob);

// Get applied job data
router.get('/applications', getUserJobApplications);

// Update user profile (resume)
router.post('/update-resume', upload.single('resume'), updateUserResume);

export default router;
