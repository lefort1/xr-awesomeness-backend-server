import * as noteService from './note-service';

export const continuouslyServeNotes = ws => {
    console.log("opened the note socket");
    ws.send(JSON.stringify(noteService.getNotes()));

    ws.on('close', () => {
        console.log('note socket closed');
    });
}
