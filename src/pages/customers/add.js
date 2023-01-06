import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { UploadFile } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { saveCustomer } from '../../services/customer-service';

export default function Add() {
  let navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({});
  const [formStatus, setFormStatus] = React.useState('');
  const [selectedImg, setSelectedImg] = React.useState('');

  const submitForm = () => {
    console.log('formValues', formValues);
    saveCustomer(formValues).then((response) => {
      console.log('Addcustomer ----', response);
      if (
        response &&
        response.data &&
        response.data.name &&
        response.data._id
      ) {
        setFormStatus('success');
      }
    });
  };

  const resetForm = () => {
    setFormValues({
      name: '',
      shopName: '',
      gender: '',
      address: '',
      mobile: '',
    });
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
        autoComplete='off'
      >
        <div>
          <TextField
            label='Name'
            id='outlined-size-small'
            size='small'
            value={formValues.name}
            required
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
        <div>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            className='allCenter'
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
              onClick={() => {
                setFormValues({ ...formValues, gender: 'F' });
              }}
            />
            <FormControlLabel
              value='male'
              control={<Radio />}
              label='Male'
              onClick={() => {
                setFormValues({ ...formValues, gender: 'M' });
              }}
            />
          </RadioGroup>
        </div>
        <div style={{ marginTop: '25px' }}>
          <Button
            className='button-submit-bg custom-button'
            variant='contained'
            startIcon={<CheckBoxIcon />}
            sx={{ marginRight: '5px' }}
            disabled={!formValues.name}
            onClick={() => {
              submitForm();
            }}
          >
            Submit
          </Button>
          <Button
            className='button-reset-bg custom-button'
            variant='contained'
            startIcon={<CancelOutlinedIcon />}
            onClick={() => {
              resetForm();
            }}
          >
            Reset
          </Button>
        </div>
        {/* <div className='flexRow allCenter'>
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
        </div> */}

        {formStatus === 'success' && (
          <Alert severity='success'>
            This is a success alert — check it out!
          </Alert>
        )}
        {formStatus === 'error' && (
          <Alert severity='success'>
            This is a success alert — check it out!
          </Alert>
        )}
      </Box>
    </div>
  );
}
