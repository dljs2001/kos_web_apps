import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

const AddAppDialog = ({ open, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    thumbnail: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: '', url: '', thumbnail: '' });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add New App</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="App Name"
            fullWidth
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="App URL"
            fullWidth
            required
            value={formData.url}
            onChange={(e) =>
              setFormData({ ...formData, url: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Thumbnail URL (Optional)"
            fullWidth
            value={formData.thumbnail}
            onChange={(e) =>
              setFormData({ ...formData, thumbnail: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddAppDialog;