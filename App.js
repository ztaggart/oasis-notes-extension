// chaseleffers1@gmail.com


import React from "react";
import './App.css';
class App extends React.Component {
  state = {
    notes: []
  }
  submitEdits = (e) => {
    e.preventDefault();
    const oldNotes = this.state.notes;
    if (!this.state.notes.some((note) => note.title === e.target.title.value)) {
      const newNote = {
        id: Math.random().toString(36).substr(2, 9),
        title: e.target.title.value,
        info: e.target.info.value,
      };
      oldNotes.push(newNote)
      this.setState({notes: oldNotes});
    } else {
      const updatedNotes = this.state.notes.map((note) => {
        if (note.title === e.target.title.value) {
          return {
            id: note.id,
            title: note.title,
            info: e.target.info.value,
          };
        } else {
          return note;
        }
      })
      this.setState({notes:updatedNotes})
    }
  };
  render () {
    return (
      <div className="App">
        <h1>Notetaking Demo</h1>
        <form onSubmit={this.submitEdits}>
          <p>Title</p>
          <input type="text" name="title" />
          <p>Info</p>
          <input type="text" name="info" />
         <input type="Submit" value="Save"/>
        </form>
        {
         this.state.notes.map((note) => <div key={note.id}>{note.title}: {note.info}</div> ) //Can I do window.localStorage.setItem() on this?
        }
      </div>
    );
  }
}
export default App;