import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: "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",
})

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.send('Hello from DALL-E!');
});

router.route('/').post(async (req, res) => {
  try{
    const { prompt } = req.body;
    
    const aiResponse = await openai.createImage({
      prompt,
      n: 2,
      size: "1024x1024",
    });

    return res.status(200).json({image: aiResponse.data.data[0].url})
  } catch(error) {
    console.log(error.message);
    res.status(500).send(error?.response.data.error.message)
  }
})


export default router;






























































// try {
//   const { prompt } = req.body;

//   const aiResponse = await openai.createImage({
//     prompt,
//     n: 1,
//     size: '1024x1024',
//     response_format: 'b64_json',
//   });
//   console.log(prompt);

//   const image = aiResponse.data.data[0].b64_json;
//   res.status(200).json({ photo: image });
//   console.log("This worked");

// } 



























// import express from 'express';
// import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';


// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// router.route('/').get((req, res) => {
//     res.status(200).json('Hello from Dall-YU!')
// });


// router.route('/').post(async (req, res) => {
//     try{
//         const { prompt } = req.body;

//         const aiResponse = await openai.createImage({
//             prompt,
//             n: 1,
//             size: '1024x1024',
//             response_format: 'b64_json',
//         });

//         const image = aiResponse.data.data[0].b64_json;

//         res.status(200).json({photo: image});
//         console.log({photo: image})
//     }
//     catch(err) {  
//         console.log(err);
//         res.status(500).send(err?.response.data.error.message || 'Something went wrong');
//     }
// } )

// export default router;