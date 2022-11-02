import React, { useEffect, useState } from 'react';
import { Box, Paper, Grid, Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getCustomer } from '../../services/customer-service';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

import { saveCustomer, updateCustomer } from '../../services/customer-service';

const CustomerDetails = () => {
  let { id } = useParams();
  const [formValues, setFormValues] = React.useState({});
  const [customer, setCustomer] = useState([]);
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    getCustomer(id).then((response) => {
      console.log(response);
      setCustomer(response.data[0]);
      setFormValues(response.data[0]);
    });
  }, []);
  const submitForm = () => {
    console.log('formValues', formValues);
    formValues.customerId = id;
    updateCustomer(formValues).then((response) => {
      console.log(response);
    });
  };
  return (
    <Paper elevation={3} sx={{ borderRadius: '20px' }}>
      <Card sx={{ borderRadius: '20px' }}>
        <CardMedia
          component='img'
          alt='green iguana'
          image='/img/male.png'
          sx={{ display: 'inline', width: '35%', marginTop: '15px' }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ fontSize: '1em', fontWeight: 600 }}
          >
            {customer.name}
          </Typography>
          <Box
            component='form'
            disabled
            sx={{
              marginTop: '20px',
              '& .MuiTextField-root': { m: 1, width: '85%' },
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
                InputLabelProps={{ shrink: true }}
                defaultValue={formValues.name}
                disabled={!editable}
                onChange={(e) => {
                  setFormValues({ ...formValues, name: e.target.value });
                }}
              />
              <TextField
                label='Mobile'
                id='outlined-size-normal'
                size='small'
                value={formValues.mobile}
                InputLabelProps={{ shrink: true }}
                disabled={!editable}
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
                InputLabelProps={{ shrink: true }}
                disabled={!editable}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    shopName: e.target.value,
                  });
                }}
              />
              <TextField
                multiline
                label='Address'
                id='outlined-size-normal'
                size='small'
                value={formValues.address}
                InputLabelProps={{ shrink: true }}
                disabled={!editable}
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
                  checked={formValues.gender === 'F'}
                  disabled={!editable}
                  onClick={() => {
                    setFormValues({ ...formValues, gender: 'F' });
                  }}
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                  checked={formValues.gender === 'M'}
                  disabled={!editable}
                  onClick={() => {
                    setFormValues({ ...formValues, gender: 'M' });
                  }}
                />
              </RadioGroup>
            </div>
            <div style={{ marginTop: '25px' }}>
              {editable && (
                <>
                  <Button
                    className='button-submit-bg custom-button'
                    variant='contained'
                    startIcon={<CheckBoxIcon />}
                    sx={{ marginRight: '5px' }}
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
                      setEditable(false);
                    }}
                  >
                    Cancel
                  </Button>
                </>
              )}
              {!editable && (
                <Button
                  className='button-bg custom-button'
                  variant='contained'
                  startIcon={<ModeEditOutlineOutlinedIcon />}
                  sx={{ marginRight: '5px' }}
                  onClick={() => {
                    setEditable(true);
                  }}
                >
                  Edit
                </Button>
              )}
            </div>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default CustomerDetails;
