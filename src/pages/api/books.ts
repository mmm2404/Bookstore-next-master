import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    let maxResults = 6
    const { subject, startIndex} = req.query;
    const apiURL = "https://www.googleapis.com/books/v1/volumes?";
    const apiKey = "AIzaSyAYv6TrMmr1DRuHh5PRlztKi-ATjoGNPMU";
 

    const gbooksReqParams = new URLSearchParams();

    gbooksReqParams.set('q', `Subject:${subject}`);
    gbooksReqParams.set('key', `${apiKey}`);
    gbooksReqParams.set('startIndex', `${startIndex}`);
    gbooksReqParams.set('maxResults', `${maxResults}`);
    gbooksReqParams.set('langRestrict', `en`);
    gbooksReqParams.set('filter', `paid-ebooks`);
    const response = await fetch(`${apiURL}${gbooksReqParams.toString()}`,
    {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
    
    const booksData = await response.json();
    res.status(200).send({
      booksData,
    })
    if (!req.query.subject) {
        res.status(400).send({
            error: true,
            message: 'No subject in query params'
        })
    }

    }

    