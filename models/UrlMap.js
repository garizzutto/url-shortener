'use strict';

import mongoose from './db.js';

const Schema = mongoose.Schema;

const urlMapSchema = new Schema({
  longUrl: String,
  shortUrl: String,
  created_at: { type: Date, default: Date.now },
});

const UrlMap = mongoose.model('UrlMap', urlMapSchema);

export default UrlMap;