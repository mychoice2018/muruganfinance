import React, { useEffect, useState, useCallback } from 'react';
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
import FormGroup from '@mui/material/FormGroup';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DataGrid } from '@mui/x-data-grid';
import UserProfile from '../../components/UserProfile';

import { saveLoan } from '../../services/loan-service';

const AddLoan = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({});
  const [customer, setCustomer] = useState([]);
  const [editable, setEditable] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let tempRows = [];
    let amount = formValues.amount / formValues.due;
    let initval = formValues.incSD === true ? 0 : 1;
    let to =
      formValues.incSD === true ? formValues.due : parseInt(formValues.due) + 1;
    for (let i = initval; i < to; i++) {
      tempRows.push({
        id: formValues.incSD === true ? i + 1 : i,
        term: formValues.incSD === true ? i + 1 : i,
        date: dateGenerator(formValues.startDate, i * formValues.repayIn),
        amount: amount,
      });
    }
    setRows(tempRows);
    console.log('formValues', formValues);
    if (
      formValues.amount !== '' &&
      formValues.repayIn !== '' &&
      formValues.due !== '' &&
      formValues.startDate !== ''
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [formValues]);

  const dateGenerator = (dt, add) => {
    const tomorrow = new Date(dt);
    tomorrow.setDate(tomorrow.getDate() + add);
    let tempDate =
      tomorrow.getDate() +
      '-' +
      (tomorrow.getMonth() + 1) +
      '-' +
      tomorrow.getFullYear();
    return tempDate;
  };

  const submitForm = () => {
    let reqData = formValues;
    reqData.customerId = id;
    reqData.schedule = rows;
    console.log('reqData', reqData);

    saveLoan(formValues).then((response) => {
      console.log(response);
    });
  };

  const checkValidation = () => {};

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
        <UserProfile />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 5,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px',
            }}
          >
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              sx={{
                fontSize: '1em',
                fontWeight: 600,
                textAlign: 'left',
                marginLeft: '5px',
              }}
            >
              Add Loan
            </Typography>
            <Button
              className='button-bg custom-button'
              variant='contained'
              startIcon={<VisibilityIcon />}
              sx={{ marginRight: '10px', marginBottom: '5px' }}
              onClick={() => {
                navigate('/customer/' + id);
              }}
            >
              View Loans
            </Button>
          </div>
          <Box
            component='form'
            disabled
            sx={{
              marginTop: '10px',
              padding: '40px',
              '& .MuiTextField-root': { m: 1, width: '85%' },
            }}
            noValidate
            autoComplete='off'
          >
            <div>
              <TextField
                type='number'
                label='Amount'
                id='outlined-size-small'
                size='small'
                value={formValues.amount}
                defaultValue={formValues.amount}
                disabled={!editable}
                onChange={(e) => {
                  setFormValues({ ...formValues, amount: e.target.value });
                }}
              />
              <TextField
                select
                label='Repay in'
                id='outlined-size-small'
                size='small'
                value={formValues.repayIn}
                disabled={!editable}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    repayIn: e.target.value,
                  });
                }}
              >
                <MenuItem value={1}>Days</MenuItem>
                <MenuItem value={7}>Weeks</MenuItem>
                <MenuItem value={30}>Months</MenuItem>
              </TextField>
            </div>
            <div>
              <TextField
                type='number'
                label='Due'
                id='outlined-size-normal'
                size='small'
                value={formValues.due}
                disabled={!editable}
                onChange={(e) => {
                  setFormValues({ ...formValues, due: e.target.value });
                }}
              />
              <TextField
                type='date'
                label='Start Date'
                id='outlined-size-normal'
                size='small'
                value={formValues.startDate}
                InputLabelProps={{ shrink: true }}
                disabled={!editable}
                onChange={(e) => {
                  setFormValues({ ...formValues, startDate: e.target.value });
                }}
              />
            </div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      setFormValues({ ...formValues, incSD: e.target.checked });
                    }}
                  />
                }
                label='Include the start date'
              />
            </div>
            <div style={{ marginTop: '25px' }}>
              {editable && (
                <>
                  <Button
                    className='button-submit-bg custom-button'
                    variant='contained'
                    startIcon={<CheckBoxIcon />}
                    sx={{ marginRight: '5px' }}
                    disabled={!canSubmit}
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
                      setFormValues({
                        amount: '',
                        repayIn: '',
                        due: '',
                        startDate: '',
                      });
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
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5} md={5}>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 5,
            paddingBottom: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px',
            }}
          >
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              sx={{
                fontSize: '1em',
                fontWeight: 600,
                textAlign: 'left',
                marginLeft: '5px',
              }}
            >
              Schedule Preview
            </Typography>
          </div>
          <DataGrid
            columns={[
              {
                headerName: 'Term',
                field: 'term',
                headerClassName: 'datagrid-header',
                headerAlign: 'center',
                align: 'center',
              },
              {
                headerName: 'Date',
                field: 'date',
                headerClassName: 'datagrid-header',
                headerAlign: 'center',
                align: 'center',
                width: 150,
              },
              {
                headerName: 'Amount',
                field: 'amount',
                headerClassName: 'datagrid-header',
                headerAlign: 'center',
                align: 'center',
              },
            ]}
            rows={rows}
            sx={{
              minHeight: '400px',
              maxHeight: '600px',
              background: '#fff',
              borderRadius: 5,
              marginX: '20px',
              marginBottom: '10px',
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddLoan;
