const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  CampaignID: {
    type: String,
    required: [true, 'CampaignID is required'],
    unique: true,
  },
  //idcampain 
  CampaignName: {
    type: String,
    required: [true, 'Campaign Name is required']
  }
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
