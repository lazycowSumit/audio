var image=require("../model/image_vide")
// var fs = require('fs');
// const multer = require('multer');

// const Storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/uploads')
//     },
//     filename: function (req, file, cb) {
//         var datetimestamp = Date.now();
//         var fileOriginalname = file.originalname;
//         fileOriginalname = fileOriginalname.replace(/[^a-zA-Z0-9.]/g, '').toLowerCase();
//         cb(null, datetimestamp + '_' + fileOriginalname);
//     }
// });
// const upload = multer({ storage: Storage });
// var audioUploads = upload.fields([{ name: 'audioFile', maxCount: 1 }]);

// exports.audioPlayersave = (req, res) => {
//     var audio = new image();

//     const { name, email } = req.body;

//     audio.name = name;
//     audio.email = email;
//     audio.save(async function (err, audioInfo) {
//         if (err) {
//             return res.status(200).json({ status: false, err });
//         }
//         return res.status(200).json({ status: true, message: "Success", audioInfo });
//     });
//     // });
// }

const multer = require('multer');

// const Storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/uploads')
//     },
//     filename: function (req, file, cb) {
//         var datetimestamp = Date.now();
//         var fileOriginalname = file.originalname;
//         fileOriginalname = fileOriginalname.replace(/[^a-zA-Z0-9.]/g, '').toLowerCase();
//         cb(null, datetimestamp + '_' + fileOriginalname);
//     }
// });
// const upload = multer({ storage: Storage });
// var audioUploads = upload.fields([{ name: 'audioFile', maxCount: 1 }]);

exports.audioPlayersave = (req, res) => {
    // const { folder_name } = req.query;

    // if (folder_name) {
    //     var folder = folder_name
    // } else {
    //     var folder = 'defult';
    // }
    const Storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public' + '/' + 'audio' + '/' + 'clinician')
        },
        filename: function (req, file, cb) {
            // var datetimestamp = Date.now();
            var fileOriginalname = file.originalname;
            //  fileOriginalname = fileOriginalname.replace(/[^a-zA-Z0-9.]/g, '').toLowerCase();
            //  cb(null, datetimestamp + '_' + fileOriginalname);
            cb(null, fileOriginalname);
        }
    });
    const upload = multer({ storage: Storage });
    var audioUploads = upload.fields([{ name: 'audioFile', maxCount: 1 }]);

    var audio = new image();
    audioUploads(req, res, function (err) {
        if (typeof req.files == 'undefined' || typeof req.files['audioFile'] == 'undefined' || req.files['audioFile'] == '') {
            var audio_file_newName = 'demo.mp3';
        } else {
            var audio_file_newName = req.files['audioFile'][0].filename;
            console.log(req.files['audioFile'][0]);
        }
        const { name,email } = req.body;

        audio.image = audio_file_newName;
        audio.name = name;
        // audio.path=`public/audio/clinician/'${folder}/${audio_file_newName}`;
        audio.email = email;
       // audio.page_name = hobbies;
       
        audio.save(async function (err, audioInfo) {
            if (err) {
                return res.status(200).json({ status: false, err });
            }
            return res.status(200).json({ status: true, message: "Success", audioInfo });
        });
    });
}
