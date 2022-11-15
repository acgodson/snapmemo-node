![welcome](/shots/logo.png)

## Snapmemo allows users to save, share and keep track of memorable photos as digital assets on blockchain

[See frontend repo](https://github.com/acgodson/snapmemo-frontend.git)

This is a serverside implementation that handles tweeting of new NFT photos from authorized creators as soon as they are published on web3.storage and algorand blockchain.

## One click for everything

- **Store Photos and metadata** - on ipfs decentralized storage system via web3.storage

- **Create digital Assets** - of saved photos on blockchain

- **Tweet new NFT photos** - automatically

### [Video Snippet](https://youtu.be/Fj3YkRPjcqo)

## Testing

To run server locally - Run `npm install` and `npm run start:dev` and you're ready to go!

- Additionally, you may need to supply API key and secret from your [Twitter API Dashboard]()

- Access token and secret is gotten from the clientside interaction between [Web3auth]() and [Firebase JWT]()

- Clone the [Front-end Repository](https://github.com/acgodson/snapmemo-frontend.git) to authenticate send requests to localhost:4040

Converting web3Storage CIDv1 to 32 bytes string to fit ASA standard (Algorand asset standard)

```
import CID from 'cids';


   function hexToBase64(hexStr) {
        let base64 = "";
        for (let i = 0; i < hexStr.length; i++) {
            base64 += !((i - 1) & 1)
                ? String.fromCharCode(parseInt(hexStr.substring(i - 1, i + 1), 16))
                : "";
        }
        return btoa(base64);

 const hex = new CID(cid).toString('base16').substring(9)

        let base64 = hexToBase64(hex);

        const buffer = Buffer.from(base64, "base64");
        const response = JSON.stringify({
            base64: base64,
            hex: hex,
            buffer: buffer.length
        });

```

## Links

- [IPFS Hosting](https://tiny-sea-0572.on.fleek.co/)
- [Front-end Repository](https://github.com/acgodson/snapmemo-frontend.git)
- [Design Journey (FIGMA)](https://www.figma.com/file/a5chpSSuMAAb6KST39mt4y/SNAPMEMO-UI?node-id=2%3A2)
- [Youtube](https://youtu.be/Fj3YkRPjcqo)

## Contributors

@cgold54
@AC_godson
