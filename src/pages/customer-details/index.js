import React, { useEffect, useState } from 'react';
import { Box, Paper, Grid, Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getCustomer } from '../../services/customer-service';
import UserCards from '../../components/UserCards';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { saveCustomer } from '../../services/customer-service';

const CustomerDetails = () => {
  let { id } = useParams();
  const [formValues, setFormValues] = React.useState({});
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    getCustomer(id).then((response) => {
      console.log(response);
      setCustomer(response.data[0]);
      setFormValues(response.data[0]);
    });
  }, []);
  const submitForm = () => {
    console.log('formValues', formValues);
    saveCustomer(formValues).then((response) => {
      console.log(response);
    });
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: '100% !important', padding: '14px', margin: '0 !important' }}
    >
      <Grid
        item
        xs={12}
        sm={3}
        md={3}
        sx={{
          padding: '12px',
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
        }}
      >
        <Paper elevation={3}>
          <Card>
            <CardMedia
              component='img'
              alt='green iguana'
              image='/img/male.png'
              sx={{ display: 'inline', width: '50%' }}
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
                      onClick={() => {
                        setFormValues({ ...formValues, gender: 'F' });
                      }}
                    />
                    <FormControlLabel
                      value='male'
                      control={<Radio />}
                      label='Male'
                      checked={formValues.gender === 'M'}
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
                  >
                    Reset
                  </Button>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={9} md={9}>
        <div>xs=4</div>
      </Grid>
    </Grid>
  );
};

export default CustomerDetails;
