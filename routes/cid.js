

import express, { json, urlencoded } from "express";
import CID from 'cids';

const router = express.Router();

router.post("/encode", async function (req, res, next) {

    function hexToBase64(hexStr) {
        let base64 = "";
        for (let i = 0; i < hexStr.length; i++) {
            base64 += !((i - 1) & 1)
                ? String.fromCharCode(parseInt(hexStr.substring(i - 1, i + 1), 16))
                : "";
        }
        return btoa(base64);
    }
    const cid = req.body.cid;
    //Hex Value

    try {
        const hex = new CID(cid).toString('base16').substring(9)
        //Base64
        let base64 = hexToBase64(hex);
        //32 Bytes
        const buffer = Buffer.from(base64, "base64");
        const response = JSON.stringify({
            base64: base64,
            hex: hex,
            buffer: buffer.length
        });

        res.status(200).send(response);

    } catch (e) {
        console.log("error converting cid", error);
    }

});



router.post("/decode", async function (req, res, next) {

    const value = req.body.value;
    try {

        const bytes = Buffer.from(value, 'base64');
        //convert to hex
        const hex = bytes.toString("hex");

        console.log(hex)

        //Get CIDv1 from hex value
        const response = new CID('f' + '01701220' + hex).toString('base32')

        res.status(200).send(response);

    } catch (e) {
        console.log("error converting cid", error);
    }

});


export default router;

