import { TNote } from "./types";

const handleResponse = (response: any) => {
  try {
    return response.json();
  } catch (err) {
    console.error(err);
    return false;
  }
};
export const getNotes = async () =>
  handleResponse(await fetch("/api/note", { method: "GET" }));
export const saveNote = (note: TNote & { id?: string }) =>
  note.id ? putNote(note) : postNote(note);
export const postNote = async (note: Omit<TNote, "id">) =>
  handleResponse(
    await fetch("/api/note", {
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
  );
export const deleteNote = async (id: string) =>
  handleResponse(
    await fetch(`/api/note/${id}`, {
      method: "DELETE",
    })
  );
export const putNote = async (note: TNote) =>
  handleResponse(
    await fetch(`/api/note/${note.id}`, {
      body: JSON.stringify({ title: note.title, body: note.body }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    })
  );
