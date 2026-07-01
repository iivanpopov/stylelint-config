import fs from 'fs'

const commitMsgPath = process.argv[2]
if (!commitMsgPath) process.exit(0)

const emojis = '✨🚀🐛🔥🎨⚡📝🔒♻️🐳🛠️📦🧪🚨🧹'

const currentMessage = fs.readFileSync(commitMsgPath, 'utf8')

const emoji = emojis[Math.floor(Math.random() * emojis.length)]
const newMessage = `${emoji} ${currentMessage}`

fs.writeFileSync(commitMsgPath, newMessage)
