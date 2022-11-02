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
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DataGrid } from '@mui/x-data-grid';
import UserProfile from '../../components/UserProfile';
import ScheduleDialog from '../../components/dialog/schedule';

import { getLoan, updateLoan } from '../../services/loan-service';

const CustomerDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({});
  const [customer, setCustomer] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState([]);
  const [loans, setLoans] = useState([]);
  const [editable, setEditable] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);
  useEffect(() => {
    getLoan(id).then((response) => {
      console.log('loanUseEffect', response);
      let tempLoans = JSON.parse(JSON.stringify(response.data));
      tempLoans.forEach((tempLoan, index) => {
        tempLoan.id = index + 1;
      });
      setLoans(tempLoans);
    });
  }, []);

  const getTermName = (params) => {
    return params.row && params.row.repayIn && params.row.repayIn === 1
      ? 'Daily'
      : params.row.repayIn === 7
      ? 'Weekly'
      : 'Monthly';
  };
  //   const submitForm = () => {
  //     console.log('formValues', formValues);
  //     saveCustomer(formValues).then((response) => {
  //       console.log(response);
  //     });
  //   };
  const updatePay = (termNo, payable) => {
    console.log('termNo', termNo);
    console.log('payable', payable[termNo]);
    let tempSelectedLoans = JSON.parse(JSON.stringify(selectedLoan));
    let tempLoans = JSON.parse(JSON.stringify(loans));
    tempSelectedLoans.schedule.forEach((schdl) => {
      if (schdl.term === termNo) {
        schdl.paid = parseInt(payable[termNo]);
      }
    });
    const saveBody = {
      term: termNo,
      paid: payable[termNo],
      date: new Date().toISOString().slice(0, 10),
    };
    updateLoan({ updateBody: tempSelectedLoans, saveBody: saveBody }).then(
      (response) => {
        console.log('updateLoan', response);
        setSelectedLoan(tempSelectedLoans);
      }
    );
    // tempLoans.forEach((loan) => {
    //   if (loan._id === selectedLoan._id) {
    //     loan = selectedLoan;
    //   }
    // });
    // console.log('tempLoans', tempLoans);
    // setLoans([...tempLoans]);
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
        <UserProfile />
      </Grid>
      <Grid item xs={12} sm={9} md={9}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
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
            Loans
          </Typography>
          <Button
            className='button-bg custom-button'
            variant='contained'
            startIcon={<AddCircleIcon />}
            sx={{ marginRight: '10px', marginBottom: '5px' }}
            onClick={() => {
              navigate('/addloan/' + id);
            }}
          >
            Add Loan
          </Button>
        </div>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 5,
          }}
        >
          <DataGrid
            columns={[
              {
                headerName: '#',
                field: 'id',
                headerClassName: 'datagrid-header',
                headerAlign: 'center',
                align: 'center',
              },
              {
                headerName: 'Term',
                field: 'repayIn',
                headerClassName: 'datagrid-header',
                headerAlign: 'center',
                align: 'center',
                valueGetter: getTermName,
              },
              {
                headerName: 'Due',
                field: 'due',
                headerClassName: 'datagrid-header',
                headerAlign: 'center',
                align: 'center',
              },
              {
                headerName: 'Start Date',
                field: 'startDate',
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
              {
                headerName: 'Actions',
                headerClassName: 'datagrid-header',
                headerAlign: 'center',
                align: 'center',
                width: 180,
                renderCell: (params) => {
                  return (
                    <Button
                      className='button-bg custom-button'
                      variant='contained'
                      sx={{ fontSize: '10px' }}
                      onClick={() => {
                        setSelectedLoan(params.row);
                        setOpenSchedule(true);
                      }}
                    >
                      View Schedules
                    </Button>
                  );
                },
              },
            ]}
            rows={loans}
            sx={{
              minHeight: '300px',
              maxHeight: '300px',
              background: '#fff',
              borderRadius: 5,
              padding: '15px',
            }}
          />
        </Paper>
      </Grid>
      <ScheduleDialog
        open={openSchedule}
        toggleOpen={(val) => {
          setOpenSchedule(val);
        }}
        selectedLoan={selectedLoan}
        updatePay={(termNo, payable) => {
          updatePay(termNo, payable);
        }}
      />
    </Grid>
  );
};

export default CustomerDetails;
