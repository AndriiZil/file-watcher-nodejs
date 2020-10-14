# file-watcher-nodejs

#### Everything is simple:
* import necessary module: chokidar, events, read-last-lines.
* define Observer class that extends EventEmitter which can emit event (emit() method) and listen to event (on() method).
* create watcher variable using chokidar.watch() function. {persistent: true} indicates whether the process should continue to run as long as files are being watched.
* watcher.on('change') is the event listener for a file changed event.
* in the handler, we use readLastLines() to read the last line of the file, emit 'file-updated' event with the content as message.
* export Observer module.
