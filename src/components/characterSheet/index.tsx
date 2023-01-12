import * as React from 'react';
import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import FormControlLabel from '@mui/material/FormControlLabel';


export default function CharacterSheet() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};


	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				New Character
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Character Sheet</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Name"
						type="text"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Save</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}