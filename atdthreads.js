this.config = {
 name: 'atdthreads',
 version: '1.1.1',
 hasPermission: 0,
 credits: 'DongDev',
 description: 'Tải ảnh, video từ link post threads.net',
 commandCategory: 'Noprefix',
 usages: '[]',
 cooldowns: 5,
 images: []
};

let key = "DongDev_Free_7445826768";
let axios = require('axios');
let fs = require('fs');
this.handleEvent = async o => {
 if (o.event.senderID == (global.botID || o.api.getCurrentUserID())) return;
 let send = (msg) => o.api.sendMessage(msg, o.event.threadID, o.event.messageID);
 for(let str of o.event.args) {
 if(/^https?:\/\/www\.threads\.net\//.test(str)) {
 let res = await axios.get(`https://dongdev.click/threads/dl?apikey=${key}&url=${str}`);
 let data = res.data.data;
 const attachment = data.image_urls && data.image_urls.length > 0 ? await Promise.all(data.image_urls.map(url => streamURL(url, 'jpg'))) : (data.video_urls && data.video_urls.length > 0 ? await streamURL(data.video_urls[0].download_url, 'mp4') : null);
 send({
 body: `[ AUTODOWN THREADS ]`,
 attachment
 });
 } else if (/^https:\/\/(www\.)?instagram\.com\/(reel|p)\/\w+\/\w*/.test(str)) {
  const cookie = '';
  const post = await axios.get(`https://dongdev.click/api/igpost?apikey=${key}&url=${str}&cookie=${cookie}`).data;
  let attachment = [];
  if (post.images && post.images.length > 0) {
    attachment = await Promise.all(post.images.map(image => streamURL(image, 'jpg')));
  } else if (post.videos) {
    attachment.push(await streamURL(post.videos, 'mp4'));
  }
  send({body: `[ AUTODOWN INSTAGRAM ]\nTiêu đề: ${post.caption}\nTác giả: ${post.owner.full_name} (${post.owner.username})\nLượt thích: ${post.like_count}\nBình luận: ${post.comment_count}`, attachment});
    }
}
};
this.run = async () => {};
function streamURL(url, type) {
 return axios.get(url, {
 responseType: 'arraybuffer'
 }).then(res => {
 const path = __dirname + `/cache/${Date.now()}.${type}`;
 fs.writeFileSync(path, res.data);
 setTimeout(p => fs.unlinkSync(p), 1000 * 60, path);
 return fs.createReadStream(path);
 }).catch(error => {
 console.error('Error streaming URL:', error);
 throw error;
 });
}