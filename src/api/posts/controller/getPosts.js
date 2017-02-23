import { Post } from '~/models'

export default async (ctx, next) => {
  try {
    const posts = await Post.find().sort('-date')
    ctx.status = 200
    ctx.body = posts
    next()
  } catch (err) {
    err.status = err.status || 404
    ctx.app.emit('error', err, ctx)
  }
}