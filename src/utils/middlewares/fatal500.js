
export default function fatal500 (err, req, res, next) {
  if (err.code !== 'VOLUNTARY') console.error(err.stack)

  try {
    res.status(500)
      .type('html')
      .send(
        '<link rel="stylesheet" href="/css/global.css">' +
        '<link rel="stylesheet" href="/css/layout.css">' +
        '<h1>Oooops ... 500 server error</h1>' +
        '<p>It seems the server has encountered an error,<br/>' +
        '   try to <a href=\'/\'> return to the website</a><br/>' +
        '   or to <a href="mailto:gui.silvent@gmail.com">send me the stack</a>' +
        '</p>' +
        '<h2>Error Stack :</h2>' +
        '<pre class="code"><code>' +
        err.stack +
        '</code></pre>'
      )
  } catch (e) {
    res.status(500)
      .type('text')
      .send(
        '\n\n' +
        '**************************************\n' +
        'Ooops ... 500\n' +
        'the server encountered an unhandled error,\n\n' +
        'if it is not voluntary (going to /api/error)\n' +
        'please EMAIL ME THE FOLLOWING STACK at\n' +
        'guillaume.silvent@hotmail.fr\n' +
          '**************************************\n\n' +
        'ORIGINAL ERROR STACK ------------------\n\n' +
        err.stack + '\n\n' +
        'ERROR HANDLING STACK ------------------\n\n' +
        e.stack
      )
  }
}
