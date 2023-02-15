'use-strict';
import crypto from 'crypto';
import UrlMap from '../models/UrlMap.js';

function generateShortUrl() {
  return 'www.us.com/' + crypto.createHash('md5').update(Date.now().toString()).digest('base64url').substring(0, 11);
}

export async function getShortUrl(req, res) {
  const longUrl = req.body.longUrl;
  if(longUrl){
    let shortUrl = generateShortUrl();
    let isUrlUnique = false;
    for(let i = 0; i < 5 && !isUrlUnique; i++){
      const urlMap = await UrlMap.findOne({shortUrl})
      if(!urlMap){
        isUrlUnique = true;
      }
      else{
        shortUrl = generateShortUrl();
      }
    }
    if(!isUrlUnique){
      res.status(500).send({error: 'Could not generate unique short url, try again later'});
      return;
    }
    const urlMap = await UrlMap.create({longUrl, shortUrl});
    await urlMap.save();
    res.send({shortUrl, shortUrlExpiresAt: new Date(Date.now() + Number(process.env.EXPIRE_TIME))});
  }
  else{
    res.status(400).send({error: 'No long url provided'});
  }
}

export async function getLongUrl(req, res) {
  const shortUrl = req.body.shortUrl;
  if(shortUrl){
    const urlMap = await UrlMap.findOne({shortUrl, created_at: {$gt: new Date(Date.now() - Number(process.env.EXPIRE_TIME))}});
    if(!urlMap){
      res.status(404).send({error: 'No long url found for this short url'});
      return;
    }
    res.send({longUrl: urlMap.longUrl, shortUrlExpiresAt: new Date(urlMap.created_at + Number(process.env.EXPIRE_TIME))});
  }
  else{
    res.status(400).send({error: 'No short url provided'});
  }
}