// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const handler = (req:string, res:any) =>  {
  res.status(200).json({ name: 'John Doe' })
}

export default handler
