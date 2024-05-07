let handler = async (m, { conn, text }) => {
    if (!text) throw 'No Text'
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/S6AWkIB.jpeg'),
    comment: text,
    username: conn.getName(m.sender)
    }), 'error.png', '*THANKS FOR COMMENT*', m)
    }
    handler.help = ['ytcomment <comment>']
    handler.tags = ['maker'] 
    handler.command = /^(ytcomment)$/i
    export default handler
