
function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* <video controls  autoplay name="media"><source src="https://media3.giphy.com/media/2X4e4KrOMz7gaXU1Z4/giphy.mp4?cid=ecf05e47z0f1a5dt0kipy71vs8rm3riveezc0v3gsco2aaio&amp;rid=giphy.mp4&amp;ct=g" type="video/mp4" /></video> */}
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default ErrorFallback;