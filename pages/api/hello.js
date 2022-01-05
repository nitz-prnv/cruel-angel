// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import yts from "yt-search"
export default async function handler(req, res) {
  const search = await yts(req.query.search);
  let details=[]
  search.all.map((e)=>{
    details=[...details,{thumb:e.thumbnail,title:e.title,url:e.url}]
  })
  res.status(200).json(details)
}
