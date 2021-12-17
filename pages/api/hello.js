// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ytdl from "ytdl-core"
import yts from "yt-search"
export default async function handler(req, res) {
  const search = await yts(req.query.search);
  const thumb= search.all[0].thumbnail
  const title = search.all[0].title
  const info = await ytdl.getInfo(search.all[0].url)
  let url;
  info.formats.map((e)=>{
    if(e.hasVideo===false&&e.audioQuality==='AUDIO_QUALITY_MEDIUM')
    url=e.url
  })
  res.status(200).json({thumb,title,url})
}
