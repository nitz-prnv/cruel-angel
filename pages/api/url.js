import yts from "yt-search"
import ytdl from "ytdl-core";
export default async function handler(req, res) {
    const result = await ytdl.getInfo(req.query.url)
    let response= null
    result.formats.map((i)=>{
        if(!i.hasVideo && i.audioQuality==='AUDIO_QUALITY_MEDIUM' && i.codecs==='opus')
        response=i;
    })
    res.json(response);
  
}