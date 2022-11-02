import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Paper, Grid, Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

export default function ResponsiveDialog(props) {
  const { open, toggleOpen, selectedLoan, updatePay } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const payable = [];
  const handleClose = () => {
    toggleOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogContent>
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
                {
                  headerName: 'Paid',
                  field: 'paid',
                  headerClassName: 'datagrid-header',
                  headerAlign: 'center',
                  align: 'center',
                },
                {
                  headerName: 'Pay',
                  headerClassName: 'datagrid-header',
                  headerAlign: 'center',
                  align: 'center',
                  width: 250,
                  renderCell: (params) => {
                    return (
                      <div>
                        <TextField
                          type='number'
                          id='outlined-size-small'
                          size='small'
                          value={payable[params.row.term]}
                          sx={{
                            width: '100px',
                            marginRight: '10px',
                          }}
                          onChange={(e) => {
                            payable[params.row.term] = e.target.value;
                            console.log('payable', payable);
                            // setFormValues({
                            //   ...formValues,
                            //   amount: e.target.value,
                            // });
                          }}
                        />
                        <Button
                          className='button-bg custom-button'
                          variant='contained'
                          sx={{ fontSize: '10px' }}
                          onClick={() => {
                            updatePay(params.row.term, payable);
                            //   setScheduleRows(params.row.schedule);
                            //   setOpenSchedule(true);
                          }}
                        >
                          Pay
                        </Button>
                      </div>
                    );
                  },
                },
              ]}
              rows={selectedLoan.schedule}
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
