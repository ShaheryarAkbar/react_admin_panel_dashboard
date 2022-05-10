import "./featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertOutlinedIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={72} text={"72%"} strokeWidth={5}/>
        </div>
        <div className="title">Total Sales made today</div>
        <div className="amount">$420</div>
        <div className="desc">
            previous transaction processing. Last payments may not be included.
        </div>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult positive">
                    <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                    <div className="resultAmount">$12.5k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult negative">
                    <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                    <div className="resultAmount">$12.5k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last MOnth</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                    <div className="resultAmount">$12.5k</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
