import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Lists = () => {

    const rows = [
        {
            id: 123432,
            product: "Earphone",
            img: "https://www.maxbhi.com/images/detailed/4505/earphone_for_infinix_hot_10_by_maxbhicom.jpg",
            customer: "Williom Son",
            date: "2 Aprail",
            amount: 1200,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 123432,
            product: "Earphone",
            img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
            customer: "Williom Son",
            date: "2 Aprail",
            amount: 1200,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 123432,
            product: "Earphone",
            img: "https://www.maxbhi.com/images/detailed/4505/earphone_for_infinix_hot_10_by_maxbhicom.jpg",
            customer: "Williom Son",
            date: "2 Aprail",
            amount: 1200,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 123432,
            product: "Earphone",
            img: "https://5.imimg.com/data5/RB/EN/MY-7483526/hand-free-500x500.jpg",
            customer: "Williom Son",
            date: "2 Aprail",
            amount: 1200,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 123432,
            product: "Earphone",
            img: "https://www.maxbhi.com/images/detailed/4505/earphone_for_infinix_hot_10_by_maxbhicom.jpg",
            customer: "Williom Son",
            date: "2 Aprail",
            amount: 1200,
            method: "Cash on Delivery",
            status: "Approved",
        },
    ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} className="image" alt="" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>    
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Lists
