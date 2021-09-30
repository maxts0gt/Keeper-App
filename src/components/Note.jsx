import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core';

function Note(props) {
	function handClick() {
		props.onDelete(props.id);
	}

	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<Fab onClick={handClick}>
				<DeleteIcon />
			</Fab>
		</div>
	);
}

export default Note;
