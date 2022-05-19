import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { UploadFile } from '@mui/icons-material';

export default function Add() {
  let navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({});
  const [selectedImg, setSelectedImg] = React.useState('');
  const UploadFile = (e) => {
    const data = new FormData();
    // data.append('source', e.target.files[0]);
    // data.append('key', '6d207e02198a847aa98d0a2a901485a5');
    // data.append('format', 'json');
    // data.append('action', 'upload');
    // fetch('https://freeimage.host/api/1/upload', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: data,
    // }).then((response) => {
    //   console.log(response.json());
    // });
    // data.append('image', e.target.files[0]);
    // data.append('key', 'e0d83879e1ad6f632ffe14ace9a49327');
    // data.append('name ', 'financier-customers');
    // fetch('https://api.imgbb.com/1/upload', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: data,
    // }).then((response) => {
    //   console.log(response.json());
    // });
    imageKitId = 'u2vyzskia'
  };
  return (
    <div style={{ margin: '10px' }}>
      <div className='flexRow justify-sb'>
        <Typography
          variant={'h5'}
          sx={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600 }}
        >
          Add Customer
        </Typography>
        <Button
          variant='contained'
          className='button-bg custom-button'
          startIcon={<VisibilityIcon />}
          onClick={() => {
            navigate('/customers');
          }}
        >
          Customers
        </Button>
      </div>
      <Box
        component='form'
        sx={{
          marginTop: '20px',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <div>
          <TextField
            label='Name'
            id='outlined-size-small'
            size='small'
            value={formValues.name}
            onChange={(e) => {
              setFormValues({ ...formValues, name: e.target.value });
            }}
          />
          <TextField
            label='Mobile'
            id='outlined-size-normal'
            size='small'
            value={formValues.mobile}
            onChange={(e) => {
              setFormValues({ ...formValues, mobile: e.target.value });
            }}
          />
        </div>
        <div>
          <TextField
            label='Shop Name'
            id='outlined-size-small'
            size='small'
            value={formValues.shopName}
            onChange={(e) => {
              setFormValues({ ...formValues, shopName: e.target.value });
            }}
          />
          <TextField
            multiline
            label='Address'
            id='outlined-size-normal'
            size='small'
            value={formValues.address}
            onChange={(e) => {
              setFormValues({ ...formValues, address: e.target.value });
            }}
          />
        </div>
        <div className='flexRow allCenter'>
          <label>
            {selectedImg === '' ? ' Add Picture' : 'Selected Picture'}
          </label>
          <input
            accept='image/*'
            style={{ display: 'none' }}
            id='raised-button-file'
            type='file'
            onChange={(e) => {
              console.log(e.target.files);
              if (e.target.files && e.target.files[0]) {
                UploadFile(e);
                setSelectedImg(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          <label htmlFor='raised-button-file'>
            {selectedImg === '' ? (
              <AccountBoxIcon
                sx={{
                  height: '150px',
                  width: '150px',
                  color: '#ccc',
                  cursor: 'pointer',
                }}
              />
            ) : (
              <img
                src={selectedImg}
                style={{
                  height: '150px',
                  width: '150px',
                  color: '#ccc',
                  cursor: 'pointer',
                  margin: '20px',
                  borderRadius: '15px',
                }}
              />
            )}
          </label>
        </div>
      </Box>
    </div>
  );
}
